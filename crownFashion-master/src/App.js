import React, { Component } from 'react';
import './App.css';

import {Route,Switch,Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/shop.component';
import Header from './components/Header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';



import {connect} from 'react-redux';


import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './Redux/user/user.selector';


class App extends Component{
  
  unsubscribeAuth = null;

  componentDidMount(){
    
    
     
  //  this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{ //this can be null or the obj.

  //   if(userAuth){
        
  //     const userRef = await createUserProfileDocument(userAuth);//geeting userRef obj.

  //      userRef.onSnapshot(snapshot=>{
  //       setCurrentUser({currentUser:{
  //         id:snapshot.id,
  //         ...snapshot.data()
  //       }},()=>{
  //         console.log(this.state);
  //       });
  //     });
      
  //   }
      
  //     setCurrentUser(userAuth);
      
  // });
  
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    
    return (<div>
    <Header />
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
     <Route exact path='/checkout' component={Checkout} />
     <Route exact path='/signin' 
      render ={()=>this.props.currentUser?
      (<Redirect to='/'/>)
      :
      (<SignInAndSignUp/>)}
     />
    </Switch>
    <Footer />
      
    </div>)
  }
}



const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  
});
 
export default connect(mapStateToProps,null)(App);
