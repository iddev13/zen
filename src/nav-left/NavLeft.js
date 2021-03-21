import React from 'react';
import './NavLeft.scss';


class NavLeft extends React.Component {

	render() {
		let navLeft = this.props.navLeft;
		return (
			<nav className="Header__nav  Row">
				<ul className="Header__list">
					{Object.keys(navLeft).map(elem => {
						return <li key={elem.toString()}><a
							className="Header__link" href={navLeft[elem]}>{elem}</a></li>
					})}
				</ul>
			</nav>
		);
	}
}

export default NavLeft;




