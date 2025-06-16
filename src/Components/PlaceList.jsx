import React from 'react'
import Placecard from './Placecard'
import '../Placelist.css'
const PlaceList = ({ places }) => {
    return (
        <div className='place-list'>
            {
                places.map((place) => (
                    <Placecard key={place.id} place={place} />
                ))
            }
        </div>
    )
}

export default PlaceList
