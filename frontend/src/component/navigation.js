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
   justify-content: space-between;
   border-bottom: 1px solid #ccc;
`

const Navbar = css`
    display: flex;

    li {
        list-style-type: none;
        padding: 1.2rem;
    }
`

const span = css`
    font-weight: bold;
`

export default function Navigation() {
    return (
        <nav className={Nav}>
            <div>
                <h6>
                    <CIcon icon={cilShieldAlt} size="md" style={{ '--ci-primary-color': 'blue' }} />
                    <span className={span}>KopoKie</span>
                </h6>

            </div>
            <div>
                <ul className={Navbar}>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/logout'>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
