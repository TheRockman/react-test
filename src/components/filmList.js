import React, { Component } from "react";
import Film from "../components/film";
import Spinner from "../components/spinner";

class FilmList extends Component {
  render() {
    let allFilms;
    if (this.props.films.subjects) {
      allFilms = this.props.films.subjects.map(
        film => {
          return (
            <div>
              <Film key={film.id} data={film} />
            </div>
          )
        });
      } else {
        return (
          <Spinner />
        )
      }

      return (
        <div>
          <div className="row">
          <div className="flex"></div>
          <div className="flex x3">
            {allFilms}
          </div>
          <div className="flex"></div>
          </div>
        </div>
      );
    }
  }

  export default FilmList;
