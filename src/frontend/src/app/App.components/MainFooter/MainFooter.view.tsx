import React from 'react';
import * as PropTypes from "prop-types";

import {Footer} from './MainFooter.style'
import {Link} from "react-router-dom";
import {PublicUser} from "../../../shared/user/PublicUser";

type FooterViewProps = {
    user?: PublicUser
}

export const ViewMainFooter  = ({user}: FooterViewProps) => {
    return (
        <Footer>
            <div className={'footer-wrapper'}>
                <div className={'left-box'}>
                    <div className={'copy-box'}>
                        © NEAR Academy – 2021
                    </div>
                    <div className={'author-box'}>
                        Designed by <Link to="/">Dan Podkovko</Link>
                    </div>
                </div> 
                <div className={'logo-box'}>
                    <div className={'poweredBy'}>Powered by</div> <div className={'logo'} />
                </div> 
                <div className={'social-box'}>
                    <div className={'nav-items'}>
                        <ul>
                            <li className={'nav-item'}><Link to="/">About</Link></li>
                            <li className={'nav-item'}><Link to="/">Referral</Link></li>
                            <li className={'nav-item'}><Link to="/">Terms</Link></li>
                        </ul>
                    </div>
                    <div className={'social-items'}>
                        <ul>
                            <li className={'nav-item'}>
                                <a href={'https://github.com/near'}>
                                    {' '}
                                    <img src={'images/main_footer/github.png'} alt="github icon" />
                                </a>
                            </li>
                            <li className={'nav-item'}>
                                <a href={'https://twitter.com/NEARProtocol'}>
                                    <img src={'images/main_footer/twitter.png'} alt="twitter icon" />
                                </a>
                            </li>
                            <li className={'nav-item'}>
                                <a href={'https://t.me/cryptonear'}>
                                    <img src={'images/main_footer/telegram.png'} alt="telegram icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>

            {/* <div className="footer-wrapper">
                <div className={'left'}>
                    <img src={'logo-white.svg'} alt="101 labs icon" />
                    { user ? <Link className={'link'} to="/invite">REFERRAL SYSTEM</Link> : null}
                    <Link className={'link'} to="/terms">TERMS</Link>
                    <p>Made by <a target='_blank' href="https://101Labs.org">101Labs.org</a></p>
                </div>
                <div className={'right'}> */}
                    {/* <div className="links">
              <a href="https://mintbase.io/" rel="noopener noreferrer" target="_blank" className="link">Mintbase</a>
              <a href="https://paras.id/" rel="noopener noreferrer" target="_blank" className="link">Paras</a>
              <a href="https://berryclub.io/" rel="noopener noreferrer" target="_blank" className="link">Berry Club</a>
              <a href="https://near.org/developers/" rel="noopener noreferrer" target="_blank" className="link">Near Devs</a>
              <a href="https://nearguilds.com/" rel="noopener noreferrer" target="_blank" className="link">Near Guilds</a>
              <a href="https://near.chat" rel="noopener noreferrer" target="_blank" className="link">Near Chat</a>
            </div> */}
                    {/* <div className="socials">
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
            </div> */}
        </Footer>
    )
}

ViewMainFooter.propTypes = {
    user: PropTypes.object,
}

ViewMainFooter.defaultProps = {}
