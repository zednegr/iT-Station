import React from 'react'

// Import Style
import { HeroLeft, HeroLeftButton, HeroLeftTitle, HeroLeftTitleH1, HeroRight, HeroSection, HeroWrapper, HeroRightImg } from './style'

// Import Images
import HeroBg from "../../assets/svg/hero-bg.svg"
import HeroRightStudent from "../../assets/img/hero-right-img.png"

export default function Hero() {
    return (
        <HeroSection>
                <HeroWrapper>
                    <HeroLeft>
                        <HeroLeftTitle>
                            <HeroLeftTitleH1>Dasturlashga oid kasblarni o'rgatamiz</HeroLeftTitleH1>
                        </HeroLeftTitle>

                        <HeroLeftButton>O'qishni boshlash</HeroLeftButton>
                    </HeroLeft>

                    <HeroRight>
                        <HeroRightImg src={HeroRightStudent}/>
                    </HeroRight>
                </HeroWrapper>
        </HeroSection>
    )
}
