import React from "react"
import { Link } from "gatsby"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import styled from 'styled-components'


const TwoTextBlockWithImage = ({ module }) => {
  // get module fields
  const { customFields } = module

  // function to check whether or not the url is absolute
  const isUrlAbsolute = url => url.indexOf("://") > 0 || url.indexOf("//") === 0

  // function to generate proper link
  const generateLink = (url, target, text) => {
    // if relative link, use Gatsby Link
    if (isUrlAbsolute(url) === false) {
      return (
        <StyledLink
          to={url}
          title={text}
          target={target}
        >
          {text}
        </StyledLink>
      )
    } else {
      // else use anchor tag
      return (
        <StyledLinkA
          href={url}
          title={text}
          target={target}
        >
          {text}
        </StyledLinkA>
      )
    }
  }

  return (
      <StyledDiv>
      <LeftBlock>
            {customFields.primaryButton ? (
            <Link to={customFields.primaryButton.href}>
              <StyledAgilityImage
                image={customFields.image}
                layout="constrained"
                width="768"
                height="512"
              />
            </Link>
          ) : (
            <StyledAgilityImage
              image={customFields.image}
              layout="constrained"
              width="768"
              height="512"
            />
          )}
          
          <TextBlock>
            <StyledH2>
              {customFields.title}
            </StyledH2>
            <TextStyledP>
              {customFields.content}
            </TextStyledP >
            {customFields.primaryButton &&
              generateLink(
                customFields.primaryButton.href,
                customFields.primaryButton.target,
                customFields.primaryButton.text
              )}
          </TextBlock>
        </LeftBlock>
        <RightBlock >
            {customFields.primaryButtonBlock2 ? (
            <Link to={customFields.primaryButtonBlock2.href}>
              <StyledAgilityImage
                image={customFields.imageBlock2}
                layout="constrained"
                width="768"
                height="512"
              />
            </Link>
          ) : (
            <StyledAgilityImage
              image={customFields.imageBlock2}
              layout="constrained"
              width="768"
              height="512"
            />
          )}

          <TextBlock>
            <StyledH2>
              {customFields.titleBlock2}
            </StyledH2>
            <TextStyledP >
              {customFields.contentBlock2}
            </TextStyledP >
            {customFields.primaryButtonBlock2 &&
              generateLink(
                customFields.primaryButtonBlock2.href,
                customFields.primaryButtonBlock2.target,
                customFields.primaryButtonBlock2.text
              )}
          </TextBlock>
        </RightBlock>
      </StyledDiv>
    
  )
}

export default TwoTextBlockWithImage

//Styles for this component
const StyledDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  max-width:999px;
  margin-left:auto;
  margin-right:auto;
  padding-left:2em;
  padding-right:2em;
  @media only screen and (min-width: 999px) {
    flex-direction:row;
    padding-top:6rem;
    padding-bottom:6rem;
  }
`
const LeftBlock = styled.div`
margin-top:4em;
@media only screen and (min-width:999px){
  width:50%;
  margin-top:0;
  padding-right:1em;
}
@media only screen and (max-width:998px){
  padding-right:0;
}
`
const RightBlock = styled.div`
margin-top:4em;
@media only screen and (min-width:999px){
  width:50%;
  margin-top:0;
  padding-right:1em;
  align-self: flex-start;
}
@media only screen and (max-width:998px){
  padding-right:0;
}
`
const TextBlock = styled.div `
text-align:center;

@media (min-width: 768px) {
    text-align: left;
}`
const StyledH2 = styled.h2 `
  color: rgba(36, 62, 99, 100);
  font-weight:900;
  font-size:1.5em;
  line-height:2rem;
  margin-top:1em;
  text-align:center;

@media (min-width: 768px) {
  text-align:left;
}
`
const TextStyledP = styled.p `
font-size: 0.875rem;
line-height: 1.75rem;
color: rgba(102, 120, 146, 100);
font-weight:500;
margin-top:1em;
margin-bottom:2em;
@media (min-width: 1024px) {
  text-align:left;
  font-size: 1.125rem;
}
@media (min-width: 768px) {
  text-align:left;
  font-size: 1rem;
}
`
const StyledAgilityImage = styled(AgilityImage)`
border-radius: 0.5rem;
object-fit:cover;
object-position:center;
cursor: pointer;
`
const StyledLink = styled(Link)`
color:white;
font-weight:500;
font-size: 1rem;
padding: 0.75rem 2rem 0.75rem 2rem;
border-radius: 0.375rem;
background-color: rgba(100, 21, 255, 100);
&:hover {
  background-color: rgba(80, 17, 204, 100);
}
`
const StyledLinkA = styled.a`
color:white;
font-weight:500;
font-size: 1rem;
padding: 0.75rem 2rem 0.75rem 2rem;
border-radius: 0.375rem;
background-color: rgba(100, 21, 255, 100);
&:hover {
  background-color: rgba(80, 17, 204, 100);
}
`