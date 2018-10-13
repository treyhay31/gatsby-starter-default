import React from 'react'
import Link from 'gatsby-link'

const ProblemsIndexPage = () => (
  <div>
    <h1>Practice Problems!</h1>
      <ul>
          <li><Link to="/problems/valid-sudoku">Valid Sudoku Problem - Part 1</Link></li>
          <li><Link to="/problems/valid-sudoku-2">Valid Sudoku Problem - Part 2... coming soon!</Link></li>
          <li><Link to="/problems/valid-sudoku-3">Valid Sudoku Problem - Part 3... coming soon!</Link></li>
          <li><Link to="/problems/solve-sudoku">Sudoku Solver Problem</Link></li>
      </ul>
  </div>
)

export default ProblemsIndexPage
