import React, { createContext, useContext, useState } from "react";


interface ITheme {
    darkMode: boolean
}

// From the code below you can see that the values can be undefined as well
type IThemeContext = [ITheme, React.Dispatch<React.SetStateAction<ITheme>>];

const darkMode: ITheme = {
    darkMode: false
}

export const ThemeContext = createContext<IThemeContext>([darkMode, () => false]);

// export const ProductContext = React.createContext<IProductContext>([[], () => null]);

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

const ThemeContextProvider = ({children}: { children?: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState<ITheme>({darkMode: false});

    return (
        <ThemeContext.Provider value={[darkMode, setDarkMode]}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;