import React from 'react'
import Link from 'gatsby-link'

const ValidSudokuPage = () => (
    <div>
        <h1>Is it a valid Sudoku?</h1>
        <p>Games... They're great. Why? Because of the rules.
            The funny thing about rules is that
            you would think that they confine creativity.
            But the truth is that they foster creativity!
            For example, the app <a href="www.vine.com">Vine</a> has a rule
            that users can only post videos of six seconds
            in length. This rule forces people to get their
            point/story across in six seconds or less. They
            are forced to tell the story creatively instead of
            being given infinite time to get that same point across.
            How many youtube videos longer than thirty seconds
            have you watched in the last week?
            </p>
        <h2>Sudoku</h2>
        <p>Back to sudoku. Let's break down the rules of this game:</p>
        <ol>
            <li>each <b>game</b> consists of 1 <b>board</b></li>
            <li>each <b>board</b> consists of 9 <b>grids</b></li>
            <li>each <b>grid</b> consists of 9 <b>squares</b></li>
            <li>each <b>grid</b> must contain numbers <b>squares</b> (none of which can contain duplicate numbers)</li>
            <li>each <b>square</b> must contain a single number 1 - 9</li>
        </ol>
        <p>With those sets of rules, we are going to write some code... TDD style.
            Test Driven Development (TDD) really shines when we know exactly what
            needs to be done. AKA, when the rules/requirements are defined (never
            happens in the real world). We can basically translate each of these
            into a series of tests that tell us whether our code functions properly.
        </p>
        <h2>Tests</h2>
        <p>The easiest way to code something is to define all of the possible scenarios
            (as well as some impossible scenarios) and give the desired outcomes to those scenarios.
            This is going to look oddly familiar...
        </p>
        <ol>
            <li>When playing sudoku, we need at least 1 board</li>
            <li>When using a sudoku board, we need at least 9 grids</li>
            <li>When using a sudoku grid, we need 9 squares</li>
            <li>When using a sudoku grid, we need squares that are not duplicates</li>
            <li>When using a sudoku square, we need the entry to be 1 - 9</li>
        </ol>
    </div>
)

export default ValidSudokuPage