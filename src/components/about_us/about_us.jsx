import React from 'react'
import { AboutSection, AboutStart, AboutStartH3, AboutVideo, AboutWrapper, Container } from './about-us'

// Import React Player
import ReactPlayer from 'react-player'

export default function About_us() {
    return (
        <AboutSection>
            <Container>
                <AboutWrapper>
                    <AboutStart>
                        <AboutStartH3>Biz Haqimizda</AboutStartH3>
                    </AboutStart>

                    <AboutVideo>
                        <ReactPlayer url='https://www.youtube.com/watch?v=xqyUdNxWazA' controls={true} playIcon={true} width={900} height={500}/>
                    </AboutVideo>
                </AboutWrapper>
            </Container>
        </AboutSection>
    )
}
