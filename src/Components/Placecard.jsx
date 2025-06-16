import React, { useState } from 'react'
import '../Placecard.css'
const Placecard = ({ place }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='place-card'>
            <img src={place.images[0]} alt={place.name} />
            <h3>{place.name}</h3>
            <p>Category:{place.category}</p>
            <p>Rating:{place.rating}</p>
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show less" : "Show more"}
            </button>
            {expanded && (
                <div className='place-details'>
                    <p>{place.description}</p>
                    <div className='place-gallery'>
                        {
                            place.images.map((img, i) => (
                                <img key={i} src={img} alt={`img-${i}`} />
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Placecard
