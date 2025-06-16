import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Topcarousel from './Components/Topcarousel'
import Filter from './Components/Filter'
import PlaceList from './Components/PlaceList'
import ScrollToTopButton from './Components/ScrollToTopButton'
import mockData from "./Data/MockCityData.json"
import Footer from './Components/Footer'
import images from './src/assets/images'
const App = () => {
    const [category, setCategory] = useState("All");
    const [rating, setRating] = useState(0);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        let filtered = mockData.filter(
            (place) =>
                (category === "All" || place.category === category) &&
                place.rating >= rating
        );
        setPlaces(filtered)
    }, [category, rating])

    return (
        <div>
            <Header />
            <Topcarousel places={mockData.slice(0, 11)} />
            <Filter setCategory={setCategory} setRating={setRating} />
            <PlaceList places={places} />
            <ScrollToTopButton />
            <Footer />
        </div>
    )
}

export default App
