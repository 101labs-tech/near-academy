import React from 'react';
import {Footer} from './MainFooter.style'
import {Link} from "react-router-dom";
import {PublicUser} from "../../../shared/user/PublicUser";
import * as PropTypes from "prop-types";
import {HeaderView} from "../Header/Header.view";


type FooterViewProps = {
    user?: PublicUser
}

export const ViewMainFooter  = ({user}: FooterViewProps) => {
    return (
        <Footer>
            <div className="footer-wrapper">
                <div className={'left'}>
                    <img src={'logo-white.svg'} alt="101 labs icon" />
                    { user ? <Link className={'link'} to="/invite">REFERRAL SYSTEM</Link> : null}
                    <Link className={'link'} to="/terms">TERMS</Link>
                    <p>Made by <a target='_blank' href="https://101Labs.org">101Labs.org</a></p>
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

ViewMainFooter.propTypes = {
    user: PropTypes.object,
}

ViewMainFooter.defaultProps = {}
