import React, { Component } from 'react'
import Link from 'gatsby-link'
import Gist from 'react-gist'
import SudokuSvg from '../../components/problems/sudoku/sudoku-svg';

class ValidSudoku2Page extends Component {
	state = {
		showTests: true
	};

	onClick = () => {
		this.setState((prevState) => ({
			showTests: !prevState.showTests
		}));
	}

	showTests = () => (
		<div>
			<h2>Tests -- Code</h2>
			<p>Checking for duplicates is the main functionality 
				that we are looking for here. But as a side benefit
				we have found that getting rows, columns, and grids
				in a similar way allows us to have some great code reuse.</p>
			<Gist id="7c644f4c3e121f9d74b063f0ec5475e5" />
		</div>
	);

	showCode = () => (
		<div>
			<h2>Codes -- Code</h2>
			<p>Satisfying all of the tests left us with one 
				massive class. Depending on how much functionality 
				we add, this guy may be due for a refactor.</p>
			<Gist id="98b9b8f18fe548a921da9cb76f5173bd" />
		</div>
	);

	render() {
		return (
			<div>
				<h1>Valid Sudoku - P2</h1>
					<p>Hoping to validate duplicate numbers within columns, rows, grids...</p>
				<h2>More Tests!</h2>
					<p>In part 1, we looked at the most basic of all of the tests that anyone
						would ever need for a sudoku game. The kind of tests that just make you 
						think that unit testing isn't worth it. But these tests are a perfect 
						starting point and will keep us grounded if we dare endeavor to attempt
						some kind of crazy solution implementation! 
					</p>
				<br/>
					<p>So, where were we? You best believe we have a few more tests needed before
						we roll this out to production. We are going to think about a few more things
						here...
					</p>
				<h2>Natural Tests</h2>
					<ul>
						<li>Each <b>column</b> has no duplicates</li>
						<li>Each <b>row</b> has no duplicates</li>
						<li>Each <b>grid</b> has no duplicates</li>
					</ul>
				<h2>Game Input</h2>
					<p>Those tests are straight forward and simple enough so let's start thinking about them... soon.
						For now, we have a bigger issue on our hands. We have to handle incoming data... and I'm 
						talking like upwards of arond 81 integers, in total. The
						amount of numbers or inputs for sudoku is trivial but 
						the structure of how we receive it must be clarified. 
					</p>
				<h2>I Do The Numbers... and the definitions</h2>
					<p>The numbers could be given to us in a myriad of ways but for this example
						we will say that the input will read like a book... an eBook, if you will. Game 
						data will read in from left-to-right. See the image below to get the general idea.</p>
						<img 
							src="https://lh3.googleusercontent.com/QP8ChyFG5Ucxv84u2Vb7scLZhgSH5xlmEI6r12rCce_UAxC2QNfbr8kaDUr7TBPined-YLCbg1AyjxDOySLkMG2nWAX3l9iP4iDpnZGW8_M03mO5mgC8gQfZwkcCuhL7FInSTnSrA-k=w2400" 
							alt="Left To Right - just like a sudoku board but better"/>
				<br/>
					<p>Just like the graduates 
						from <a href="https://www.youtube.com/watch?v=NQ-8IuUkJJc"><em>Derek Zoolander's Center For Kids Who Can't Read Good</em></a>, we
						now have a firm understanding of how things are read. Which leads to the 
						next step before we can write our tests. Problem definitions. If we do a poor 
						job here, the rest of our sudoku lives will be miserable and full of confusion. 
					</p>
				<h2>Let's Reiterate</h2>
					<p>Paying close attention to the <b>rows</b>, <b>columns</b>, and <b>grids</b> on 
						this image, we can now clearly think about problem in well
						defined terms.</p>
				<SudokuSvg />
				<h2>Now Do The Tests...</h2>
					<p>Observe the magnificence of these tests and the cleanliness of 
						their implementing code! But honestly, stop making fun of me... this works, allegedly.
						Checking for duplicates in the rows and the grids will force us to possibly 
						raise one eyebrow. Meanwhile, finding duplicates in a grid will provide  </p>
				<button onClick={this.onClick}>Show {this.state.showTests ? 'Tests' : 'Codes'}!</button>
				{
						this.state.showTests ? this.showTests() : this.showCode()
				}
				<hr />
				<h2>Passing Tests!</h2>
					<p>Believe it or not, we actually have some 
						passing tests here. The test 
						results are too large for one screen. It is 
						nothing special, but we are one
						step closer to having a programmatic 
						way of identifying whether
						a sudoku board is valid. Just like in 
						the last post, we aren't trying to focus 
						too much on the code here but if you have 
						suggestions, <a href="mailto:dude@treyhayhayhayyy.me">please let me know</a>.</p>					
				<h2>
					<Link to="/problems/valid-sudoku">Valid Sudoku</Link>
					{" | "}
					<Link to="/problems/valid-sudoku-3">Valid Sudoku - P3</Link>
				</h2>
			</div>
		);
	}
}

export default ValidSudoku2Page