import { useContext } from "react";
import HeroCard from "./heroCard";
import { HttpHerosContext } from "../providers/httpContext";
import { PaginationContext } from "../providers/paginationContext";


const HeroList = () => {
    const httpCtx = useContext(HttpHerosContext);
    const paginationCtx = useContext(PaginationContext);

    console.log(httpCtx);

    const handlerPrevPage = () => {
        // if (httpCtx.heroList.info.prev === null) {
        //     // disabled = true;
        //     console.log('disabled');
        // } else {
        //     console.log('undisabled');
        //     // disabled= false;
        // }
        httpCtx.fetchHeros(httpCtx.heroList.info.prev);
        // console.log('pag =>', paginationCtx.page);
    }

    const handlerNextPage = () => {
        // if (httpCtx.heroList.info.next === null) {
        //     // disabled = true;
        //     console.log('disabled');
        // } else {
        //     // console.log('undisabled');
        //     // disabled= false;
        // }
        httpCtx.fetchHeros(httpCtx.heroList.info.next);
        console.log(httpCtx.heroList.info)
    }

    return (
        <div className="Hero-List">
            {httpCtx.heroList?.results &&
                httpCtx.heroList.results.map((hero) => (
                    <HeroCard key={hero.id}>
                        {hero.name} {hero.status}
                    </HeroCard>
                ))}
            <div className="Buttons">
                <button onClick={handlerPrevPage}>Prev</button>
                <button onClick={handlerNextPage}>Next</button>
            </div>
        </div>
    )
}

export default HeroList;