import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './App.actions'; //Import your actions
import './App.style.css';

class App extends Component {
  constructor(props){
    super(props);

    this.filterName = this.filterName.bind(this);
    this.filterNat = this.filterNat.bind(this);
    this.filterGender = this.filterGender.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {

    if (this.props.loading) {
      return (
        <div className="container text-center default-padding">Loading...</div>
      );
    }

    const natList = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NZ', 'TR', 'US'];

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
                      onKeyUp={this.filterName}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Filters  */}
          <div className="row">
            <div className="col-4 offset-2 dropdown">
              <select className="form-control form-control-sm" onChange={this.filterGender}>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
            <div className="col-4 dropdown">
              <select className="form-control form-control-sm" onChange={this.filterNat}>
                {natList.map(( nat, index )=>{
                  return (<option key={index}>{nat}</option>)
                })}
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
                  <h4>{item.name.first} {item.name.last}</h4>
                  <p>{item.gender}, {item.nat}</p>
                </div>
              );
            })}
            {/* Map over articles  */}
          </div>
        </main>
      </div>
    );
  }

  filterName(e){
    console.log(e.target.value);
      const searchTerm = e.target.value || '';
      if(searchTerm.length > 2){
        this.props.filterBySearchTerm(searchTerm);
      } else {
        this.resetFields();
      }
  }

  filterNat(e) {
    const nat = e.target.value || '';
    this.props.filterByNat(nat);
  }

  filterGender(e) {
    const gender = e.target.value || '';
    this.props.filterByGender(gender);
  }

  resetFields(){
    this.props.resetState();
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
