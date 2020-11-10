import HomePageTop from './HomePageTop';
import SearchBar from '../Search/SearchBar';
import CarouselPage from '../Carousel/CarouselPage';
import SearchMovie from '../Search/SearchMovie';
 
function HomePage(props) {
    return (
        <div className='homePage'>
            <div className='homePage__top'>
                <HomePageTop /> 
            </div>
            <div className='homePage__search'>
                <SearchBar/>
            </div>
            <div className='homePage__searchMovie'>
                <SearchMovie/>
            </div>
            <div className='homePage__carousel'>
                <CarouselPage info={props.info}/>
            </div>
        </div>
    )
}

export default HomePage;