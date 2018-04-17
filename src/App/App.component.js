import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './App.actions'; //Import your actions
import './App.style.css';

// Components
import SearchField from './components/SearchField';
import GenderSelect from './components/GenderSelect';
import NatSelect from './components/NatSelect';
import Pill from './components/Pill';
import Article from './components/Article';


class App extends Component {
  constructor(props){
    super(props);

    this.filterName = this.filterName.bind(this);
    this.filterNat = this.filterNat.bind(this);
    this.filterGender = this.filterGender.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.handleGenderRef = this.handleGenderRef.bind(this);
    this.handleNatRef = this.handleNatRef.bind(this);
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

    
    return (
      <div className="App">
        <header className="container default-padding">

          {/* Title & Searchbox  */}
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <h4>Application</h4>
              <SearchField onClickFilterByName={this.filterName} />
            </div>
          </div>

          {/* Filters  */}
          <div className="row">
            <GenderSelect onChangeFilterGender={this.filterGender} handleRef={this.handleGenderRef} />
            <NatSelect onChangeFilterNat={this.filterNat} handleRef={this.handleNatRef} />
          </div>

          {/* Facetted filters  */}
          <div className="row">
            <div className="col-8 offset-2 text-center default-padding">

              {/* Pills  */}
              {this.props.pills.nat && <Pill field={this.props.pills.nat} onClickReset={() => this.resetFields('nat')} /> }
              {this.props.pills.gender && <Pill field={this.props.pills.gender} onClickReset={() => this.resetFields('gender')} />}
              {/* Pills  */}

            </div>
          </div>
        </header>

        {/* Main / Searchresults  */}
        <main className="main default-padding">
          <div className="container">

            {/* Map over articles  */}
            {this.props.data.map((item, index) => {
              return (
                <Article key={index} firstName={item.name.first} lastName={item.name.last} nat={item.nat} gender={item.gender} />
              );
            })}
            {/* Map over articles  */}

          </div>
        </main>
      </div>
    );
  }

  filterName(e){
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

  resetFields(type){
    switch(type){
      case 'nat':
        this.props.resetNat();
        this.natSelect.selectedIndex = 0;
        break;
      case 'gender':
        this.props.resetGender();
        this.genderSelect.selectedIndex = 0;
        break;
      default: this.props.resetState();
    }
  }

  handleNatRef(reference) {
    this.natSelect = reference;
  }

  handleGenderRef(reference) {
    this.genderSelect = reference;
  }

}


const mapStateToProps = state => ({
  loading: state.AppReducer.loading,
  data: state.AppReducer.data,
  pills: { nat: state.AppReducer.nat, gender: state.AppReducer.gender }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
