import {css} from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (min-width: 320px) and (max-width: 530px){
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 540px) and (max-width: 825px){
            ${props}
        }
    `;
};