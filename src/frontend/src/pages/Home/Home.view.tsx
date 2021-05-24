import * as React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'app/App.components/Button/Button.controller'

//prettier-ignore
import { Footer, HomeContainer, HomePage, HomeStyled } from './Home.style'

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
                <Button text="START ACADEMY" color="primary" />
              </Link>
            </div>
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
          <section className={'components benefits'}>
            <h1>Get Involved In Our Community</h1>
            <ul>
              <li>
                <h2>Events</h2>
                <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic iusto magnam nam quia rerum?</p>
              </li>
              <li>
                <h2>SputnicDOA</h2>
                <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error illo nemo possimus quod ullam.</p>
              </li>
              <li>
                <h2>Blog</h2>
                <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus enim labore laboriosam provident, sequi!</p>
              </li>
              <li>
                <h2>Guild</h2>
                <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi debitis eum officiis soluta voluptatem.</p>
              </li>
            </ul>
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
      <Footer>
        <div className="footer-wrapper">
          <div className={'left'}>
            <img src={'logo-white.svg'} alt="101 labs icon" />
            <Link to='/terms'>TERMS</Link>
            <p>Made by 101Labs.org</p>
          </div>
          <div className={'center'}>
           <ul>
             <p className={'title'}>Lorem</p>
             <li>
               <Link to="/terms">TERMS</Link>
             </li>
             <li>
               <Link to="/terms">Near NFT projects</Link>
             </li>
           </ul>
           <ul>
             <p className={'title'}>Ecosystem</p>
           </ul>
          </div>
          <div className={'right'}>
            {/* <div className="links">
              <a href="https://mintbase.io/" rel="noopener noreferrer" target="_blank" className="link">Mintbase</a>
              <a href="https://paras.id/" rel="noopener noreferrer" target="_blank" className="link">Paras</a>
              <a href="https://berryclub.io/" rel="noopener noreferrer" target="_blank" className="link">Berry Club</a>
              <a href="https://near.org/developers/" rel="noopener noreferrer" target="_blank" className="link">Near Devs</a>
              <a href="https://nearguilds.com/" rel="noopener noreferrer" target="_blank" className="link">Near Guilds</a>
              <a href="https://near.chat" rel="noopener noreferrer" target="_blank" className="link">Near Chat</a>
            </div> */}
            <div className="socials">
              <a href={'https://github.com/near'}>
                {' '}
                <img src={'github.svg'} alt="github icon" />
              </a>
              <a href={'https://twitter.com/NEARProtocol'}>
                <img src={'twitter.svg'} alt="twitter icon" />
              </a>
              <a href={'https://t.me/cryptonear'}>
                <img src={'telegram.svg'} alt="telegram icon" />
              </a>
            </div>
          </div>
        </div>
      </Footer>
    </HomeStyled>
  )
}
