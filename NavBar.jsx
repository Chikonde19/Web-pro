import {Link} from "react-router-dom";

function NavBar(){
     return( <Nav className ="NavBar">
        <div className="NavBar-brand">
            <Link to ="/">Movie App</Link>
        </div>
        <div className='NavBar-links'>
            <link to='/' className="nav-link">Home</link>
            <link to='/Favorites' className="nav-link">Favorites</link>
        </div>
     </Nav>
     );
}
export default NavBar
