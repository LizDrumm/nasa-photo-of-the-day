import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components'


const kf = keyframes `
100% {
  opacity:1;
  transform: scale(1);
}
`

const StyledCard = styled.div `
  background-color: ${pr => pr.theme.tertiaryColor};
  color: ${pr => pr.theme.primaryColor};
  width: 100%;
  padding-bottom: ${pr => pr.theme.bottomPadding};
  
  
  @media ${pr => pr.theme.mobileBreakpoint} {
    width: initial;
  }


img{
  transition:all 1s ease-in-out;
  width: 50%;
  opacity: 0;
  transform: scale(2);
  animation: ${kf} 2s forwards;
}

h2{
    color:${pr => pr.theme.secondaryColor};
    padding-top: ${pr => pr.theme.topPadding};
}

p{
    color: ${pr => pr.theme.secondaryColor};
    width: 60%;
    margin: 0 auto;
    padding-top: ${pr => pr.theme.topPadding};
  
}
div{
    padding-bottom: 2%;
    color: ${pr => pr.theme.secondaryColor};
}
`

export default function Card(props) {
    const {title, date, hdurl, alt, explanation, copyright } = props.data

    

    return (
         <StyledCard>
            
            <h2>{title}</h2>
            <div>{date}</div>
            <img className="img" src = {hdurl} alt = {alt}></img>
            <p className = "explain">{explanation}</p>
            <p>{copyright}©</p>
        </StyledCard>

    );
}

