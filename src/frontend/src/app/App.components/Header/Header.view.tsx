import * as PropTypes from 'prop-types'
import * as React from 'react'
import {Link} from 'react-router-dom'
import {PublicUser} from 'shared/user/PublicUser'

import {HamburgerLeft} from '../Hamburger/Hamburger.controller'
// prettier-ignore
import {HeaderLoggedIn, HeaderLoggedOut, HeaderLogo, HeaderMenuItem, HeaderStyled, LeftContainer} from "./Header.style";
import {Button} from "../Button/Button.controller";

type HeaderViewProps = {
    user?: PublicUser
    removeAuthUserCallback: () => void
}

// Overall Navbar
export const HeaderView = ({user, removeAuthUserCallback}: HeaderViewProps) => {
    return (
        <HeaderStyled>
            <LeftContainer>
                <HamburgerLeft/>
                <Link to="/">
                    <HeaderLogo alt="logo" width="179px" src="/logo.svg"/>
                </Link>
            </LeftContainer>
            {user ? loggedInHeader({user, removeAuthUserCallback}) : loggedOutHeader()}
        </HeaderStyled>
    )
}

function loggedOutHeader() {
  return (
    <HeaderLoggedOut>
        <Link className={'get-started'} to="/near101/chapter-1">
            <Button text="Start learning" color="primary"/>
        </Link>
      {/*<Link to="/terms">*/}
      {/*  <HeaderMenuItem>TERMS</HeaderMenuItem>*/}
      {/*</Link>*/}
      <Link to="/sign-up">
        <HeaderMenuItem>Sign up</HeaderMenuItem>
      </Link>
      <Link to="/login">
        <HeaderMenuItem>Log in</HeaderMenuItem>
      </Link>
    </HeaderLoggedOut>
  )
}

function loggedInHeader({user, removeAuthUserCallback}: HeaderViewProps) {
    return (
        <HeaderLoggedIn>
            {/*<Link to="/terms">*/}
            {/*    <HeaderMenuItem>TERMS</HeaderMenuItem>*/}
            {/*</Link>*/}
            <Link to={`/user/${user?.username}`}>
                <HeaderMenuItem>{user?.username}</HeaderMenuItem>
            </Link>
            <Link
                to="/"
                onClick={() => {
                    removeAuthUserCallback()
                }}
            >
                <HeaderMenuItem>LOGOUT</HeaderMenuItem>
            </Link>
        </HeaderLoggedIn>
    )
}

HeaderView.propTypes = {
    user: PropTypes.object,
    removeAuthUserCallback: PropTypes.func.isRequired,
}

HeaderView.defaultProps = {}
