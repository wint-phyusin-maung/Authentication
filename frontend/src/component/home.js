import React from 'react';
import { css } from '@emotion/css';

const h1 = css`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const divOne = css`
  width: 100%;
  background-image: url('/images/natureev.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const subOne = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: green;
  backdrop-filter: blur(4px);
  width: 50%;
  align-items: flex-start;
  padding: 3rem;
  margin-right: 28rem;

  h1, p {
    padding: 1.2rem;
    color: white;
  }
`;

const Button = css`
  border: none;
  padding: 1rem .5rem;
  border-radius: .5rem;
  font-weight: bold;

`

export default function Home() {
    return (
        <div className={divOne}>
          <div className={subOne}>
            <h1 className={h1}>Your Gateway to Exquisite Living</h1>
            <p>Welcome to Discover Elegance, where sophistication and convenience intertwine. Dive into a world of refined luxury,
               where every aspect of your lifestyle is elevated with meticulously curated products and experiences.
            </p>
            <button className={Button}>
              Free Charging places for this month
            </button>
          </div>
        </div>
    );
}
