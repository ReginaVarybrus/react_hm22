import React, { useState, useEffect } from "react";
import { HttpHerosContext } from "./httpContext";
import HttpUrl from './constURLpath';

const HttpHerosProvider = (props) => {
    const [heroList, setHeroList] = useState([]);

    useEffect(() => fetchHeros(HttpUrl), []);

    const fetchHeros = (pageUrl) => {
        fetch(pageUrl)
            .then((response) => response.json())
            .then((data) => setHeroList(data))
            .catch(err => console.log('Error'))
    };

    const getHeroCtx = () => {
        return {
            heroList,
            fetchHeros
        }
    };

    return <HttpHerosContext.Provider value={getHeroCtx()}>
        {props.children}
    </HttpHerosContext.Provider>
}

export default HttpHerosProvider;