import React, {useState, useContext} from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/HeaderContainer";
import { FooterContainer } from "../containers/footerContainer";
import * as ROUTES from '../constants/routes';
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
// import { getAuth, Auth } from 'firebase/auth'



export default function SignUp({children, ...restProps}) {


        const history = useHistory();
        const {firebase} = useContext(FirebaseContext)

        const [firstName, setFirstName] = useState('')
        const [emailAddress, setEmailAddress] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState('')


        const isInvalid = emailAddress === "" || password === "" || firstName === ""
        
        const handleSignUp = (event) => {
            event.preventDefault()

            firebase
                .auth()
                .creatUserWithEmailAndPassword()
                .then((result) => 
                    result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    })
                    .then(() => {
                        setEmailAddress('')
                        setPassword('')
                        setError('')
                        history.push(ROUTES.BROWSE)
                    })

                ).catch((error) => setError(error.message))

        }


    return (

        <>

        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method="POST" >

                <Form.Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={({target})=> setFirstName(target.value)}
                />    
                <Form.Input
                    type="email" 
                    placeholder="Email"
                    value={emailAddress}
                    onChange={({target})=> setEmailAddress(target.value) }
                    
                />

                <Form.Input 
                    type="password"
                    value={password}
                    autocomplete="off"
                    placeholder="Password"
                    onChange={({target}) => setPassword(target.value)}

                />

                <Form.Submit disable={isInvalid}>Sign Up</Form.Submit>
                <Form.Text>
                    Already nuts? <Form.Link to="/signin">Sign in here!</Form.Link>
                </Form.Text>
                <Form.TextSmall>This page is protected by Google reCAPTCHA</Form.TextSmall>
             </Form.Base>
            
            </Form>
        </HeaderContainer>
        <FooterContainer />



        </>
    )

}