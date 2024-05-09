import React from 'react'
import { css } from '@emotion/css'
import nature from '../../public/images/natureev.jpg'

const h1 = css`
  font-size: 24px;
  font-weight: bold;
  color: orange;
`;

const divOne = css`
  background-image: url(${nature})

`


export default function home() {
    return (
        <div className={divOne}>
            <h1 className={h1}>Welcome to our home </h1>
            
        </div>
    )
}

