import React from 'react';
import {Footer} from './MainFooter.style'
import {Link} from "react-router-dom";

export const ViewMainFooter  = () => {
    return (
        <Footer>
            <div className="footer-wrapper">
                <div className={'left'}>
                    <img src={'logo-white.svg'} alt="101 labs icon" />
                    <p>Made by <a target='_blank' href="https://101Labs.org">101Labs.org</a></p>
                </div>
                <div className={'center'}>
                    <ul>
                        <p className={'title'}>Legal</p>
                        <li>
                            <Link to="/terms">TERMS</Link>
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
    )
}
