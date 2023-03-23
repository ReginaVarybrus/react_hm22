import { useContext } from "react";
import Header from './header';
import HeroList from './heroList';
import { ThemeContext } from "../providers/themeContext";
import Pagination from "./pagination";

const HomePage = () => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className={themeCtx.theme ? 'Theme-Light' : 'Theme-Dark'}>
            <Header />
            <HeroList />
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <Pagination theme={theme} />
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

export default HomePage;

// Напишите приложение на реакт с использованием контекста.
// Приложение должно состоять из провайдера запросов на бэк
// и списка персонажей, который будет подгружатся с бэка.
// Списком выступает перечень персонажей из Рик и Морти апи.
// Добавте пагинацию под список.

// сделайте переключатель темы Светлая/Темная,
// которая будет менять цвет фона с темного на светлый,
// по аналогии с предыдущим ДЗ.
// Пагинатор (компонент с выбором странички)
// реализйте классовым компонентом, он должен менят
//  цвет фона и в зависимости от выбранной темы.