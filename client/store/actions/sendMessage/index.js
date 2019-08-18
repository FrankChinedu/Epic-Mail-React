import { axiosCall } from '../../../utils';
import toast from '../../../components/Toast';

export const setSuccess = () => ({
  type: 'SEND_SUCCESS'
});

export const sendMessageAction = values => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: '/api/v1/messages',
      payload: values,
      method: 'post'
    });
    toast(result.message, 'success');
    dispatch(setSuccess());
  } catch (error) {
    const { response } = error;
    const message = response.data && response.data.error;
    toast(message, 'error');
  }
};

export default sendMessageAction;
