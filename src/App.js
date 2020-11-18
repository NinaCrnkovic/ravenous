import React from 'react';
import './App.css';
import Yelp from './Util/Yelp'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {businesses: []}

  }
  searchYelp=(term, location, sortBy)=>{
    Yelp.searchYelp(term, location, sortBy)
    .then(businesses=>{
      this.setState({businesses: businesses})
    })

  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
