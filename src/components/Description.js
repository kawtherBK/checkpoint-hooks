import React,{ useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function Description({ movies }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(movies.find((o) => o.id === id));
  console.log(movie)
  return (
    <div>
      <h1 className="titre" style={{ marginTop: 20 }}>
        {movie.title}
          
      </h1>
      <p className="description">{movie.description}</p>
      <img className="pgimg"  src={movie.posterUrl}></img>
      <br/>
    <Button variant="primary" size="sm" className="back" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            Go Back 
          </Button>
    </div>
  );
}

export default Description;