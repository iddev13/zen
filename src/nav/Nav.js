import React from 'react';
import './Nav.scss';


class Nav extends React.Component {

	render() {
		let nav = this.props.nav;
		return (
			<nav className="Header__nav Header__nav--rigth Row">
				<ul className="Header__list">
					{Object.keys(nav).map(elem => {
						return <li key={elem.toString()}><a
							className="Header__link" href={nav[elem]}>{elem}</a></li>
					})}
				</ul>
			</nav>
		);
	}
}

export default Nav;