import React from 'react';
import HomePage from './Pages/HomePage/Homepage.page.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.page.jsx';
import Header from './Components/header/header.component.jsx';
import SignInAndSignUP from './Pages/sign-in and sign-up/sign-in-and-sign-up.component.jsx';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils';
import {
  connect
} from 'react-redux';

import './App.css';
import {
  setCurrentUser
} from './redux/user/user.actions.js';
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {
      setCurrentUser
    } = this.props;
    //if state change or geeting different user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        //  console.log("sanapShot", snapShot.data()); //snapShot.data()

        //console.log(userAuth);
        console.log("Component did mount");
      } else {
        // this.setState({
        //   setCurrentUsercurrentUser: userAuth
        // })
        setCurrentUser(userAuth);
      }

      //console.log(this.unsubscribeFromAuth);
      //console.log(this.state.currentUser);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log("Component will unmount");
  }
  // currentUser={this.state.currentUser}
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          {/*<Route path='/signin' component={SignInAndSignUP}/>*/}
          <Route exact
           path='/signin'
           render={()=>
             this.props.currentUser?
             (<Redirect to='/' />):
              (<SignInAndSignUP/>)
            }/>
        </Switch>
      </div>
    );

  }

}
//destructure user
const mapStateToProps = ({
  user
}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);