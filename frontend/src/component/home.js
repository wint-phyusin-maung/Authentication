import React from 'react'
import { css } from '@emotion/css'

const h1 = css`
  font-size: 24px;
  font-weight: bold;
  color: orange;
`;

const divOne = css`
  font-size: 1.2rem;
`


export default function home() {
    return (
        <div className={divOne}>
            <h1 className={h1}>Welcome to our home </h1>
            <p>
               Lorem15
            </p>
        </div>
    )
}

