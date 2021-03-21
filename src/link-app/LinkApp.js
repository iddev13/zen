import React from 'react';
import appStore from './appstore.svg'
import googlePlay from './google-play.svg'
import './LinkApp.scss';

class LinkApp extends React.Component {
	render() {
		return (
			<div className="LinkApp">
				<ul>
					<li>
						<a href="#">
							<img src={appStore} alt="appstore" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={googlePlay} alt="google-play" />
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default LinkApp;
