import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from '../redux/reducers/rootReducer';
import {createWrapper} from 'next-redux-wrapper';
import {composeWithDevTools} from 'redux-devtools-extension'


import '../Style/Navbar.scss';
import '../Style/HomePageTop.scss';
import '../Style/SearchBar.scss';
import '../Style/HomePage.scss';
import '../Style/CarouselPage.scss';
import '../Style/CarouselItem.scss';
import '../Style/SearchMovie.scss';
import '../Style/SearchMovieItem.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer,composeWithDevTools());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);