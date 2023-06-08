import { useContext } from 'react';

import { ThemeHookType } from '../interfaces/components/Props';
import { ThemeContext } from '../components/context/ThemeContext';

const useTheme: ThemeHookType = () => {
    return useContext(ThemeContext);
};

export default useTheme;