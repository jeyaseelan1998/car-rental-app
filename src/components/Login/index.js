import { Link } from 'react-router-dom'
import './index.css'

const Login = () => (
    <div className='d-flex justify-content-center align-items-center login-bg-container'>
        <form className='p-3 d-flex flex-column justify-content-center align-items-center border border-success-subtle form-container'>
            <h1 className='login-heading mb-5'>Login</h1>
            <button type='button' className='btn btn-outline-primary'>Contiue as Admin</button>
            <Link to="/ventor">
                <button type='button' className='btn btn-outline-success mt-3 mb-3'>Contiue as Ventor</button>
            </Link>
            <Link to="/client">
                <button type='button' className='btn btn-outline-info'>Contiue as Client</button>
            </Link>
        </form>
    </div>
)

export default Login