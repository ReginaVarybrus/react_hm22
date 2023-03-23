import React, {useState} from "react";
import { ThemeContext } from "./themeContext";

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(true);

    const changeTheme = () => setTheme(!theme);

    const getContextValue = () => {
        return {
            changeTheme,
            theme
        }
    };

    return <ThemeContext.Provider value={getContextValue()}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeProvider;