import React from 'react'

// Import Style
import { Container, NavbarButton, NavbarItem, NavbarList, NavbarLogo, NavbarLogoImg, NavbarSection, NavbarWrapper } from './style'

// Import Images
import NavbarBrand from "../../assets/img/ItStation-logo.png"

export default function Navbar() {
    return (
        <NavbarSection>
            <Container>
                <NavbarWrapper>
                    <NavbarLogo>
                        <NavbarLogoImg src={NavbarBrand} alt='Logo' />
                    </NavbarLogo>

                    <NavbarList>
                        <NavbarItem>Kurslar</NavbarItem>
                        <NavbarItem>Blog</NavbarItem>
                        <NavbarItem>Contact</NavbarItem>
                        <NavbarButton>Login</NavbarButton>
                    </NavbarList>
                </NavbarWrapper>
            </Container>
        </NavbarSection>
    )
}
