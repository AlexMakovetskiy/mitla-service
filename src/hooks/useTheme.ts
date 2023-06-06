import { useContext } from 'react';

import { ThemeContext } from '../components/Context/ThemeContext';

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;