import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';



import {SignUpContainer,SignUpTitle} from './sign-up.styles';

//Actions



class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    
    

    handleSubmit = (event)=>{
        
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("password and confirm password donot match");
            return;
        }

       
    }
    
    handleChange = (event)=>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    }


    render(){

        const {displayName,email,password,confirmPassword} = this.state;

        return(
            <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up using email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={this.handleChange}
                  label='Display name'
                  required
                 />

                  <FormInput 
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email'
                  required
                 />

                  <FormInput 
                  type='password'
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                  label='Password'
                  required
                 />

                  <FormInput 
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                  label='Confirm Password'
                  required
                 />
                 <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

            </SignUpContainer>
        )
    }
}


export default SignUp;