import './index.css'
import MovieCard from './MovieCard'

const Movies = () => {
  const movies = [
    {
      imgSrc: 'https://i.pinimg.com/736x/c5/bf/2e/c5bf2e92733fdc1f7af044b5a4b7032c.jpg'
    },
    {
      imgSrc: 'https://i.pinimg.com/236x/e9/ca/e2/e9cae25b44580be1de3f904821fa851e.jpg'
    },
    {
      imgSrc: 'https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20&crop=false'
    },
    {
      imgSrc: 'https://i.pinimg.com/736x/c5/bf/2e/c5bf2e92733fdc1f7af044b5a4b7032c.jpg'
    },
    {
      imgSrc: 'https://i.pinimg.com/236x/e9/ca/e2/e9cae25b44580be1de3f904821fa851e.jpg'
    },
    {
      imgSrc: 'https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20&crop=false'
    }
  ]

  return (
    <div className='movies'>
      <h2 className='title'>Trending Now</h2>
      <div className='slider'>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            imgSrc={movie.imgSrc}
            trendingNo={index+1}
          />
        ))}
      </div>
    </div>
  )
}

export default Movies