import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkHome = styled(Link)`
    display: block;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .1rem 0;
    color: #fff;
    text-decoration: none;

`
export const Container = styled.div`
    width:100%;
    max-width: 991px;
    margin: 0 auto
`
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333; 
`
export const list = styled.ul`
    list-style: none;
    padding: 0;
    font-family:sans-serif;    
`
export const listItem = styled.li`
    margin: .5rem 0;  
    background: #000;
    color: #fff;
    pading: .5rem;
`

