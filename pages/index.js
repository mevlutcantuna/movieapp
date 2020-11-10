import Layout from "../Components/Layout";
import HomePage from "../Components/HomePage/HomePage";
import unfetch from "isomorphic-unfetch";

function index({movies}) {
    return (
        <Layout>
            <div className='homePage'>
                <HomePage info={movies}/>
            </div>
        </Layout>
    )
} 

export async function getStaticProps() {
    const data = await unfetch('http://www.omdbapi.com/?apikey=2ffffb97&s=galaxy')
    const movies = await data.json()
    return { 
      props: {
          movies
      },
    }
}

export default index;