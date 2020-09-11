 import React from 'react';
 import DatePicker from 'react-datepicker';
 import "react-datepicker/dist/react-datepicker.css"
import styled, {keyframes} from 'styled-components'


const StyledHeader = styled.div`
background-image:url('https://interactive.wttw.com/sites/default/files/styles/full/public/images/2020/01/27/Orion-Betelgeuse.jpg?itok=VRPu8d3y');
padding-top:3%;

h1{
    color:${pr => pr.theme.tertiaryColor};
}
p{
   color:${pr => pr.theme.tertiaryColor};
   font-weight:bold;
}
div{
    padding-bottom:2%;
}

`
export default function Header({ date, setDate }) {

    const onChange = (e) => {
      setDate(e.target.value)
     }
  
   
   return (
       <StyledHeader className = "header"> 
       <h1>NASA Photo of the Day!</h1>
      <div className="date-picker">
         <p>Search for previous pictures:</p>
         <DatePicker
            onChange={onChange} 
            value={date}
         />
      </div>
      </StyledHeader>
   )
}


