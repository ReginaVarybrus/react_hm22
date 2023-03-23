import React from "react";
import PaginationContext from '../providers/paginationProvider';

class Pagination extends React.Component {
    static contextType = PaginationContext;
    
    constructor (props) {
        super(props);

        this.state = {
            heros: [],
            currentPage: 1,
            herosPerPage: 20
        }
    }
    
    
    render() {
        return (
            <div className="Pagination">
                <p>{this.context.currentPage}</p>
            </div>
        )
    }
}

export default Pagination;