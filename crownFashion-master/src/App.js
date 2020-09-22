import React, { useEffect } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/shop.component';
import Header from './components/Header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
import { GlobalStyles } from './global.styles';





import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './Redux/user/user.selector';
import {checkUserSession} from './Redux/user/user-action';

const App = ({checkUserSession,currentUser})=>{
  
  useEffect(()=>{
    
    checkUserSession();
     
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
  },[checkUserSession])
  
  return (<div>
    <Header />
    <GlobalStyles />
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
     <Route exact path='/checkout' component={Checkout} />
     <Route exact path='/signin' 
      render ={()=>currentUser?
      (<Redirect to='/'/>)
      :
      (<SignInAndSignUp/>)}
     />
    </Switch>
    <Footer />
      
    </div>)
  
}



const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  
});

const mapDispatchToProps = dispatch =>({
  checkUserSession:()=>(dispatch(checkUserSession()))
})
 
export default connect(mapStateToProps,mapDispatchToProps)(App);
