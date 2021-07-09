import * as React from 'react'
import { useDispatch, useSelector } from "react-redux";

// import { State } from "./Invite.actions";
import { State } from "../../reducers";
// import { InviteView } from 'react'
import { InviteView } from './Invite.view'

export const Invite = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: State) => state.auth.user)

    // useEffect(() => {
    //     dispatch(getReferral())
    // }, [dispatch])

    const pending = useSelector((state: State) => state)

    return <InviteView user={user} />
}
