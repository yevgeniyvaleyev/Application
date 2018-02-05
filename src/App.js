import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App default-padding">
        <header className="container">
          {/* Title & Searchbox  */}
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <h4>Application</h4>
              <div className="row">
                <div className="col-8 offset-2">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Search"
                      className="searchfield form-control text-center"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>

          {/* Filters  */}
          <div className="row">
            <div className="col-4 offset-2 dropdown">
              <select className="form-control form-control-sm">
                <option>Option 01</option>
                <option>Option 02</option>
              </select>
            </div>
            <div className="col-4 dropdown">
              <select className="form-control form-control-sm">
                <option>Option 01</option>
                <option>Option 02</option>
                <option>Option 03</option>
              </select>
            </div>
          </div>

          {/* Facetted filters  */}
          <div className="row">
            <div className="col-8 offset-2 text-center default-padding">
              {/* One Pill  */}
              <span className="badge badge-pill badge-secondary small-padding-wide">
                <span className="text">Option 01</span>
                <span className="icon-margin-left cursor-pointer">&times;</span>
              </span>
              {/* One Pill  */}
            </div>
          </div>
        </header>

        {/* Main / Searchresults  */}
        <main className="main default-padding">
          <div className="container">
            {/* Map over articles  */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return (
                <div className="article" key={index}>
                  <h4>Article Title (#{item})</h4>
                  <p>Article Description</p>
                </div>
              );
            })}
            {/* Map over articles  */}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
