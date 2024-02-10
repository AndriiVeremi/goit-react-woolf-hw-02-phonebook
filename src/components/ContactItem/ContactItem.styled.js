import styled from 'styled-components'

export const Item = styled.li`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
`

export const Name = styled.p`
font-style: italic;
font-size: 20px;
`

export const Number = styled.p`
font-size: 20px;
font-weight: 500;
`

export const Button = styled.button`
display: flex;
height: 30px;
padding: 10px 30px;
align-items: center;
background-color: #fff;
border: none;
border-radius: 10px;

&:hover {
    background-color: #3373e2;
    color: #fff;
}

`