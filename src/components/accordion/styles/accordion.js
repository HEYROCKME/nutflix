import styled from "styled-components";



//Container, Inner , Title, Header, Body
        export const Container = styled.section`
                display: flex;
                border-bottom: 8px solid #222;
        `;
        export const Inner = styled.div`
                display: flex; 
                flex-direction: column;
                padding: 70px 45px;
                max-width: 815px;
                margin: auto;

        `;


        export const Frame = styled.div`
                margin-bottom: 40px;                
        `;

        export const Item = styled.div`
                color: #fff;
                margin-bottom: 10px;
                
                &:first-of-type {
                        margin-top: 3em;
                }
        
        `;
        export const Title = styled.h1`
                font-size: 50px;
                line-height: 1.1;
                margin-top: 0;
                margin-bottom: 8px;
                color: #f0f0f0;
                text-align: center;
                
                @media (max-width: 600px) {
                font-size: 35px;
                }`;
        export const Header = styled.div`
                display: flex;
                justify-content: space-between;
                cursor: pointer;
                margin-botom: 1px;
                font-size: 26px;
                font-weight: normal;
                background: #303030;
                padding: 0.8em 1.2em 0.8em 1.2em;
                user-select: none;
                align-items: center;
                border-bottom: solid 5px black;

                @media (max-width: 600px) {
                        font-size: 18px;
                    }


        `;
        export const Body = styled.body`
                max-width: 1200px;
                transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
                font-weight: normal;
                line-height: normal;
                background: #303030;
                padding: 0.8em 1.2em 0.8em 1.2em;
                margin-bottom: 1em;
                user-select: none;
                align-items: center;
                color: #f0f0f0;
                @media (max-width: 600px) {
                font-size: 16px;
                line-height: 22px;
                }
        `;



