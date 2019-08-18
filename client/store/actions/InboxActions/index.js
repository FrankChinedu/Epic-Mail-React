import { axiosCall } from '../../../utils';

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

export default getInboxActions;
