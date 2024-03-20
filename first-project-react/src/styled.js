import styled from 'styled-components'

import { FaCheck, FaTrashAlt } from 'react-icons/fa';

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        font-style: none;
    }

`

export const ToDoList = styled.div`
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
    padding: 0;
    margin-top: 60px;
    }
`

export const Input = styled.input`
    height: 40px;
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    margin-right: 20px;
    width: 340px;
    margin-right: 40px;
`

export const Button = styled.button`
    background-color: #8052EC;
    color: #ffffff;
    border: none;
    height: 40px;
    border-radius: 5px;
    line-height: 2px;
    font-size: 17px;
    font-weight: 900;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
   background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
   box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
   border-radius: 5px;
   height: 60px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 30px;
   padding: 0 10px;
   width: 500px;

   li {
    list-style: none;
   }
`

export const Trash = styled(FaTrashAlt)`
    cursor: pointer;
`

export const Check = styled(FaCheck)`
    cursor: pointer;
`

export const Title = styled.h3`
        display: flex;
        justify-content: center;
        align-items: center;
`