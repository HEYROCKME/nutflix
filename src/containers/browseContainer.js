import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from '../constants/routes'
import { FirebaseContext} from '../context/firebase'
import {SelectProfileContainer} from './profileContainer'
import { FooterContainer } from "./footerContainer";
import { Profiler } from "react/cjs/react.production.min";


export function BrowseContainer() {


    const user = {
        displayName: "Pea",
        photoURL: "1"
    };

    const [profile, setProfile] = useState({})

    return profile.displayName ? (
        
        <>
            <FooterContainer/>
        </>) 
        : (<SelectProfileContainer user={user} setProfile={setProfile} />
    );
    
}