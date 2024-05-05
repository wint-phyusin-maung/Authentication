import React from 'react'
import { css } from '@emotion/css'

const h1 = css`
  font-size: 24px;
  font-weight: bold;
  color: orange;
`;


export default function home() {
    return (
        <div>
            <h1 className={h1}>Welcome to our home </h1>
            <p>
                Basic Parts of a Webpage ... Header or Banner: Located at the top of a webpage. It can include the company logo, a title and sometimes a search box for the site.
            </p>
        </div>
    )
}

