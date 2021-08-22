import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
     height: 12vh;
`
const Wrapper = styled.div`
     padding: 10px 20px;
     display: flex;
     align-items: center;
     justify-content: space-between;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const Button = styled.button`
   border: 2px solid white;
   padding: 10px 15px;
   color: white;
   background-color: crimson;
   font-weight: bold;
   border-radius: 10px;
   cursor: pointer;
`
const MenuItems = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor:pointer;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Bugger</Logo>
                    <Menu>
                        <MenuItems>Home</MenuItems>
                        <MenuItems>Features</MenuItems>
                        <MenuItems>Services</MenuItems>
                        <MenuItems>Pricing</MenuItems>
                        <MenuItems>Contacts</MenuItems>
                    </Menu>
                </Left>
                <Button>Join Today</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
