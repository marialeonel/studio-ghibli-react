import Card from 'react-bootstrap/Card';

function Cards({ movies }) {
  return (
    <div className="row">
      {movies.map((movie) => (
        <Card key={movie.id} style={{ width: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src={movie.image} style={{marginTop: '10px'}} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;