import React from 'react'
import Link from 'gatsby-link'

const SoftwareIndexPage = () => (
  <div>
    <h1>Software Design!</h1>
      <ul>
          <li><Link to="software/design-patterns">Design Patterns</Link></li>
          <li><Link to="software/data-structures">Data Structures</Link></li>
          <li><Link to="software/sorting">Sorting Algo's</Link></li>
      </ul>
  </div>
)

export default SoftwareIndexPage
