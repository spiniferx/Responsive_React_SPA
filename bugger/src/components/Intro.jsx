import React from 'react'
import styled from 'styled-components'
import women from '../image/women.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc(100vh-50px);
    display:flex;
    padding: 20px;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    width: 40%;
`
const Title = styled.h1`
   font-size: 60px;
   width: 60%;
   padding: 15px;
`
const Desc = styled.p`
   font-size: 18px;
   width: 60%;
   margin-top: -46px;
   padding: 20px;
`
const Info = styled.div`
   width: 60%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 50px;
`
const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 1px;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`
const Phone = styled.span`
    color: #f0667D;
    font-weight: bold;
`
const ContactText = styled.span`
    color: gray;
`
const Image = styled.img`
    width: 100%;
    height: 110%;
`

const Intro = () => {
    return (
        <Container>
            <Left>
                 <Title>Adventure in Creative Age</Title>
                 <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .</Desc>
                 <Info>
                     <Button>Start a Project</Button>
                     <Contact>
                         <Phone>Call us on 000 000 000</Phone>
                         <ContactText>For any question or query</ContactText>
                     </Contact>
                 </Info>
            </Left>
            <Right>
                  <Image src={women}/>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Intro
