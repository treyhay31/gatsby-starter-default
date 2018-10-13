import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome welcome welcome!</h1>
    <p>Ever wanted to see something incredible and you just can't find it? Look no further...</p>
    <h2>Each thing here is more incredible than the next:</h2>
      <ul>
          <li><Link to="/problems/">Practice Problems</Link></li>
          <li><Link to="/data/">Data Science/Machine Learning</Link></li>
          <li><Link to="/software/">Software Design{ " & " }Coding Practices</Link></li>
      </ul>
    <p>Hopefully there is some value in there somewhere and things
        have been explained properly. If not, let me know here mailto:dude@treyhayhayhayyy.me</p>
  </div>
)

export default IndexPage
