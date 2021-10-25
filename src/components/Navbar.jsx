import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0077ff4a' }}>
            <div className="container-fluid">
                <NavLink exact to='/' className='btn btn-light' activeStyle={{backgroundColor: '#0077ff4a'}}>
                    Home
                </NavLink>
                <NavLink exact to='/films' className='btn btn-light' activeStyle={{backgroundColor: '#0077ff4a'}}>
                    Films
                </NavLink>
                <NavLink exact to='/people' className='btn btn-light' activeStyle={{backgroundColor: '#0077ff4a'}}>
                    People
                </NavLink>
                <NavLink exact to='/locations' className='btn btn-light' activeStyle={{backgroundColor: '#0077ff4a'}}>
                    Locations
                </NavLink>
            </div>

        </nav>
    )
}

export default Navbar