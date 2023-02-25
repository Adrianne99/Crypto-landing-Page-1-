import React from 'react'
import styled from 'styled-components'
import MainImage from '../Images/Mexc.png'
import MainImages from '../Images/new1.png'
import Meta from '../Images/Meta.png'

const Howtobuy = () => {

    const MainContainer = styled.div`
    background: #101010;
    color: white;
    padding: 50px;
    `

    const MainRow = styled.div``  
    const MainColumn = styled.div``  
    const ColumnSection = styled.div`
    `
    const ColumnP = styled.div``
    const SmallHeading = styled.p`
font-size: 15px;
margin-bottom: 10px;
color: #c58a3c;
text-align: center;
`

const MainHeading = styled.h1`
    text-align: center;
    font-size: 25px;
`

const MainHeadings = styled.h1`
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
`

const FirstBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    border: 2px solid white;
    border-radius: 20px;
    margin: 0 auto;
    padding: 15px;

    &:nth-child(1){
        img{
            width: 100px;
            margin-left: 20px;
        }
    }
    @media only screen and (max-width: 600px){
        &:nth-child(1){
        img{
            width: 35px;
            margin-left: 10px;
        }
    }
    }
`
const SecondBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    border: 2px solid white;
    border-radius: 20px;
    margin: 30px auto;
    padding: 15px;


    &:nth-child(2){
        img{
            width: 100px;
            margin-left: 20px;
        }
    }
    @media only screen and (max-width: 600px){
        &:nth-child(2){
        img{
            width: 35px;
            margin-left: 10px;
        }
    }
    }
`
const ThirdBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    border: 2px solid white;
    border-radius: 20px;
    margin: auto;
    padding: 15px;

    &:nth-child(3){
        img{
            width: 100px;
            margin-left: 20px;
        }
    }
    @media only screen and (max-width: 600px){

        &:nth-child(3){
        img{
            width: 35px;
            margin-left: 10px;
        }
    }
    }
`

const FirstBoxText = styled.h3`

margin-left: 20px;

    @media (max-width: 768px){
        font-size: 9px;
        margin-left: 20px;
    }
`

const TextBox = styled.div`
    flex-direction: column;
`
  return (
    <MainContainer id="howtobuy">
        <MainRow>
            <SmallHeading>FLOKI POM</SmallHeading>
            <MainHeading>HOW TO BUY</MainHeading>
            <MainHeadings>FOLLOW THIS STEPS</MainHeadings>
            <MainColumn>
            <ColumnSection>
            <FirstBox>
                <img src={MainImage}/>
                <TextBox>
                <FirstBoxText>STEP 1</FirstBoxText>
                <FirstBoxText>POM is listed on MEXC only. Download and create an account in MEXC if you don't have any.</FirstBoxText>
                </TextBox>
            </FirstBox>
            <SecondBox>
            <img src={Meta}/>
                <TextBox>
                <FirstBoxText>STEP 2</FirstBoxText>
                <FirstBoxText>Withdraw ypur $POM from MEXC to your Metamask orTokenpocket wallet address.</FirstBoxText>
                </TextBox>
            </SecondBox>
            <ThirdBox>
            <img src={MainImages}/>
                <TextBox>
                <FirstBoxText>STEP 3</FirstBoxText>
                <FirstBoxText>Open pomswap.org on your Dapp browser, Connect your Wallet and trade FlokiPom.</FirstBoxText>
                </TextBox>
            </ThirdBox>
            </ColumnSection>
            </MainColumn>
        </MainRow>
    </MainContainer>
  )
}

export default Howtobuy