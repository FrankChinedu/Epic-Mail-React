import { axiosCall } from '../../../utils';
import toast from '../../../components/Toast';

export const setInboxReducer = payload => ({
  type: 'INBOX_SUCCESS',
  payload
});

export const getInboxActions = () => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: '/api/v1/messages',
      method: 'get'
    });
    dispatch(setInboxReducer(result.data));
  } catch (error) {
    const { response } = error;
    const message = response.data && response.data.error;
    console.log('here', message);
  }
};

export const deleteInboxMessage = id => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: `/api/v1/messages/${id}`,
      method: 'delete'
    });
    toast(result.data, 'success');
    dispatch(getInboxActions());
  } catch (error) {
    const { response } = error;
    const message = response.data && response.data.error;
    console.log('here', message);
  }
};

export default getInboxActions;
