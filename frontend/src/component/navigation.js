import React from 'react'
import { css } from '@emotion/css'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react';
import { cilShieldAlt } from '@coreui/icons';


const Nav = css`
   width: 80%;
   height:8vh;
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
    return (
        <nav className={Nav}>
            <div className={logo}>
                <h6>
                    <CIcon icon={cilShieldAlt} style={{ '--ci-primary-color': 'blue' }} />
                    <span className={span}>KopoKie</span>
                </h6>

            </div>
            <div className={Navbar}>
                <ul>
                    <li>
                        <Link className={css`text-decoration: none;`} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={css`text-decoration: none;`} to='/logout'>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
