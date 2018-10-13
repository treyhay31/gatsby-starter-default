import React, { Component } from 'react'
import Link from 'gatsby-link'
import SudokuSvg from '../../components/problems/sudoku/sudoku-svg';

class ValidSudoku2Page extends Component {
	state = {
		when: "now"
	};

	onClick = () => {
		this.setState((prevState) => ({
			when: prevState.when === "now" ? "soon" : "now"
		}));
	}

	render() {
		return (
			<div>
				<h1>Valid Sudoku - P2</h1>
					<button onClick={this.onClick}>Coming {this.state.when}!</button>
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
						talking like upwards of large amounts of numbers ranging from 0 to around 81, in total. The
						amount of numbers or inputs for sudoku is trivial but the structure of how we receive it must
						be clarified. 
					</p>
					<h2>I Do The Numbers... and the definitions</h2>
					<p>The numbers could be given to us in a myriad of ways but for this example
						we will say that the input will read like a book... an eBook, if you will. Game 
						data will read in from left-to-right. See the image below to get the general idea.</p>
						<img src="https://source.unsplash.com/random/300x300" alt="... add picture of sudoku side-by-side with js array"/>
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
					<p>Observer the magnificence of these tests and the cleanliness of 
						their implementing code! But honestly, stop making fun of me... this works, allegedly.
						</p>
					<h2>Tests -- Code</h2>
					<p>...</p>
					{/* <Gist id="... test id" /> */}
					<h2>Codes -- Code</h2>
					<p>...</p>
					{/* <Gist id="... code id" /> */}
					<hr />
					<h2>Passing Tests!</h2>
					<p>Believe it or not, we actually have some 
						passing tests here. It is nothing special,
						but we are one step closer to having a 
						programmatic way of identifying whether
						a sudoku board is valid. Just like in 
						the last post, we aren't trying to focus 
						too much on the code here but if you have 
						suggestions, <a href="mailto:dude@treyhayhayhayyy.me">please let me know</a>.</p>
					{/* <img src="..." alt="test output"/> */}
					<h1>
						<Link to="/problems/valid-sudoku">Valid Sudoku</Link>
						{" | "}
						<Link to="/problems/valid-sudoku-3">Valid Sudoku - P3</Link>
					</h1>
			</div>
		);
	}
}

export default ValidSudoku2Page