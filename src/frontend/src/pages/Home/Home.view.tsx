import * as React from 'react'
import { Link } from 'react-router-dom'
import {MainFooter} from 'app/App.components/MainFooter/MainFooter.controller'
import { Button } from 'app/App.components/Button/Button.controller'

//prettier-ignore
import { HomeContainer, HomePage, HomeStyled } from './Home.style'

export const HomeView = () => {
  return (
    <HomeStyled>
      <HomePage>
        <HomeContainer>
          <section className={'components first'}>
            <div className={'left'}>
              <h1 className={'left__header'}>
                Build a Web3 App <br /> the fun way!
              </h1>
              <p>NEAR Academy is an interactive course for web developers looking to explore blockchain integration with their Apps. It is free and ends with a certificate of completion.</p>

              <Link to="/near101/chapter-1">
                <Button text="START LEARNING" color="primary" />
              </Link>
            </div>
          </section>
          <section className={'components benefits'}>
            <h1>Benefits of Near Academy</h1>
            <ul>
              <li>
                <div className={'icon first'}>
                  <img src={'images/benefits/1.png'} alt="benefits icon" />
                </div>
                <h2>NFT Certificate</h2>
                <p className={'description'}>Complete the course and receive your certificate as a Non-Fungible Token.</p>
              </li>
              <li>
                <div className={'icon second'}>
                  <img src={'images/benefits/2.png'} alt="benefits icon" />
                </div>
                <h2>Earn To Learn</h2>
                <p className={'description'}>Get your NEAR mainnet account created for free on course completion.</p>
              </li>
              <li>
                <div className={'icon third'}>
                  <img src={'images/benefits/3.png'} alt="benefits icon" />
                </div>
                <h2>Contribute to NEAR Academy</h2>
                <p className={'description'}>Join the builders of NEAR Academy on Github. Earn NEAR if your PR is accepted.</p>
              </li>
              {/*<li>*/}
              {/*  <div className={'icon last'}>*/}
              {/*    <img src={'images/benefits/4.png'} alt="benefits icon" />*/}
              {/*  </div>*/}
              {/*  <h2>Earn To Learn</h2>*/}
              {/*  <p className={'description'}>Finish the course to get some Near. </p>*/}
              {/*</li>*/}
            </ul>
          </section>
          <section className={'components second'}>
            <h1>Join the future</h1>
            <div className={'left'}>
              <img src={'man.svg'} alt="main character" />
              <p>The decentralized internet, or Web3, has been growing at a fast pace since its inception in 2009. It is now a magnet to talent, with more smart developers joining every day. Web3 monthly developers are up +15% over 2020, following investments by venture capital of about $900M USD. </p>
              <p>This is very similar to the growth of internet services in the early 2000s, and hints at significant development for years to come. Importantly, the infrastructure has matured and makes it easy to create dApps, the decentralized equivalent to Apps.</p>
            </div>
            <div className={'button--center'}>
              <Link to="/near101/chapter-1">
                <Button text="JOIN NOW" color="secondary" />
              </Link>
            </div>
          </section>
          <section className={'components third'}>
            <div className={'left'}>
              <h1>
                Immerse yourself <br /> in the course narrative
              </h1>
             <p>You are about to play the role of a web developer at the Meme Museum.</p>
              <p>The year is 2029, the near future. Things are not that different from today except perhaps that life is 80% digital now. Innovations that seemed like breakthroughs in the early 2020s are now widely adopted. NEAR Protocol is the leading blockchain platform.</p>
              <p>The new NFT Meme Museum in Rio de Janeiro is the hottest thing right now. Elon Musk was there at its inauguration last week and that says something!</p>
              <Link to="/near101/chapter-1">
                <Button text="GET STARTED" color="primary" />
              </Link>
            </div>
            <img className={'museum-interior'} src={'museum_interior_x2.svg'} alt="museum interior" />
          </section>
        </HomeContainer>
      </HomePage>
      <MainFooter />
    </HomeStyled>
  )
}
