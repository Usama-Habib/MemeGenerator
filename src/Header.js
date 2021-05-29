import React from 'react'
import './Header.css'
import logo from './meme.jpg'

function Header(){
	return(
		<nav>
			<div>
				<img 
					src={logo}
					alt="logo" 
					width="80px"
				/>
			</div>
			<div>
				<h1 style={{marginLeft:20}}>Meme Generator</h1>
			</div>
		</nav>
	);
}

export default Header;