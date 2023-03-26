import React, { useState, useEffect } from "react";
import { HttpHerosContext } from "./HttpContext";

const HttpHerosProvider = (props) => {
    const [heroList, setHeroList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const HttpUrl = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

    useEffect(() => fetchHeros(HttpUrl), [currentPage]);

    const fetchHeros = (pageUrl) => {
        fetch(pageUrl)
            .then((response) => response.json())
            .then((data) => setHeroList(data))
            .catch(err => console.log('Error'))
    };

    const getPageNumber = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const getHeroCtx = () => {
        return {
            heroList,
            fetchHeros,
            currentPage,
            getPageNumber
        }
    };

    return <HttpHerosContext.Provider value={getHeroCtx()}>
        {props.children}
    </HttpHerosContext.Provider>
}

export default HttpHerosProvider;