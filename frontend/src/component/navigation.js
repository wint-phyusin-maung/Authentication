import React, { useState,useEffect } from 'react'
import { css } from '@emotion/css'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react';
import { cilShieldAlt } from '@coreui/icons';


const Nav = css`
   width: 80%;
   height:10vh;
   margin: 0 auto;
   display: flex;
   align-center: center;
   border-bottom: 1px solid #ccc;

   h6{
        width: 2rem;
   }
`

const logo = css`
   margin-left: 0;
   align-self: center;
`

const Navbar = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;

    ul 
    {
        display: flex;
    }

    li {
        list-style-type: none;
        margin-left: 1rem;
    }
`

const span = css`
    font-weight: bold;
`

export default function Navigation() {

    const [isAuth, setIsAuth] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
      };

    const removeActive = () => {
        setIsActive(false)
      };

    useEffect(() => {
        if(localStorage.getItem('access_token') !== null){
            setIsAuth(true)
        }
    },[isAuth])
    return (
        <nav className={Nav}>
            <div className={logo}>
                <h6>
                    <CIcon icon={cilShieldAlt} style={{ '--ci-primary-color': 'green' }} />
                    <span className={span}>KopoKie</span>
                </h6>

            </div>
            <div className={Navbar}>
                <ul>
                    <li onClick={removeActive}>
                        <Link className={css`text-decoration: none;`} to="/">Home</Link>
                    </li>
                  
                    {isAuth ? 
                    <li onClick={removeActive}>
                        <Link className={css`text-decoration: none;`} to='/logout'>Logout</Link>
                    </li> : 
                     <li onClick={removeActive}>
                     <Link className={css`text-decoration: none;`} to='/login'>Login</Link>
                    </li>
                    }
                </ul>

                
            </div>
        </nav>
    )
}
