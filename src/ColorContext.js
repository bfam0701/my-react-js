import { createContext, useState } from "react";

const ThemeContext = createContext()


function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("red")

    const toggleTheme = () => {
        setTheme(theme === "red" ? "blue" : "red")
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}


export { ThemeContext, ThemeProvider }