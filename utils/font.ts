import styled from 'styled-components';

export const getFont = (font: string = 'Regular') => `

    @font-face {
        src: url('./fonts/Poppins/Poppins-${font}.ttf');
        font-family: Poppins-${font};
    }

    font-family: Poppins-${font};



`;
