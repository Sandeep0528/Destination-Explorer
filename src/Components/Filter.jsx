import React from 'react'

const Filter = ({ setCategory, setRating }) => {
    return (
        <div className='filters'>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Heritage">Heritage</option>
                <option value="Heritage">Heritage</option>
            </select>

            <select onChange={(e) => setRating(Number(e.target.value))}>
                <option value="0">All rating</option>
                <option value="4">4+</option>
                <option value="4.5">4.5+</option>
            </select>

        </div>
    )
}

export default Filter
