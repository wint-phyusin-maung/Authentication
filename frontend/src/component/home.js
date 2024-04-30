import React from 'react'
import { css } from '@linaria/core';

const h1 = css`
  font-size: 24px;
  font-weight: bold;
`;


export default function home() {
    return (
        <div>
            <h1 className={h1}>Welcome to our home </h1>
        </div>
    )
}

