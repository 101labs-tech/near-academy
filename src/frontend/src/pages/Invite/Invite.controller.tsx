import * as React from 'react'
import { useEffect } from 'react'
import { InviteView } from './Invite.view'
import {useDispatch} from "react-redux";
import {getReferral} from "./Invite.actions";

export const Invite = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReferral())
    }, [dispatch])

    return <InviteView />
}
