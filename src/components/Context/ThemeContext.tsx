import React, { FC, createContext, useCallback, useEffect, useState } from 'react'; 

import { IThemeContext, IThemeProviderProps } from '../../interfaces/components/Props';

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider: FC<IThemeProviderProps> = (props) => {
    const [theme, setTheme] = useState<string>('light');
    
    useEffect ( () => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const handleTheme = useCallback (() => {
        setTheme( theme === 'light' ? 'dark' : 'light' );
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, handleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

React.memo(ThemeProvider);

export {ThemeContext,  ThemeProvider};