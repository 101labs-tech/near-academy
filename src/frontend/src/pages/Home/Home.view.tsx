import { Button } from 'app/App.components/Button/Button.controller'
import * as React from 'react'
import { Link } from 'react-router-dom'

//prettier-ignore
import { HomeContainer, HomePage, HomeStyled } from './Home.style'

export const HomeView = () => {
  return (
    <HomeStyled>
      <HomePage>
        <HomeContainer>
          <section className={"components first"}>
            <div className={"left"}>
              <h1>Build a Web3 App the fun way!</h1>
              <p>NEAR Academy is an interactive introduction course for web developers looking to explore blockchain integration to their Apps. It is free, and it hands a completion certificate.</p>
              <Link to="/near101/chapter-1">
                <Button text="START ACADEMY" color="primary" />
              </Link>
            </div>
            <div className={"right"}>
              <img src={'museum_exterior_animated.svg'}/>
            </div>
          </section>

          <section className={"components second"}>
            <h1>Join the future</h1>
            <div className={"left"}>
              <img src={'man.svg'}/>

              <p>The decentralized internet, or Web3, has been growing at a fast pace since its inception in 2008.
                It is now a magnet to talent, with more smart developers joining every day.
                Web3 monthly developers are up +15% over 2020, following investments in venture capital of about 900 Mio USD. </p>

              <p>This is not without similarities to the growth of internet services in the 2000s, and hints at significant development for years to come.
                Importantly, the infrastructure has matured, and makes it easy to create dApps, the decentralized equivalent to Apps. Do you have NPM installed?
                <Link to="/near101/chapter-1">
                  <Button text="JOIN NOW" color="secondary" />
                </Link>
              </p>
            </div>

          </section>


          <section className={"components third"}>
            <div className={"left"}>
              <h1>Immerse yourself in the course narrative</h1>
              <p>You are about to play a web developer at the Meme Museum.</p>
              <p>The year is 2029, the near future; things are not that different from today, except perhaps that life is 80% digital now. Innovation that seemed breakthrough in the early 20s is widely adopted, and so is NEAR protocol in the blockchain space.</p>
              <p>The new NFT Meme museum in Palo Alto is the hottest thing right now. Elon Musk was there at its inauguration last week, that says something.</p>

              <Link to="/near101/chapter-1">
                <Button text="GET STARTED" color="primary" />
              </Link>
            </div>
            <img src={'museum_interior_x2.svg'}/>
          </section>

          <footer className={"footer"}>
            <div className={"left"}>
              <img src={'logo-white.svg'}/>
              <p>Made by 101Labs.org</p>
            </div>
            <div className={"right"}>
              <a href={"https://github.com"}> <img src={'github.svg'}/></a>
              <a href={"https://twitter.com"}><img src={'twitter.svg'}/></a>
              <a href={"https://telegram.com"}><img src={'telegram.svg'}/></a>
            </div>
          </footer>

        </HomeContainer>
      </HomePage>
    </HomeStyled>
  )
}
