import { useDispatch } from 'react-redux';

import { store } from '../store';

type DispatchTyped = typeof store.dispatch;

const useAppDispatch = () => useDispatch<DispatchTyped>();

export default useAppDispatch;