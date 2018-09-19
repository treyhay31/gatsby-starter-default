import React from 'react'
import Link from 'gatsby-link'

const ProblemsIndexPage = () => (
  <div>
    <h1>Practice Problems!</h1>
      <ul>
          <li><Link to="/problems/valid-sudoku">Valid Sudoku Problem</Link></li>
          <li><Link to="/problems/solve-sudoku">Sudoku Solver Problem</Link></li>
      </ul>
  </div>
)

export default ProblemsIndexPage
