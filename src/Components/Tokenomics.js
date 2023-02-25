import React from 'react'
import styled from 'styled-components'
import MainImage from '../Images/new1.png'


const Tokenomics = () => {

    const MainContainer = styled.div`
        background: #101010;
        width: 100%;
        height: 100%;
        color: white;
    `
    const MainRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    `
    const Column = styled.h1`
        text-align: center;
    `
    const ColumnPipi = styled.p`
    border: 2px solid white;
    background: #C58A3C;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;

    &:hover{
        background: #42A4EF;
        transition: 0.5s;
    }

    @media (max-width: 768px){
        font-size: 13px;
        width: 400px;
    }

    @media only screen and (max-width: 600px){
        width: 330px;
        font-size: 10px;
    }
    
    `
    const ColumnP = styled.p`
    border: 2px solid white;
    background: #C58A3C;
    padding: 10px;
    margin-block: 10px;
    font-size: 24px;
    border-radius: 10px;

    &:hover{
        background: #42A4EF;
        transition: 0.5s;
    }

    @media (max-width: 768px){
        font-size: 14px;
    }

    @media only screen and (max-width: 600px){
        width: 330px;
        font-size: 12px;
        margin: auto;
        margin-top: 10px;
    }
    `

    const SecondRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    margin: 0 200px;
    padding: 20px;

    @media (max-width: 768px){

        flex-direction: column;
    }
    @media only screen and (max-width: 600px){
        display: flex;
        margin: auto;
    }
    `

    const FirstBox = styled.div`
    border: 2px solid white;
    width: 300px;
    height: 300px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    background: #C58A3C;
    cursor: pointer;


    &:hover{
        background: #42A4EF;
    }
    &:nth-child(1){
        img{
            width: 200px;
            display: flex;
            margin: auto;

        }
    }

    `
    const SecondBox = styled.div`
    border: 2px solid white;
    width: 300px;
    height: 300px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    background: #C58A3C;
    cursor: pointer;

    &:hover{
        background: #42A4EF;
    }

    &:nth-child(2){
        img{
            width: 200px;
            display: flex;
            margin: auto;
        }
    }
    `
    const ThirdBox = styled.div`
    border: 2px solid white;
    width: 300px;
    height: 300px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    background: #C58A3C;
    cursor: pointer;

    &:hover{
        background: #42A4EF;
    }

    &:nth-child(3){
        img{
            width: 200px;
            display: flex;
            margin: auto;
        }
    }
    `

    const FirstBoxText = styled.h3`
    padding-bottom: 30px;
    color: white ;
    `

    const ColumnSection = styled.div`
        display: flex;
        width: 690px;
        justify-content: space-between;

        @media (max-width: 768px){
            flex-direction: column;
            text-align: center;
            width: 400px;
        }
    `

const SmallHeading = styled.p`
font-size: 15px;
margin-bottom: 10px;
color: #c58a3c;
`
  return (
    <MainContainer id="tokenomics">
        <MainRow>
            <SmallHeading>FLOKI POM</SmallHeading>
            <Column>TOKENOMICS</Column>
            <ColumnPipi>Contract: 0x3B13A9BB49316dbbe009947142f995bFa005aE36</ColumnPipi>
            <ColumnSection>
            <a href="https://memescan.io/tx/0xad1d49a8e2dc1a85424507c6dcb9a794a1d14c7e974f3754712324490478cfc1" target="__blank"><ColumnP>Liquidity Pool: Burned</ColumnP></a>
            <a href="https://memescan.io/tx/0x953a13aa878f4b59888f6a6ac1ded665b9d3937fbe885f9e8bdb4e7655c5ccce" target="__blank"><ColumnP>Ownership: Renounced</ColumnP></a>
            <ColumnP>Tax: 7/7</ColumnP>
            </ColumnSection>
        </MainRow>
        <SecondRow>
            <FirstBox>
                <img src={MainImage}/>
                <FirstBoxText>1% DISTRIBUTION</FirstBoxText>
            </FirstBox>
            <SecondBox>
            <img src={MainImage}/>
                <FirstBoxText>2% LIQUIDITY</FirstBoxText>
            </SecondBox>
            <ThirdBox>
                <img src={MainImage}/>
                <FirstBoxText>4% MARKETING</FirstBoxText>
            </ThirdBox>
        </SecondRow>
    </MainContainer>
  )
}

export default Tokenomics