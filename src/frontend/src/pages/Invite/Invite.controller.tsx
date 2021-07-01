import * as React from 'react'
import { useEffect } from 'react'
import { InviteView } from './Invite.view'
import {useDispatch, useSelector} from "react-redux";
import {getReferral} from "./Invite.actions";
import {State} from "../../reducers";

export const Invite = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: State) => state.auth.user)

    useEffect(() => {
        dispatch(getReferral())
    }, [dispatch])

    return <InviteView user={user} />
}
