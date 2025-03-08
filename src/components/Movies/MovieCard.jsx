function MovieCard(props) {
  return (
    <div 
      style={{ 
        position: 'relative', 
        cursor: 'pointer' 
      }}
    >
      <img src={props.imgSrc} height={300} />
      <h1
        style={{
          margin: 0,
          position: 'absolute',
          bottom: 0,
          fontSize: '8em',
          color: 'black',
          textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
        }}
      >
        {props.trendingNo}
      </h1>
    </div>
  )
}

export default MovieCard