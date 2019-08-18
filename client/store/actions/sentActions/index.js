import { axiosCall } from '../../../utils';

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

export default getSentActions;
