// displays movies list
import { render } from "@testing-library/react";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Filter from "./Filter";
import Add from "./ModalInput";
import { useState } from "react";
import{ Link} from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";


function MovieList(props) {
  console.log(props.movies)
  const [search, setSearch] = useState("");
  const [raiting, setRaiting] = useState(1);

  const getSearch = (valueSearch) => {
    setSearch(valueSearch);
  };
  const getRaiting = (raiting) => {
    setRaiting(raiting);
  };

  return (
    <>
      <Filter
        raiting={(raiting) => getRaiting(raiting)}
        search={(search) => getSearch(search)}
      />

      <CardDeck>
        {props.movies
          .filter(
            (el) =>
              el.title.toLowerCase().includes(search.toLowerCase()) &&
              el.rate >= raiting
          )
          .map((el) => (
            <Card Card key={el.id}>
              <Card.Img variant="top" className="img" src={el.posterUrl} />

              <Card.Body className="card-body">
                <Card.Title>{el.title}</Card.Title>
                <Link to={`/description/${el.id}`}> Description</Link>
              </Card.Body>
            </Card>
          ))}
      </CardDeck>
     
    </>
  );
}
export default MovieList;
