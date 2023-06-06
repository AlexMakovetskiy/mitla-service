import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

interface IThemeContext {
    theme: string
    handleTheme: () => void
}

interface IThemeProvider {
    children: ReactNode;
}

const ThemeContext = createContext<IThemeContext | null>(null);

function ThemeProvider (props: IThemeProvider) {
    const [theme, setTheme] = useState('light');
    
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
}

export {ThemeContext, ThemeProvider};