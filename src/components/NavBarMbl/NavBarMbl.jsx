import {Link} from "react-router-dom"

export const NavBarMbl = () =>{

    return (
     <>
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/"> About</Link>
                </li>
                <li>
                    <Link to="/"> Contact</Link>
                </li>
            </ul>
        </nav>
     </>
    )
    
}