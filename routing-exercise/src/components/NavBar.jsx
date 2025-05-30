import { Outlet, NavLink } from "react-router-dom";
import "./NavBar.css";
import NavigateBackButton from "./NavigateBackButton";

const NavBar = () => {
    return (
        <div className="NavBar">
            <header className="NavBar-header">
                <nav className="NavBar-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="mars">Mars</NavLink>
                    <NavLink to="venus">Venus</NavLink>
                    <NavLink to="orion-nebula">Orion Nebula</NavLink>
                    <NavLink to="andromeda-galaxy">Andromeda Galaxy</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <NavigateBackButton />
        </div>
    )
}

export default NavBar;
