import React, { Component } from "react";
import SignUp from "./components/SignUp";
import NetworkArray from "./components/NetworkArray";
import NetworkArray1 from "./components/NetworkArray1";

import "./App.css";
import "tachyons";
import Searchbox from "./components/Searchbox";
import SignIn from "./components/SignIn";
import Navigation from "./components/Navigation";
import MyNetworkArray from "./components/MyNetworkArray";
import SuggestArray from "./components/SuggestArray";
import SearchSuggestions from "./components/SearchSuggestions";
import ModalForm from './Modals/Modal';
import DataTable from './Tables/DataTable';
import { Container, Row, Col } from 'reactstrap'


const initialState = {
  searchfield: "",


};

class App extends Component {
  constructor() {
    super();
    this.state = {
      network: [],
      networkfilter: [],
      items:[],
      searchfield: "",
      searchsuggest: "",
      route: "signin",
      routed: false,
      isSignedIn: false,
      user: {
        id: "",
        firstname: "",
        lastname: "",
        phone: "",
        city: "",
        email: "",
        company: "",
        ischecked: false
      }
    };
   // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(data => {
        //debugger;
        this.setState({ network: data });
      });

    fetch("http://localhost:3000/networkusers")
      .then(response => response.json())
      .then(data => {
        //debugger;
        this.setState({ networkusers: data });
      });

     fetch('http://localhost:3000/crud')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))


  };

addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }
 
  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        city: data.city,
        email: data.email,
        company: data.company,
        ischecked: data.ischecked
      }
    });
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  onSuggestChange = event => {
    this.setState({ searchsuggest: event.target.value });
  };
 handleClick=(id,event) => {   
    //Filters the suggest array based on card id matching suggest array id. Returns nothing
    //if there are no suggestions for id.  Changes route to suggestions which will display network name.
    //Setting routed:true makes sure all buttons are displayed
    const updatedSuggest = this.state.items.map(sugg => {
      if (sugg.id === id) {

        this.setState({
          suggest: this.state.items.filter(suggest => this.state.items.id === id),
          route: "suggestions"
        });
        this.setState({ routed: true });
        this.setState({
          networkfilter: this.state.network.filter(netw => netw.id === id),
          route: "suggestions"
        });
        this.setState({ routed: true });
      }
      return;
    });
  
}
 // handleCheck = e => {
 // e.stopPropagation()
  // talk to my API, set the record as "done" or not
//}

/*
  handleChange(id, route) {
    const updatedNetwork = this.state.network.map(netw => {
      if (netw.id === id) {
        netw.ischecked = !netw.ischecked;

        this.setState({ route: "home" });
        // routed to true makes sure the button changes back to All Network when checkbox is clicked
        this.setState({ routed: true });
      }
      return netw;
    });
    return {
      network: updatedNetwork
    };
  }
*/
 /*getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.network !== prevState.networkusers) {
    return { networkusers: nextProps.networkusers}
  } else return null;
}
*/

  onRouteChange = route => {
    if (route === "home") {
      this.fetchData();
      this.setState({ routed: true });
      this.setState({ isSignedIn: true });
    } else if (route === "mynetwork") {
      this.setState({ routed: false });
      this.setState(initialState);
      this.setState({ isSignedIn: true });
    } else if (route === "suggestions") {
      this.setState({ routed: true });
      this.setState(initialState);
      this.setState({ isSignedIn: true });
    } else if (route === "allsuggestions") {
      this.setState({ routed: false });
      this.setState(initialState);
      this.setState({ isSignedIn: true });
    } else if (route === "signin") {
      this.setState(initialState);
      this.setState({ isSignedIn: false });
    } else if (route === "register") {
      this.setState(initialState);
      this.setState({ isSignedIn: false });
    }
    this.setState({ route: route });
    this.setState(initialState);
  };

  render() {
   
    const filteredNetwork = this.state.network.filter(netw => {
      return netw.lastname
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    const filteredSuggestions = this.state.items.filter(sugg => {
      return sugg.location
        .toLowerCase()
        .includes(this.state.searchsuggest.toLowerCase());
    });

    return (
       <Container className="App">
      <div className="tc">
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
          routed={this.state.routed}
          fetchData={this.fetchData}
        />

        {this.state.route === "home" ? (
          <div>

            <h2 className="ml6">All Network</h2>
            <Searchbox
              searchChange={this.onSearchChange}
              onRouteChange={this.onRouteChange}
              routed={this.state.routed}
              fetchData={this.fetchData}
            />
            <NetworkArray
               network={filteredNetwork}
              networkusers={this.state.networkusers}
              loginuser={this.state.user}
              handleClick={this.handleClick}
              selectedCard={this.state.items}
              onRouteChange={this.onRouteChange}
              fetchData={this.fetchData}

            />
          </div>
        ) : this.state.route === "mynetwork" ? (
          <div>
            <h2 className="ml6">My Network</h2>
            <Searchbox
              searchChange={this.onSearchChange}
              onRouteChange={this.onRouteChange}
              routed={this.state.routed}
              fetchData={this.fetchData}
            />

            <MyNetworkArray
             network={filteredNetwork}
              networkusers={this.state.networkusers}
              loginuser={this.state.user}
              handleClick={this.handleClick}
              selectedCard={this.state.items}
              onRouteChange={this.onRouteChange}
              fetchData={this.fetchData}
            />
          </div>
        ) : this.state.route === "register" ? (
          <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : this.state.route === "signin" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : this.state.route === "suggestions" ? (
          <div>
            <h2 className="ml6">Suggestions</h2>
            <SearchSuggestions
              searchSuggestions={this.onSuggestChange}
              onRouteChange={this.onRouteChange}
              routed={this.state.routed}
            />
            <NetworkArray1
              networkfilter={this.state.networkfilter}
              handleClick={this.handleClick}
              onRouteChange={this.onRouteChange}
              fetchData={this.fetchData}
            />
            <SuggestArray
              onRouteChange={this.onRouteChange}
              items={filteredSuggestions}  
            />
          </div>
        ) : this.state.route === "allsuggestions" ? (
          <div>
            <h3 className="ml4">All Suggestions</h3>
            <SearchSuggestions
              searchSuggestions={this.onSuggestChange}
              onRouteChange={this.onRouteChange}
              routed={this.state.routed}
            />
            <Row>
          <Col>
            <DataTable items={filteredSuggestions} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
         <Row>
          <Col>
            <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
          </div>
        ) : (
          <SignIn />
        )}
      </div>
      </Container>
    );
  }
}
export default App;
