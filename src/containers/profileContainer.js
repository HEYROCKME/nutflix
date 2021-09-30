import userEvent from "@testing-library/user-event";
import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from '../constants/routes'

export function SelectProfileContainer({user, setProfile }) {
    return (
        <>
        
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo 
                    to={ROUTES.HOME}
                    src="/images/misc/logo.svg"
                    alt="Nutflix"
                    />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>
                    Who's Watching?
                </Profiles.Title>
                <Profiles.User 
                            onClick={()=> setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL
                            })}
                        >

                    <Profiles.Picture src={user.photoURL} alt="profilePic" />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles>
        
        </>
    )
}