import Carousel from 'react-bootstrap/Carousel'

// import 'bootstrap/dist/css/bootstrap.min.css'
const Topcarousel = ({ places }) => {
    return (
        <div>
            <Carousel>
                {
                    places.map((place) => (
                        <Carousel.Item key={place.id}>
                            <img className='d-block w-100' src={place.images[0]} alt={place.name} />
                            <Carousel.Caption>
                                <h3>{place.name}</h3>
                                <p>{place.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Topcarousel
