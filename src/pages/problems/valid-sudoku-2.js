import React from 'react'
import Link from 'gatsby-link'

const ValidSudoku2Page = () => (
    <div>
        <h1>Validd Sudoku - P2</h1>
				<p>Coming soon! Hoping to validate duplicate numbers within columns, rows, grids...</p>
				<h1>
					<Link to="/problems/valid-sudoku">Valid Sudoku</Link>
					{" | "}
					<Link to="/problems/valid-sudoku-3">Valid Sudoku - P3</Link>
				</h1>
    </div>
)

export default ValidSudoku2Page