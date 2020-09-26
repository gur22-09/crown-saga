import React,{useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {SignInContainer,SignInTitle,ButtonsBarContainer} from './sign-in.styles';

//Actions
import {googleSignInStart,emailSignInStart} from '../../Redux/user/user-action';


const SignIn = ({emailSignInStart,googleSignInStart})=>{
    
    
    const [user,setUser] = useState({
        email:'',
        password:''
    });

    const {email,password} = user;

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        emailSignInStart(email,password);
    }

    const handleChange=(e)=>{
       const  {name,value}=e.target;
       setUser({...user,[name]:value});
    }
    /*attribute without anyspecified value like isGoogleSignIn will return true*/
       

        return(
            <SignInContainer className='sign-in'>
                <SignInTitle className='title'>I already have an account</SignInTitle>
                <span>sign in using your email address and password </span>

                <form >
                 <FormInput handleChange={handleChange} name='email' type='email' value={email}  label='email' required />
                 <FormInput handleChange={handleChange} name='password' type='password' value={password}  label='password' required/>
                 <ButtonsBarContainer className='sign-in-container'>
                  <CustomButton onClick={handleSubmit} type='submit' value='submit form'>
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

const mapDispatchToProps = dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);

