import React from 'react';
import { JumbotronContainer } from '../containers/jumbotronContainer';
import { FooterContainer } from '../containers/footerContainer';
import { FaqsContainer } from '../containers/faqsContainer';
import { HeaderContainer } from '../containers/HeaderContainer';


export default function Home() {

    return (

       <>
    <HeaderContainer>
        <p>HELLOFLIX</p>
    </HeaderContainer>

        <JumbotronContainer/>
        <FaqsContainer />
        <FooterContainer />

       </>

     
        

    )

}
