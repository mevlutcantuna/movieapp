import unfetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';


function CarouselPage(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='carouselPage'>
            <div className='carouselPage__title'>
                <h2>Popular Movies</h2>
            </div>
            <div className='carouselPage__carousel'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {props.info.Search.map((items) => (
                        <Carousel.Item key={items.imdbID}>
                            <CarouselItem info={items} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const data = await unfetch('http://www.omdbapi.com/?apikey=2ffffb97&s=galaxy');
    const movies = await data.json();
    return {
        props: {
            movies
        },
    }
}

export default CarouselPage;