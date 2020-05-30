import React from 'react';
const Card = (props)=>{

	const{name, email, id}= props;
	return (

			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src= {`https://robohash.org/${id}200x200`}/>
			<div>
				<h2> {name}</h2>
				<p> {email} </p>

			</div>
			</div>

			);




}
export default Card;









/**import React, {	Component} from 'react';

class Card extends Component{
	render(){

		const {name, email, id}	= this.props;
		return (

			<div class='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots'src= {`https://robohash.org/${this.props.id}?200x200`}/>
			<div>
				<h2> {this.props.name}</h2>
				<p> {this.props.email} </p>

			</div>
			</div>

			)

		}
 
	}
export default Card; **/
