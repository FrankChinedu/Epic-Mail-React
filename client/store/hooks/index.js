import { useEffect } from 'react';
import { getUser } from '../actions/authActions';

const useSetUser = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return [];
};

export default useSetUser;
