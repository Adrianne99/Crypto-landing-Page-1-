import React from 'react'
import styled from 'styled-components'

const Roadmap = () => {

  const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #101010;
    color: white;
    padding: 30px 0 50px 0;
  `

  const MainRow = styled.div`
    padding: 30px;
  `

  const SmallHeading = styled.p`
font-size: 15px;
margin-bottom: 10px;
color: #c58a3c;
text-align: center;
`

const RowHeading = styled.h1`
    text-align: center;
`

const RoadmapRowText = styled.p`
    text-align: center;
`
  
const  SecondRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    
    

    @media (max-width: 768px){
        flex-direction: column;
        display: flex;
        align-items: center;
    }
`

const FirstBox = styled.div`
    border: 2px solid white;
    width: 300px;
    height: 400px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    background: #C58A3C;

`
const SecondBox = styled.div`
    border: 2px solid white;
    width: 300px;
    height: 400px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    background: #C58A3C;
    opacity: 0.7;
`

const ThirdBox = styled.div`
    border: 2px solid white;
    width: 300px;
    height: 400px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    background: #C58A3C;
    opacity: 0.7;
`



const FirstBoxUpperHeading = styled.h3`
    padding: 20px 0 5px 0;
    font-size: 24px;
`
const FirstBoxUpperP = styled.p`
    font-size: 16px;
    padding-bottom: 10px;
`

const Line = styled.div`
width: 250px;
    border-bottom: 2px solid white;
`

const UlFirstBox = styled.ul`
    margin: 20px;

`

const LiFirstBox = styled.li`
    margin: 5px;
`

const Footer = styled.footer`
    text-align: center;
    padding: 20px 0 0 0;
    margin-top: 30px;
`

    return (
    <MainContainer id="roadmap">
        <MainRow>
            <SmallHeading>FLOKI POM</SmallHeading>
            <RowHeading>ROADMAP</RowHeading>
            <RoadmapRowText>We are currently on Phase 1 of our Roadmap.</RoadmapRowText>
        </MainRow>
        <SecondRow>
            <FirstBox>
                <FirstBoxUpperHeading>PHASE 1</FirstBoxUpperHeading>
                <FirstBoxUpperP>Q4 of 2022</FirstBoxUpperP>
                <Line></Line>
                <UlFirstBox>
                    <LiFirstBox>Deploy Contract </LiFirstBox>
                    <LiFirstBox>Rebrand Logo</LiFirstBox>
                    <LiFirstBox>Meme Competition</LiFirstBox>
                    <LiFirstBox>V1 Website / Socials</LiFirstBox>
                    <LiFirstBox>Buy Competition</LiFirstBox>
                </UlFirstBox>
            </FirstBox>
            <SecondBox>
                <FirstBoxUpperHeading>PHASE 2</FirstBoxUpperHeading>
                <FirstBoxUpperP>Q1 of 2023</FirstBoxUpperP>
                <Line></Line>
                <UlFirstBox>
                    <LiFirstBox>Building Solid Floor</LiFirstBox>
                    <LiFirstBox>Basic Marketing</LiFirstBox>
                    <LiFirstBox>Partnership with Influencers</LiFirstBox>
                    <LiFirstBox>Shilling Competition</LiFirstBox>
                    <LiFirstBox>Bigtime Competition</LiFirstBox>
                    <LiFirstBox>CG Application</LiFirstBox>
                    <LiFirstBox>CMC Application</LiFirstBox>
                </UlFirstBox>
            </SecondBox>
            <ThirdBox>
                <FirstBoxUpperHeading>PHASE 3</FirstBoxUpperHeading>
                <FirstBoxUpperP>Q2 of 2023</FirstBoxUpperP>
                <Line></Line>
                <UlFirstBox>
                    <LiFirstBox>Preparation of Staking Pools</LiFirstBox>
                    <LiFirstBox>Heavy Marketing</LiFirstBox>
                    <LiFirstBox>Giveaways</LiFirstBox>
                    <LiFirstBox>Dex Listings</LiFirstBox>
                    <LiFirstBox>Chinese Marketing</LiFirstBox>
                    <LiFirstBox>V2 Website</LiFirstBox>
                </UlFirstBox>
            </ThirdBox>
        </SecondRow>
        <Footer>Copyright © 2022 FLOKIPOM</Footer>
    </MainContainer>

  )
}

export default Roadmap