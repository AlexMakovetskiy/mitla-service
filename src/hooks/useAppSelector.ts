import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { store} from '../store';

type StateStore = ReturnType<typeof store.getState>;

const useAppSelector: TypedUseSelectorHook<StateStore> = useSelector;

export default useAppSelector;