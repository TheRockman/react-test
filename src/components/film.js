import React, { Component } from "react";

class Film extends Component {
  render() {
    let film;
    let cast;
    if (this.props.data) {
      film = this.props.data;
      cast = this.props.data.casts.map(cast => {
        return (
          <div className="actor center">
            <img alt="" src={cast.avatars.small}/>
            <div className="tip">
              {/*{cast.name}*/}
              <small>John Doe</small>
            </div>
          </div>
        )
      });
      console.log(this.props.data);
    }

    return (
      <div className="card">
        <h2 className="center title">{film.original_title} ({film.year})</h2>
        <div className="row keyline">
        <div className="fab">
          <span>
            {film.rating.average}
          </span>
        </div>
          <div className="flex poster">
            <img alt="" src={film.images.large} />
          </div>
          <div className="flex description">
            <strong>Synopsis:</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="row">
          <div className="flex">
            <p>Starring:</p>
            <div className="actor-list">
              {cast}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Film;
