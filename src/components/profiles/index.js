import React from "react";
import { Title, Container, Item, Picture, Name, List } from './styles/profiles'

export default function Profiles({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfileTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.User = function PofileUser({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}

// Profiles.Item = function PofileItem({children, ...restProps}) {
//     return <Item {...restProps}>{children}</Item>
// }

Profiles.Name = function PofileName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}

Profiles.List = function PofileList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}



Profiles.Picture = function ProfilePicture({src, ...restProps}) {
    return <Picture {...restProps} 
            src={src ? `/images/users/${src}.png` 
            : '/images/misc/loading.gif '} />
}

