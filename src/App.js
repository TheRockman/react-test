import React, { Component } from "react";
import FilmList from "./components/filmList";
import Navbar from "./components/navbar";
import $ from "jquery";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      films: []
    }
  }

  getData(){
    $.ajax({
      url: "https://api.douban.com/v2/movie/top250?start=0&count=25",
      dataType: "JSONP",
      cache: false,
      success: function(data) {
        this.setState({
          films: data
        })
      }.bind(this),
      error: function (xhr, status, error) {
        console.log("request failed!", status, error);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <FilmList films={this.state.films} />
      </div>
    );
  }
}

export default App;
