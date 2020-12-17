import React from 'react';

const Records = ({ records, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <ul className='list-group mb-4'>
            {records.map(record => (
                <li key={record.id} className='list-group-item'>{record.title}</li>
            ))}
        </ul>
    )
}
export default Records;