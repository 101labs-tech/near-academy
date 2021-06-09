import * as React from 'react'

//prettier-ignore
import { InviteContainer, InvitePage, InviteStyled } from './Invite.style'

import {MainFooter} from 'app/App.components/MainFooter/MainFooter.controller'

export const InviteView = () => {
    return (
        <InviteStyled>
            <InvitePage>
                <InviteContainer>
                    <h1>Referral Program</h1>

                    <p>You are about to play the role of a web developer at the Meme Museum</p>

                    <p>The year is 2029 , the near future. Things are not that different from today except perhars that life
                    is 80% digital now. Innovations that seemed like breakthroughs in the early 2020s are now widely
                    adopter. NEAR Protocol is the leading blockchain platform</p>

                    <p>The new NFT MEME Museum in Rio de Janeiro is the hottest thing
                    right now. Elon Musk was there at its inauguration last week and that says something!</p>
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
                            <input type="text"/>
                            <button type='submit'>copy</button>
                        </div>
                        <p>Share this link with your friends and earn NEAR.
                            For each newly registered user that finishes the NEAR Academy you will get 3 NEAR</p>
                    </form>
                    <h1>Referral Program</h1>

                    <p>You are about to play the role of a web developer at the Meme Museum</p>

                    <p>The year is 2029 , the near future. Things are not that different from today except perhars that life
                        is 80% digital now. Innovations that seemed like breakthroughs in the early 2020s are now widely
                        adopter. NEAR Protocol is the leading blockchain platform</p>

                    <p>The new NFT MEME Museum in Rio de Janeiro is the hottest thing
                        right now. Elon Musk was there at its inauguration last week and that says something!</p>
                </InviteContainer>
            </InvitePage>
            <img src={'museum_interior_x2.svg'} alt="museum interior" />
            <MainFooter />
        </InviteStyled>
    )
}
