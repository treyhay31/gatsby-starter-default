import React from 'react'
import Gist from 'react-gist'
import SudokuSvg from './../../components/problems/sudoku/sudoku-svg'
import Link from 'gatsby-link'

const ValidSudokuPage = ({showTests = true}) => {
    const content = {
        test: { id: '3820928f3d55cb5acb8489e0bbb20030' },
        code: { id: 'c6ba14296e3aa0576170000a63af7abe' }
    };
    
    const flipTheSwitch = (e) => {
        console.log('event ', e);
        console.log('flipper ', showTests);
        showTests = !showTests;
    };
    
    return (
        <div>
            <h1>Valid Sudoku?</h1>
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
                <li>Each <b>game</b> consists of <b>1 board</b></li>
                <li>Each <b>board</b> consists of <b>9 grids</b></li>
                <li>Each <b>grid</b> consists of <b>9 squares</b></li>
                <li>Each <b>square</b> must contain a single number 1 - 9</li>
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
                <li>When playing sudoku, we need at least 1 <b>board</b></li>
                <li>When using a sudoku <b>board</b>, we need at least 9 <b>grids</b></li>
                <li>When using a sudoku <b>grid</b>, we need 9 <b>squares</b></li>
                <li>When using a sudoku <b>square</b>, we need the entry to be a number between 1 - 9</li>
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
            <h2>Tests -- Code</h2>
            <p>This will require all of your might to stick 
                to this, unless, of course, you are a TDD veteran.
                Even after my realization that TDD is the one true way to happiness,
                I find myself heading down the distant trails of possibility.
                There are tons of other things that we need to before we can 
                confidently say that the sudoku game/data that we receive is valid.
                However, trying to tackle all of those possibilities at once will only 
                make things overly complex! So let's stick to our word because our word
                is our bond. Check these tests !!! O.O !!!</p>
            <Gist id={content.test.id} />
            <h2>Codes -- Code</h2>
            <p>We write our tests one at a time and then make them pass as we go. If you like to play 
                by the rules then you should follow the <a href="http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd">three laws</a> set in place by
                the god-king of programming Mr. Robert Martin. If you're more curious about 
                it, <a href="https://www.youtube.com/watch?v=qkblc5WRn-U">here is the video</a> that
                convinced me. Here is what the fake data 
                from <a href="https://gist.github.com/treyhay31/56a29de4a19b1312ff30de7410fff770">sudoku.fake.data.js looks like</a>, 
                if you're curious!</p>
            <Gist id={content.code.id} />
            <hr />
            <h2>Passing Tests!</h2>
            <p>Believe it or not, we actually have some passing tests here. It is nothing special,
                but we are one step closer to having a programmatic way of identifying whether
                a sudoku board is valid. We aren't trying to focus too much on the code here 
                but if you have 
                suggestions, <a href="mailto:dude@treyhayhayhayyy.me">please let me know</a>
                . What we are focused on is the fact that we slowed things down and have a solid-simple-tested 
                base for our sudoku endeavors.</p>
            <img src="https://lh3.googleusercontent.com/llcf0rBsNf1hYQqIuH2qs_DfZW_kfPrZgOXoU-1Mpm4SRZHimoM-YkFtSJJT2rY_Nko6yru_lFkDkodU3LZ4Iyn76ATxo1yJmUvueBFKZ5jwjd32zqr7RH1T04EXMqmqsf3JHnlZtPY=w2400" alt="test output"/>
            <hr/>
            <h1>
                <Link to="/problems/valid-sudoku-2">Valid Sudoku - P2</Link>
                {" | "}
                <Link to="/problems/valid-sudoku-3">Valid Sudoku - P3</Link>
            </h1>
        </div>
    );
};

export default ValidSudokuPage