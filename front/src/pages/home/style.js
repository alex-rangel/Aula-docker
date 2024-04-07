import styled from 'styled-components'
import ImgBackground from '../../assets/bg-image.svg'


export const Container = styled.div`
width: 100vw;
min-height: 100vh;
background: url(${ImgBackground}) no-repeat left top;
background-size: cover;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const ImgConversa = styled.img`
    margin: 30px 0px 20px 0px;
`
export const ContainerItems = styled.div`
background-color: #ffffff50;
width: max-content;
padding: 20px 30px 30px 30px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;

display: flex;
align-items: center;
flex-direction: column;
`

export const Title = styled.p`
font-size: 25px;
font-weight: bold;
color: #ffffff;
margin: 30px 0px;
`
export const Label = styled.p`
    color: #ffffff;
    font-size: 14px;
    margin: 3px 0px 0px 0px;
`
export const Input = styled.input`
    width: 340px;
    height: 45px;
    border-radius: 15px;
    background-color: #ffffff25;
    border: ${props => (props.$error ? '2px solid #cc1717' : 'none')};
    outline: none;
    margin: ${props => (props.$error ? '0px 0px 0px 0px' : '0px 0px 25px 0px')};
    color: #ffffff;
    font-size: 16px;
    padding-left: 10px;

`
export const ErroMessage = styled.p`
    font-size: 12px;
    color: #cc1717; 
`
export const Form = styled.form`

`
export const Button = styled.button`
    width: 340px;
    height: 45px;
    border-radius: 15px;
    border: none;
    background-color: #00000080;
    font-size: 14px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const CampoUser = styled.div`
     width: 340px;
    height: 45px;
    border-radius: 15px;
    background-color: #ffffff25;
    color: #ffffff;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-bottom: 8px;

    button{
        border: none;
        background: none;
    }
`