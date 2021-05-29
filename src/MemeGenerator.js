import React from 'react';
import './MemeGenerator.css';
import random from './pet.jpg';

class MemeGenerator extends React.Component{
	constructor(){
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: random,
			allMemesImg: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		const {name, value} = event.target;
		this.setState({
			[name]:value
		})
	}

	componentDidMount(){
		fetch(' https://api.imgflip.com/get_memes')
		.then(response => response.json())
		.then(result => {
			const {memes} = result.data
			this.setState({ allMemesImg: memes })
		})
	}

	handleSubmit(event){
		event.preventDefault();
		// Get random index from allMemesImg
		const index = Math.floor(Math.random() * this.state.allMemesImg.length);
		// Now you have index grab the image (url) on that index from allMemesImg
		const randImgeMeme = this.state.allMemesImg[index].url;
		this.setState({
			randomImg: randImgeMeme
		})
	}

	render(){
		return(
			<div>
				<div className="inputBox">
					<input 
					type="text" 
					name="topText"
					placeholder="Enter top text"
					onChange={this.handleChange}
					value={this.state.topText}
				 />
					<input 
					type="text" 
					name="bottomText"
					placeholder="Enter bottom text"
					onChange={this.handleChange}
					value={this.state.bottomText}
				/>
					<button onClick={this.handleSubmit}>Gen</button>
				</div>

				<div className="container">
					<h1 className="topText">{this.state.topText}</h1>
					<img src={this.state.randomImg} alt="problem?"  height="400px"/>
					<h1 className="bottomText">{this.state.bottomText}</h1>
				</div>
			</div>
		);
	}
}

export default MemeGenerator