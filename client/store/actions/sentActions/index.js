import { axiosCall } from '../../../utils';
import toast from '../../../components/Toast';

export const setSentReducer = payload => ({
  type: 'SENT_SUCCESS',
  payload
});

export const getSentActions = () => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: '/api/v1/messages/sent',
      method: 'get'
    });
    dispatch(setSentReducer(result.data));
  } catch (error) {
    const { response } = error;
    const message = response.data && response.data.error;
    console.log('here', message);
  }
};

export const handleSentDeleteActions = id => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: `/api/v1/messages/sent/${id}`,
      method: 'delete'
    });
    toast(result.data, 'success');
    dispatch(getSentActions());
  } catch (error) {
    const { response } = error;
    const message = response.data && response.data.error;
    console.log('here', message);
  }
};

export default getSentActions;
