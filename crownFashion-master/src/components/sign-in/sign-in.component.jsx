import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import {SignInContainer,SignInTitle,ButtonsBarContainer} from './sign-in.styles';

//Actions
import {googleSignInStart,emailSignInStart} from '../../Redux/user/user-action';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password} = this.state;
        const {emailSignInStart} = this.props;

        emailSignInStart(email,password);
    }

    handleChange=(e)=>{
       const  {name,value}=e.target;
       this.setState({[name]:value},()=>{
           console.log(this.state)
       });
    }
    /*attribute without anyspecified value like isGoogleSignIn will return true*/
       
    render(){
        const {googleSignInStart} = this.props
        return(
            <SignInContainer className='sign-in'>
                <SignInTitle className='title'>I already have an account</SignInTitle>
                <span>sign in using your email address and password </span>

                <form >
                 <FormInput handleChange={this.handleChange} name='email' type='email' value={this.state.email}  label='email' required />
                 <FormInput handleChange={this.handleChange} name='password' type='password' value={this.state.password}  label='password' required/>
                 <ButtonsBarContainer className='sign-in-container'>
                  <CustomButton onClick={this.handleSubmit} type='submit' value='submit form'>
                   Sign In
                  </CustomButton>
                  <CustomButton
                   type='button' 
                   onClick={googleSignInStart} 
                   isGoogleSignIn>
                    Sign In using Google
                   </CustomButton>
                 </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);

