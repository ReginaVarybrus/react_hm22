import React from "react";
import { HttpHerosContext } from "../providers/HttpContext";
// import HttpUrl from './ConstURLpath';

class Pagination extends React.Component {
    static contextType = HttpHerosContext;

    constructor(props) {
        super(props);

        this.handlerPrevPage = this.handlerPrevPage.bind(this);
        this.handlerNextPage = this.handlerNextPage.bind(this);
        this.pagination = this.pagination.bind(this);
    }

    handlerPrevPage = () => {
        this.context.fetchHeros(this.context.heroList.info.prev);
        console.log('prev page', this.context.heroList.info.prev);
    }

    handlerNextPage() {
        this.context.fetchHeros(this.context.heroList.info.next);
        console.log('next page', this.context.heroList.info.next);
    }

    pagination() {
        let pageNumbers = [];

        for (let i = 1; i <= this.context.heroList?.info?.pages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    render() {
        console.log(this.context.heroList.info, this.context.currentPage);
        return (
            <div className="Pagination">
                    <button onClick={this.handlerPrevPage} disabled={this.context.heroList.info?.prev === null}>Prev</button>
                    <ul className="Pagination-list">
                        {this.pagination().map((page) => (
                            <li
                                key={page}
                                onClick={() => this.context.getPageNumber(page)}>
                                {page}
                            </li>
                        ))}
                    </ul>
                    <button onClick={this.handlerNextPage} disabled={this.context.heroList.info?.next === null}>Next</button>
            </div>
        )
    }
}

export default Pagination;