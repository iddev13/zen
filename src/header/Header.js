
import React from 'react';
import logo from './logo.svg';
import './Header.scss';
import Nav from '../nav/Nav';
import NavLeft from '../nav-left/NavLeft';


class Header extends React.Component {
	render() {
		let nav = this.props.nav;
		let navLeft = this.props.navLeft;
		return (
			<header className="Header">
				<div className="Header__inner Container">
					<div className="Header__left">
						<a href="/" className="Logo-link">
							<img src={logo} className="App-logo" alt="logo" />
						</a>
						<NavLeft navLeft={navLeft} />
					</div>
					<div className="Header__right">
						<Nav nav={nav} />

					</div>
				</div>

			</header>
		);
	}
}

export default Header;