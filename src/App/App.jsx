import React, { Component } from "react";
import action from "./App.action";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

//jsx module
import Alert from "./components/Alert";
import Header from "./components/Header";
import ContactAdd from "./components/ContactAdd";
import ContactShow from "./components/ContactShow";
import Filter from "./components/Filter";

//style
import "./App.css";

class App extends Component {

  delayToCloseAlert = null;

  componentDidMount() {
    if(localStorage.getItem('contacts')){
      const contacts = [...JSON.parse(localStorage.getItem('contacts'))];
      this.props.action_LOCAL_STORAGE(contacts)
    }
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.props.state.contacts))
  }

  render() {
    return (
      <div className="phonebook">
        <CSSTransition
          in={this.props.state.isAlert}
          classNames="alert"
          timeout={250}
          unmountOnExit
        >
          <Alert text={this.props.state.alertMessage} />
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames="header"
          timeout={500}
          unmountOnExit
        >
          <Header />
        </CSSTransition>
        <ContactAdd />
        <ContactShow>
          <CSSTransition
            in={this.props.state.contacts.length > 1}
            classNames="filter"
            timeout={250}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
        </ContactShow>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    action_LOCAL_STORAGE: (contacts) => {dispatch(action.localStorage(contacts))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
