import React from 'react';
import StyledPagination from './Pagination.style';

export default function Pagination(props) {
    const prev = () => {
        props.onPaginate(props.currentPage - 1);
    }

    const next = () => {
        props.onPaginate(props.currentPage + 1);
    }

    return (
        <StyledPagination>
            Showing {props.currentPage + 1} of {props.totalPages}
            <br />
            <button className="pagination-cta" onClick={prev} disabled={props.currentPage === 0}>prev page</button>
            <button className="pagination-cta" onClick={next} disabled={props.currentPage >= props.totalPages}>next page</button>
        </StyledPagination>
    );
}