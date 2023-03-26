import React from "react";

export const HttpHerosContext = React.createContext({
    heroList: [],
    fetchHeros: () => { },
    currentPage: '',
    getPageNumber: () => { },
});