import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as filter from './reducers/filter';
import { getData, filterByGender, filterByNationality, filterByName } from './actions'; //Import your actions
import './App.style.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.filter.name
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  onEnter = (event) => {
    if (event.key === 'Enter') {
      this.props.filterByName(event.target.value.trim())
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value.trim()});
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
                      value={this.state.name}
                      type="text"
                      onChange={this.onNameChange}
                      onKeyPress={this.onEnter}
                      placeholder="Search"
                      className="searchfield form-control text-center"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <button 
                    onClick={() => this.props.filterByName(this.state.name)}
                    className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>

          {/* Filters  */}
          <div className="row">
            <div className="col-4 offset-2 dropdown">
              <select 
                value={this.props.filter.gender}
                className="form-control form-control-sm"
                onChange={(event) => this.props.filterByGender(event.target.value)}
                >
                <option value="">none</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="col-4 dropdown">
              <select 
                value={this.props.filter.nationality}
                className="form-control form-control-sm"
                onChange={(event) => this.props.filterByNationality(event.target.value)}>
                <option value="">none</option>
                <option value="DE">DE</option>
                <option value="NL">NL</option>
                <option value="GB">GB</option>
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
            {this.props.items.length 
              ? this.props.items.map((item, index) => {
                  return (
                    <div className="article" key={index}>
                      <h4>{item.name.first} {item.name.last}</h4>
                      <p>{item.gender} {item.nat}</p>
                    </div>
                  );
                }) 
              : <div>Empty list</div>}
            {/* Map over articles  */}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  filter: state.filter,
  items: filter.hasFiltering(state) ? filter.getItems(state) : state.items
});

const mapDispatchToProps = {
  getData,
  filterByNationality,
  filterByName,
  filterByGender
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
