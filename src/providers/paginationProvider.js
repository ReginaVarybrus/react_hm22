import React, { useState, useEffect } from "react";
import { PaginationContext } from "./paginationContext";
import HttpUrl from './constURLpath';
import { HttpHerosContext } from "../providers/httpContext";


const PaginationProvider = (props) => {
    let [page, setPage] = useState(1);
    
    useEffect(() => pagination(HttpUrl), []);

    const pagination = (pageUrl) => {

        const urlParams = new URL(pageUrl);
        console.log('url =>', urlParams.href);
        const currentPage = urlParams.searchParams.get('page');
        console.log('page =>', currentPage);
        setPage(currentPage);
        
    }


    const getPaginationValue = () => {
        return {
            page,
            pagination
        }
    };

    return <PaginationContext.Provider value={getPaginationValue()}>
        {props.children}
    </PaginationContext.Provider>
}

export default PaginationProvider;