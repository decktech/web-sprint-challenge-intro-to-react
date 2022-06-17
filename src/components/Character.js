// Write your Character component here
import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledCharacter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: black;
    opacity: 2;
    height: 75%;
    margin: 2vh;

    p {
        justify-content: flex-start;
        font-size: 3rem;
        margin: 1vh;
    }
`


export default function Character(props) {
    return (
        <StyledCharacter className='character-wrapper'>
            <p>{props.name}</p>
            <p>{props.bDay}</p>
        </StyledCharacter>
    )
}