import './Layout.css'
import { Link, Outlet } from 'react-router-dom'

function Layout(){
    
    return(
       <div>
            <nav className="ekar__navbar">
                <div className='brand'>
                    EKart
                </div>
                <div className='navbar__content'>
                    <input placeholder='Search' style={{padding:'5px 10px',minWidth:'350px',outline:'none'}}></input>
                    <select style={{padding:'5px 10px',outline:'none',border:'none',backgroundColor:'transparent',color:'white'}}>
                        <option style={{color:'black'}}>India</option>
                        <option style={{color:'black'}}>America</option>
                    </select>
                    <Link to='/login' className='ekart-button'>Login</Link>
                    <Link to='/'>Product</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/user'>User</Link>
                </div>
            </nav>
            <Outlet/>
        </div> 
    )
}

export default Layout