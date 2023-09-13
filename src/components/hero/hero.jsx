import React from 'react'

// Import Style
import { HeroLeft, HeroLeftButton, HeroLeftTitle, HeroLeftTitleH1, HeroRight, HeroSection, HeroWrapper } from './style'

// Import Images
import HeroBg from "../../assets/svg/hero-bg.svg"

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

                    </HeroRight>
                </HeroWrapper>
        </HeroSection>
    )
}
