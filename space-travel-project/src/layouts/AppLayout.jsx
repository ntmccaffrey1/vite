import { Outlet, NavLink } from "react-router-dom";
import "./AppLayout.css"

export default function AppLayout() {
    return (
        <div className="AppLayout">
            <div className="AppLayout-container">
                <header>
                    <nav>
                        <NavLink to="/"><span className="AppLayout-navEmoji">🌎</span>Home</NavLink>
                        <NavLink to="spacecrafts"><span className="AppLayout-navEmoji">🚀</span>Spacecrafts</NavLink>
                        <NavLink to="planets"><span className="AppLayout-navEmoji">🪐</span>Planets</NavLink>
                    </nav>
                </header>
            </div>
            <main className="AppLayout-main">
                <div className="AppLayout-container">
                    <Outlet />
                </div>
            </main>
            <footer>
                <div className="AppLayout-container">
                    <div className="AppLayout-footerContainer">
                        <p>The solar system: the new home.</p>
                        <p>🌎🚀🧑‍🚀🪐</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}