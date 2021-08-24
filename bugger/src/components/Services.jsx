import React from 'react'
import styled from 'styled-components'
import old from '../image/old.png';


const Container = styled.div`
    display: flex;
    padding: 40px;
`
const Left = styled.div`
    padding: 20px;
    width: 50%;
    align-items: center;
`
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 110px;
    margin-left: 90px;
`
const Image = styled.img`
    height: 100%;
    width: 90%;
    height:90%;
    margin-top: 50px;
`
const Title = styled.span`
    font-weight: bold;
    font-size: 70px;

`
const SubTitle = styled.span`
font-weight: semibold;
font-size: 24px;
font-style: italic;

`
const Desc = styled.p`
  width: 80%;

`
const Button = styled.button`
  border-radius: 10px;
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 150px;
  cursor: pointer;
  padding: 20px;   
  margin-bottom: -40px;                           
`
const Services = () => {
    return (
       <Container>
           <Left>
                 <Image src={old}></Image>
           </Left>
           <Right>
                 <Title>Services</Title>
           </Right>
       </Container>
    )
}

export default Services
