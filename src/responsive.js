import {css} from "@emotion/react";

export const mobile = (props) => {
    return css`
        @media screen and (max-width:380px) {
            ${props}
        }
    `
}

export const largeMobile = (props) => {
    return css`
        @media screen and (max-width:425px) {
            ${props}
        }
    `
}