import {NavLink} from "react-router-dom";
import styles from './Header.module.css'
import MenuLink from "../UI/NavLinkMenu.jsx";

function Header() {
    return (
        <header className='bg-zinc-200 px-2 py-3 flex justify-between shadow-md'>
            <img className='h-12' src='/logo.svg' alt='logo'/>
            {/*<h1 className='text-4xl text-red-500 '>Header</h1>*/}
            <nav>
                <ul className='gap-14 flex'>
                    <MenuLink to={"/"}>Home</MenuLink>

                    <MenuLink to={"/about"}>About</MenuLink>

                    <MenuLink to={"/cart"}>Cart</MenuLink>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
