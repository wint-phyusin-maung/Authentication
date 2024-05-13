import React from 'react';
import { css } from '@emotion/css';

const h1 = css`
  font-size: 24px;
  font-weight: bold;
`;

const divOne = css`
  width: 100%;
  background-image: url('/images/natureev.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function Home() {
    return (
        <div className={divOne}>
            <h1 className={h1}>Welcome to our home</h1>
            <p></p>
        </div>
    );
}
