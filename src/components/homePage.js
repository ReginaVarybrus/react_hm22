import { useContext } from "react";
import Header from './Header';
import HeroList from './HeroList';
import { ThemeContext } from "../providers/ThemeContext";
import Pagination from "./Pagination";

const HomePage = () => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className={themeCtx.theme ? 'Theme-Light' : 'Theme-Dark'}>
            <Header />
            <HeroList />
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <Pagination className={theme ? 'Theme-Light' : 'Theme-Dark'} theme={theme}/>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

export default HomePage;

