import { useContext } from "react";
import HeroCard from "./HeroCard";
import { HttpHerosContext } from "../providers/HttpContext";

const HeroList = () => {
    const httpCtx = useContext(HttpHerosContext);

    console.log(httpCtx.heroList);

    return (
        <div className="Hero-List">
            {httpCtx.heroList?.results &&
                httpCtx.heroList.results.map((hero) => (
                    <HeroCard key={hero.id} className="Hero-Card">
                        <div>
                            <p>{hero.name}</p>
                            <p>{hero.status}</p>
                        </div>
                        <img src={hero.image}></img>
                    </HeroCard>
                ))}
        </div>
    )
}

export default HeroList;