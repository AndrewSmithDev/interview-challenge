import React from 'react';

import styles from './App.module.css';

export default class App extends React.Component {
	render(): JSX.Element {
		return (
			<div>
				<div className={styles.test}>Start</div>
			</div>
		);
	}
}
