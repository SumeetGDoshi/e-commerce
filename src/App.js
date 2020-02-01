import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth , createUserProfile} from './firebase/firebase.utils';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    //the userAuth parameter is the user state of the auth on our firebase project i.e user state of firebase.auth()
   //this.unsubscribeFromAuth recieves a function if user logouts
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfile(userAuth);

          userRef.onSnapshot(snapShot=>{
          // this.setState({
          //   currentUser:{
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // },
          //   ()=>{
          //     console.log(this.state);
          //   }
          // )
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          })
      }
      else{
        // this.setState({currentUser: userAuth});
        this.props.setCurrentUser(userAuth)
        console.log(userAuth,'user state')
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  };

  render(){
    return (
      <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    setCurrentUser: user=>dispatch(setCurrentUser(user))
  }

}
export default connect(null,mapDispatchToProps)(App);
