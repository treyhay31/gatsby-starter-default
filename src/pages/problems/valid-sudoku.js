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
            <li>each <b>game</b> consists of <b>1 board</b></li>
            <li>each <b>board</b> consists of <b>9 grids</b></li>
            <li>each <b>grid</b> consists of <b>9 squares</b></li>
            <li>each <b>square</b> must contain a single number 1 - 9</li>
        </ol>
        <p>Good... Fun... Great... Right? There are more rules but not of our concern yet.
            With those sets of rules, we are going to write some code... TDD style.
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
            <li>When using a sudoku square, we need the entry to be a number between 1 - 9</li>
        </ol>
        <h3>Sudoku Game Term Diagram</h3>
        <SudokuSvg />
        <p>The diagram covers all of the sudoku terms that we will be 
            talking about. Making sure that we are talking about 
            each piece of the problem clearly is called 
            {" "}<a href="https://martinfowler.com/bliki/UbiquitousLanguage.html">ubiquitous language</a>{" "}
            which is highly important. When working on a team, 
            having good communication/ubiquitous language often delineates 
            the boundary between success and failure. If the diagram 
            doesn't make sense, try playing a 
            {" "}<a href="https://www.websudoku.com/">game of sudoku and get familiar here!</a></p>
        <h2>The code that binds them!</h2>
        <p>We are speaking the same language, playing the same games, 
            thinking the same thoughts... I think, and having a great time doing it.
            So now it is time for the fun part, the modeling {"&"} code. Let's model this 
            as a <b>Game</b> that takes in a <b>Board</b> and checks whether the board is valid.
            The <b>Board</b> contains <b>Grids</b> {"&"} <b>Squares</b> like we've talked about.
            </p>
        <hr />
        <TestedCode isSuccess={true} test="This is passing" />
        <TestedCode isSuccess={false} test="This is failing" />
    </div>
)

const TestedCode = ({isSuccess, test}) => isSuccess ? <PassingTestedCode test={test} /> : <FailingTestedCode test={test} />

const PassingTestedCode = ({ test }) => (
    <div style={{backgroundColor: "green"}}>
        <p>{test} &#10004;</p>
    </div>
);

const FailingTestedCode = ({ test }) => (
    <div style={{backgroundColor: "red"}}>
        <p>{test} &#10006;</p>
    </div>
);

const SudokuSvg = () => (
    <div>
        <svg viewBox="0 0 100 100">
            <rect width="100" height="100" fill="black" /> 
            <rect x="5" y="5" width="90" height="90" fill="#F6A3A3" stroke="grey" /> 
            <text x="38" y="55" style={{fontSize: "0.5em"}}>Board</text>

            <rect x="35" y="5" width="30" height="30" fill="#4C9F9F" stroke="grey" /> 
            <text x="44.6" y="22" style={{fontSize: "0.3em"}}>Grid</text>

            <rect x="5" y="5" width="30" height="30" fill="#F7F18B" stroke="grey" /> 
            <rect x="5" y="15" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="5" y="25" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="15" y="5" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="25" y="5" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="15" y="15" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="25" y="25" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <text x="14.2" y="38" style={{fontSize: "0.2em"}}>^^^^^</text>
            <text x="13.4" y="40" style={{fontSize: "0.2em"}}>Squares</text>

            <rect x="85" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="75" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="65" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="55" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="45" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="35" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="25" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="15" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="05" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <text x="7" y="83" style={{fontSize: "0.3em"}}>Row</text>

            
            <rect x="85" y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="75" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="65" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="55" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="45" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="35" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="25" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="15" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <rect x="85" y="05" width="10" height="10" fill="#F7F18B" stroke="grey" /> 
            <text x="60" y="60" transform="rotate(-90,83,60)" style={{fontSize: "0.3em"}}>Column</text>
        </svg>
        <hr />
    </div>
);

export default ValidSudokuPage