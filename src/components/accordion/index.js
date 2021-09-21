import React, {useState, useContext, createContext } from "react";
import { Container, Title, Header, Body, Inner, Item, Frame } from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}) {

    return <Container{...restProps}>
        <Inner>
            {children}
        </Inner>
   
     </Container>

}


Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    
    const [toggleShow, setToggleShow] = useState(false);
    
    return <Item {...restProps}>{children}</Item>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}



