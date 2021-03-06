import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from '../containers/HeaderContainer'
import { Form } from '../components'
import { FooterContainer } from "../containers/footerContainer";
import * as ROUTES from '../constants/routes'


export default function SignIn() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || emailAddress === ''

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                //push to the browse page
                history.push(ROUTES.BROWSE)
                setEmailAddress('')
                setPassword('')


            }).catch((error) => {
              
                setError(error.message)
            })


    }
    return (

        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                 <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                        placeholder="Email"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                        />
               
                    <Form.Input 
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange = {({ target }) => setPassword(target.value)} 
                    />


                    <Form.Submit type="submit">
                        Sign In
                    </Form.Submit>
                    
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>    
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
           

        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}