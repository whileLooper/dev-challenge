import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { titles: [], type: '', list: [], detail: undefined };
  list = this.titles;

  componentDidMount() {
    fetch('/movies')
      .then(res => res.json())
      .then(titles => this.setState({ titles: titles ,  list: titles }));
  }

  // base on user input, filerting list
  filerting(event) {
    console.log(event.target.value);
    // real time updae user input
    this.setState({typed: event.target.value});
    let value = event.target.value;

    if (!value.length) {
      this.setState({ list: this.state.titles });
    } else {
      let temp = this.state.titles.filter((val, i) => {
        // ignore lower or upper case
        return val['TitleName'].toLowerCase().includes(value.toLowerCase());
      });
      this.setState({ list: temp });
    }
  }

  // click to get movie detail by post id to backend
  getDetail(id) {
    fetch('/movies/' + id)
      .then(res => res.json())
      .then(detail => this.setState({ detail }));
  }

  render() {
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="row">
          {/* search and name list section */}
          <div className="col-lg-4 col-sm-12">
            <div className="col-12">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1" role="img"  aria-label="searchIcon">
                    🔍
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter a movie name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this.filerting.bind(this)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="list-group-flush">
                {this.state.list.map(title => (
                  <button 
                    type="button" 
                    className="list-group-item list-group-item-action"
                    key={title['_id']}
                    onClick={() => this.getDetail(title['_id'])}>
                    {title['TitleName']}
                  </button>
                ))}
              </div>
            </div>       
          </div>

          {/* Movie detail info section */}
          <div className="col-lg-8 col-sm-12">
            <h2 className="text-center">{this.state.detail ? this.state.detail['TitleName'] : ''}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
