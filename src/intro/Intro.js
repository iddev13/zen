import React from 'react'
import intro from './intro.jpg';
import LinkApp from '../link-app/LinkApp';
import './Intro.scss';


class Intro extends React.Component {

	render() {
		return (
			<div className="Intro">
				<div className="Container">
					<div className="Intro__inner">
						<div className="Intro__content">
							
							<h1 className="Intro__title">{this.props.title}</h1>
							<p className="Intro__text">{this.props.text}</p>
							<LinkApp />
						</div>
						<div className="Intro__image">
							<img src={intro} alt="Zen" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Intro