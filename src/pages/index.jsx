import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Francisco.
        </BigTitle>
        <Subtitle>I'm creating noice web & mobile experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Articles</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="HOCs with React’s Context API"
            link="https://itnext.io/combining-hocs-with-the-new-reacts-context-api-9d3617dccf0b"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            • Aug 2018
          </ProjectCard>
          <ProjectCard
            title="Real Time GraphQL Mutations"
            link="https://medium.com/@franciscovarisco/real-time-graphql-mutations-using-apollo-client-react-and-optimistic-ui-10e35ec3553e"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            • Jul 2018
          </ProjectCard>
          {/* <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Francisco Varisco" />
          <AboutSub>
            I'm a technology enthusiast that loves ... people 🤔 <br />I wasn't born in America. I've never been in San Francisco before and yet people call me San Fran (Apparently for no outstanding reason)
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the amazing feeling of getting things done? Well, I'm substantially addicted to that.
          I'm quite moved by challenges and I believe that knowledge can transform people and impact others around you.
          <br />"<strong>FIND</strong> what you love"
          <br />"<strong>TRUST</strong> everything will work out perfectly in the end"
          <br />"<strong>KNOW</strong> we all have challenges. KNOW they only make us STRONGER"
          <br />(Steve Jobs)
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:francisco.varisco@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/xicovarisco/" target="_blank">LinkedIn</a> /{' '}
            <a href="https://github.com/xicovarisco" target="_blank">GitHub</a> /{' '}
            <a href="https://medium.com/@franciscovarisco" target="_blank">Medium</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019. Made by XicoVarisco 😎
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
