import { Link } from "react-router-dom";

const Nav = (props) =>{
    return (
        <nav>
            <ul>
                <li><Link to="/">home</Link> </li>
                <li><Link to="/ejemplo1">ejemplo1</Link> </li>
                <li><Link to="/ejemplo2">ejemplo2</Link> </li>
                <li><Link to="/ejemplo3">ejemplo3</Link> </li>
                <li><Link to="/ejemplo4">JSON</Link> </li>
                <li><Link to="/ejemplo5">API</Link> </li>

            </ul>
        </nav>

    )
}

export default Nav;