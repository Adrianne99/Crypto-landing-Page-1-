import React from 'react'
import styled from 'styled-components'
import {FaTwitter, FaTelegramPlane,FaMediumM,FaRedditAlien} from 'react-icons/fa'
import mainImage from '../Images/new1.png'



const AboutSection = styled.div`
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #101010;
      font-family: 'Roboto', sans-serif;
  `


const AboutContainer = styled.div`
      text-align: center;
      color: black;
  `

const AboutRow = styled.div`

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        text-align: start;
        align-items: center;

        @media (max-width: 768px){
          flex-direction: column  ;
        }
  `

const AboutRowTwo = styled.div`
      width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        text-align: start;
        align-items: center;

        @media (max-width: 992px){
          flex-direction: column  ;
        }
`
const AboutColumnOne = styled.div`
    width: 400px;
    margin: 50px 0;

    & :nth-child(1){
      img{
    width: 340px;
    z-index: 1;
    user-select: none;
}
    }

    @media (max-width: 768px){
        margin: auto;
        width: 100%;

        &:nth-child(1){
            img{
                width: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
            }
        }
    }
  `
const AboutColumnTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 992px){
      text-align: center;
      font-size: 12px;
      margin: auto
    }

  `
const ColumnHeading = styled.h1`
  font-size: 32px;
  color: white;
@media (max-width: 992px){
  text-align: center;
  color: white;


}
`

const ColumnTwoP = styled.p`
    margin-top: 10px;
    margin-bottom: 30px;
    width: 500px;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;

    @media (max-width: 992px){
      font-size: 14px;
      width: 100%;
      flex-wrap: wrap;
    }

  `

const AboutUtilities = styled.div`
width: 100%;
height: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;

    @media (max-width: 992px){
      flex-direction: column;
    }
  `
const AboutUtilityOne = styled.div`

      & :nth-child(1){
        width: 200px;
        margin: auto;
        display: flex;
        align-items: center;
      }
  `

const AboutUtilityTwo = styled.div`
      & :nth-child(1){
        width: 200px;
        margin: auto;
        display: flex;
        align-items: center;
      }
  `
const AboutUtilityThree = styled.div`
  
  & :nth-child(1){
        width: 200px;
        margin: auto;
        display: flex;
        align-items: center;
      }
  `
const AboutUtilityOneHeading = styled.h3`
text-align: center;
font-size: 18px;
font-weight: 700;
background-color: #770B23;
padding: 10px 20px;
border: 2px solid #E63D34;
border-radius: 10px;
cursor: pointer;

@media (max-width: 992px){
  width: 180px;
  padding: 10px 20px;
  text-align: center;
  margin: auto;
}
`

const AboutUtilityTwoHeading = styled.h3`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    background-color: #770B23;
    padding: 10px 20px;
    border: 2px solid #E63D34;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 992px){
      width: 180px;
      padding: 10px 20px;
      text-align: center;
      margin: auto;
    }
  `
const AboutUtilityThreeHeading = styled.h3`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    background-color: #770B23;
    padding: 10px 20px;
    border: 2px solid #E63D34;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 992px){
      width: 180px;
      padding: 10px 20px;
      text-align: center;
      margin: auto;
    }

  `

const AboutUtilityOneP = styled.p`
  width: 200px;
  text-align: center;
  flex-wrap: wrap;
`
const AboutUtilityTwoP = styled.p`
  width: 200px;
  text-align: center;
  flex-wrap: wrap;
`
const AboutUtilityThreeP = styled.p`
  width: 200px;
  text-align: center;
  flex-wrap: wrap;
`
const IconContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 992px){
    display: flex;
    margin: auto;
}
@media (max-width: 768px){
    margin-bottom: 20px;
}
`
const ColumnIconOne = styled.div`
  width: 50px;
  height: 50px;
  background-image: linear-gradient(#ed2427, #ed663b);
  display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
    background: #C58A3C;
    color: white;
    border: 2px solid white;
    cursor: pointer;

    &:hover{
        background: #42A4EF;
    }

  & :nth-child(1){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const ColumnIconTwo = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
    align-items: center;
    justify-content: center;
    background: #C58A3C;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    color: white;

    &:hover{
        background: #42A4EF;
    }

  & :nth-child(1){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const ColumnIconThree = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
    align-items: center;
    justify-content: center;
    background: #C58A3C;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    border-radius:5px;

    &:hover{
        background: #42A4EF;
    }

  & :nth-child(1){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const ColumnIconFour = styled.div`
    width: 50px;
    height: 50px;
   display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C58A3C;
    color: white;
    border: 2px solid white;
    border-radius:5px;
    cursor: pointer;

    &:hover{
        background: #42A4EF;
    }

  & :nth-child(1){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Contract = styled.p`
    font-weight:700;
    margin: 0 0 20px 0;
    font-size: 14px;
`
const Tax = styled.p`
    font-weight:700;
    margin-bottom: 20px;
`

const SmallHeading = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    color: #c58a3c;
`
const About = () => {
    return (
  
      <AboutSection id="about">
        <AboutContainer>
          <AboutRow>
            <AboutColumnOne>
              <img src={mainImage} />
            </AboutColumnOne>
            <AboutColumnTwo>
                <SmallHeading>FLOKI POM</SmallHeading>
              <ColumnHeading>ABOUT US</ColumnHeading>
              <ColumnTwoP>Floki POM  $POMF is a community-driven memecoin that launched on PomChain,  The dev of memeshib help the dev to launched this project. Liquidity is burned forever and ownership is renounced. Inspired by Floki  on BSC and community’s dedication, The team intends to push this with added utilities and marketing.</ColumnTwoP>


              <IconContainer>
              <ColumnIconOne>
                <FaTwitter size={20} />
              </ColumnIconOne>
              <ColumnIconTwo>
              <a href="https://t.me/flokipom" target="__blank">
                <FaTelegramPlane size={20} />
                </a>
              </ColumnIconTwo>
              <ColumnIconThree>
                <FaMediumM size={20} />
              </ColumnIconThree>
              <ColumnIconFour>
                <FaRedditAlien size={20} />
              </ColumnIconFour>
              </IconContainer>
            </AboutColumnTwo>
          </AboutRow>
        </AboutContainer>
      </AboutSection>
  
    )
  }
  
  export default About