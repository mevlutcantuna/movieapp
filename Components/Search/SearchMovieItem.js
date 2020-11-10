import React from "react";

export default function SearchMovieItem(props) {
  return (
    <div className="searchMovieItem">
      <div className="searchMovieItem__image">
        {props.img === 'N/A' ? (
          <img
            src={
              "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
            }
          />
        ) : (
          <img src={props.img}/>
        )}
        <div className='searchMovieItem__image__bottom'>
        <span className='searchMovieItem__image__bottom__type'>{props.type}</span>
        <button className='searchMovieItem__image__bottom__button'> 🤍 </button>
        </div>
      </div>
        <div className="searchMovieItem__imdb">
        <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"
            />
            
            <span>N/A</span>
        </div>
      <div className="searchMovieItem__title">
          {props.title}
      </div>
        <div className='searchMovieItem__year'>{props.year}</div>
      <div className="searchMovieItem__text">
      The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.
      </div>
    </div>
  );
}
