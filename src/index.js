//const {render} = ReactDOM
// render(
//       <h1 id="title"
//           className="header"
//           style={{backgroundColor:'orange',color:'white',fontFamily:'vardana'}}>
//           Hey how are you
//        </h1>,
//        document.getElementById('react-container')
// 	)

import React from 'react'
import {render} from 'react-dom'
import { header , expyears, expyears2009, riding, highlightsblock, blogpanel, footer} from './lib'

render(
	<div>
       {header}
			 {expyears}
			 {expyears2009}
			  {riding}
				 {highlightsblock}
				  {blogpanel}
					 {footer}
    </div>,
       document.getElementById('react-container')
	)
