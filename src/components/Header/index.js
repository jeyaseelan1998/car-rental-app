import { Link } from 'react-router-dom'

import websiteLogo from '../../asserts/car-rental-logo.png'

import './index.css'

const Header = () => (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img className='website-logo' alt="website logo" src={websiteLogo}  />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link active"  to="/">Home</Link>
                    <a className="nav-link" href="#">About</a>
                </div>
            </div>
        </div>
    </nav>
)

export default Header
