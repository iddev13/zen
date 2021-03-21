import React from 'react';
import './Main.scss';
import '../intro/Intro'
import Intro from '../intro/Intro';


class Main extends React.Component {


	render() {

		return (
			<main className="Main">
				<h1 className="Main__title">{this.props.title}</h1>
				<Intro
					title="Peaceful shopping.
					Mindful money."

					text="See how we can help with making your shopping experience and money management more ZEN."
				/>
			</main>
		);
	}
}

export default Main;