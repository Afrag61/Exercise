import { createContext, useState } from "react";
// Todo: Create & manage context in this file

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
})

export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
  }
  