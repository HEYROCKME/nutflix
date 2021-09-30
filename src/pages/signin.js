import React, { useState } from "react";
import { HeaderContainer } from '../containers/HeaderContainer'
import { Form } from '../components'
import { FooterContainer } from "../containers/footerContainer";

export default function SignIn() {
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')

    const isInvalid = password === '' | emailAddress === ''

    const handleSignIn = (event) => {
        event.preventDefault();


    }
    return (

        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                 <Form.Base onSubmit={handleSignIn} method="POST">
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


                    <Form.Submit disabled={isInvalid} type="submit">
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