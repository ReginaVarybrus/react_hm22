import '../css/toggler.css';

import { useContext  } from "react";
import { ThemeContext } from "../providers/themeContext";

const Header = () => {
    const themeCtx = useContext(ThemeContext);

    const handleThemeChange = () => {
        themeCtx.changeTheme();
    }
    return (
        <div>
            {/* <label className="switch">
              <input type="checkbox" checked />
              <span className="slider round"></span>
            </label> */}
            <button onClick={handleThemeChange} className={themeCtx.theme ? 'Button-Light' : 'Button-Dark'}>
                Change theme to {themeCtx.theme ? 'Light' : 'Dark'}
            </button>
        </div>
    )
}

export default Header;