import React from 'react';

const Pagination = ({ recordsPerPage, totalRecords, paginate}) => {
    const pageNos = [];
    for (let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
        pageNos.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNos.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className='page-link'>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination;