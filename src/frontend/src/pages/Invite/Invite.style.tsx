import styled from 'styled-components/macro'

import { FullPage } from 'styles'

export const InviteStyled = styled.div`
  position: relative;
  background: white;
  padding-bottom: 30px;

  > img {
    width: 100%;
    position: static;
  }
`

export const InvitePage = styled(FullPage)`
    padding: 100px 0px 0px 0px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #00C08B;
        padding: 50px 20px;
        
        p {
            color: #fff;
            font-size: 14px;
        }
        
        .input {
            width: 100%;
            margin-bottom: 20px;
            display: flex;    
            .copy-button {
                width: 20%;
                border: none;
                height: 40px;
                line-height: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #FEB261;
                color: #fff;
                font-size: 26px;
                font-weight: bold;
            }
            input {
                width: 80%;
                height: 40px;
                padding: 0px 10px;
                border: none;
            }
        }
    }
    
    ul {
        display: flex;
        justify-content: space-between;
        padding: 50px 0px;
        
        li {
            list-style: none;
            text-align: center;
            p, span {
                font-size: 40px;
                font-weight: 700;
            }
            span {
                color: #00C08B
            }
        }
    }
    `

export const InviteContainer = styled.div`
    width: 60%;
    margin: auto;
  > h1 {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
  }

  > h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  > ul {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`
