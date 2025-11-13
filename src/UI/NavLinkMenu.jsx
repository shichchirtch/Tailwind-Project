import {NavLink} from "react-router-dom";

export default function MenuLink({to, children}) {
    return (
        <li><NavLink className={({isActive}) => isActive ? 'links' : ''
        } to={to}>{children}</NavLink></li>
    )
}