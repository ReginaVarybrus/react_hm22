import '../css/toggler.css';

import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";

const Header = () => {
    const themeCtx = useContext(ThemeContext);

    const handleThemeChange = () => {
        themeCtx.changeTheme();
    }
    return (
        <div>
            <input onClick={handleThemeChange} type="checkbox"></input>
        </div>
    )
}

export default Header;