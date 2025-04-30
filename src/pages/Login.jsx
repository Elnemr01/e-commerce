import React, { useEffect, useState } from 'react'
import './pagesStyles/loginPage.css'
import CommonTittle from '../components/commonTittle/CommonTittle'

const Login = () => {
    const [signUp,setSignUp]=useState(false);


    // useEffect(()=> {

    // },)


    return (
        <div className='loginPage'>
            <div className="content">
                {
                    signUp ? <CommonTittle word1={'sign'} word2={'up'} showP={false}/> :
                    <CommonTittle word1={''} word2={'login'} showP={false}/>
                }
                <form action="">
                    {signUp && <input type="text" name="username" id="username" placeholder='name' required/>}
                    <input type="email" name="email" id="email" placeholder='email' required/>
                    <input type="password" name="password" id="password" placeholder='password' required/>
                    <div className="buttons">
                        <p className="forget">forget your password?</p>
                        {signUp ? <p className="forget" onClick={()=> setSignUp(false)}>login here</p> :
                        <p className="sign" onClick={()=> setSignUp(true)}>Create an account</p>}
                    </div>
                    {
                    signUp ? <button type='submit'>sign up</button> :
                    <button type='submit'>sign in</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Login
