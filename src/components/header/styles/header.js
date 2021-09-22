import styled from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom'

export const Background = styled.section`
    display: flex; 
    flex-direction: column;
    background: url(${({src}) => (src ? `../images/misc/src.jpg` : 
    '../images/misc/home-bg.jpg'
    )}) top left / cover no-repeat;

    @media (max-width: 1100px) { 
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `Background: none;` }

    }

`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    
    
    @media (min-width: 1149px) {
        height: 45px;
        width: 167px;

    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 2em;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }

`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active })=> (active === 'true' ? '700' : 'normal')}
    cursor: pointer;

    &:hover {
        font-weiht: bold;
    }
    &:last-of-type {
        margin-right: 0;
    }

`;

export const ButtonLink = styled(ReachRouterLink)`

display: block;
    background-color: #b74513;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #f47740;
    }

`;



