import * as React from 'react'

//prettier-ignore
import { InviteContainer, InvitePage, InviteStyled } from './Invite.style'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {MainFooter} from 'app/App.components/MainFooter/MainFooter.controller'
import {useState} from "react";

export const InviteView = () => {
    const [value, setValue] = useState('https://near.academy/sign-up?referral=username')

    return (
        <InviteStyled>
            <InvitePage>
                <InviteContainer>
                    <h1>Referral Program</h1>

                    <p>NEAR Academy is free and it will always be.
                        For all our registered users, we thought that implementing a referral
                        system would be the most effective way to grow together.
                    </p>

                    <p>What can you expect from the Academy’s referral system?
                        Some NEAR every time your referred friend claims the certificate.
                    </p>

                    <ul>
                        <li>
                            <p>Pending</p>
                            <p>1</p>
                        </li>
                        <li>
                            <p>Complete</p>
                            <p>1</p>
                        </li>
                        <li>
                            <p>Reward</p>
                            <span>15 NEAR</span>
                        </li>
                    </ul>
                    <form action="">
                        <div className="input">
                            <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
                            <CopyToClipboard text={value}>
                                <a className='copy-button'>copy</a>
                            </CopyToClipboard>
                        </div>
                        <p>Share this link with your friends and earn NEAR.
                            For each newly registered user that finishes the NEAR Academy you will get 3 NEAR</p>
                    </form>
                    <h1>What do you have to do?</h1>

                    <p>
                        Simply share your link! During the registration process,
                        the Referral ID will be automatically filled with your username -
                        this way is faster for your friends and family to sign up!
                    </p>

                    <p>There is another way to increase your NEAR rewards:
                        by openly contributing to our repo on github</p>

                    <p>
                        Submit your PR on github:
                        <a href="https://github.com/101labs-tech/near-academy"> https://github.com/101labs-tech/near-academy </a>
                        If your PR is accepted, then share it here <a href="https://x2muu8nc82s.typeform.com/to/JFQB14AF"> https://x2muu8nc82s.typeform.com/to/JFQB14AF </a>
                          with your NEAR wallet address and wait for those NEAR to flow in.
                    </p>
                </InviteContainer>
            </InvitePage>
            <img src={'museum_interior_x2.svg'} alt="museum interior" />
            <MainFooter />
        </InviteStyled>
    )
}
