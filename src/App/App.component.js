import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './App.actions'; //Import your actions
import './App.style.css';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="container text-center default-padding">Loading...</div>
      );
    }
    return (
      <div className="App">
        <header className="container default-padding">
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
            {this.props.data.map((item, index) => {
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

const mapStateToProps = state => ({
  loading: state.AppReducer.loading,
  data: state.AppReducer.data
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
