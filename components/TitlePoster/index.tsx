import React from 'react'

import Title from './Title'

const Header = () => {
  return (
    <div className="container">
      <Title />
      <style jsx>
        {`
          .container {
            margin: 2rem 0 3rem;
          }
          .container :global(.header) {
            display: flex;s
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}

export default Header
