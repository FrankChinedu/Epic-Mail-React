import { axiosCall } from '../../../utils';
import toast from '../../../components/Toast';

export const setDraftReducer = payload => ({
  type: 'DRAFT_SUCCESS',
  payload
});

export const getDraftActions = () => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: '/api/v1/messages/draft',
      method: 'get'
    });
    dispatch(setDraftReducer(result.data));
  } catch (error) {
    const { response } = error;
    const message = response.data && response.data.error;
    console.log('here', message);
  }
};

export const handleDraftDeleteActions = id => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: `/api/v1/messages/draft/${id}`,
      method: 'delete'
    });
    toast(result.data, 'success');
    dispatch(getDraftActions());
  } catch (error) {
    const { response } = error;
    const message = response.data && response.data.error;
    console.log('here', message);
  }
};

export default getDraftActions;
