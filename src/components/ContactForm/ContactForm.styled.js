import styled from 'styled-components'

export const Wrapper = styled.div`
border: 1px solid #333;
border-radius: 10px;
padding: 50px;
background-color: #ebebeb;
`

export const Forma = styled.form`
display: flex;
flex-direction: column;
gap: 30px;
`

export const Label = styled.label`
font-size: 20px;
display: flex;
flex-direction: column;
`

export const Input = styled.input`
width: 300px;
height: 35px;
font-size: 20px;
color: #3373e2;
border: none;
`
export const Button = styled.button`
font-size: 20px;
background-color: #fff;
border: none;
border-radius: 10px;
height: 35px;

&:hover {
    background-color: #3373e2;
    color: #fff;
}
`