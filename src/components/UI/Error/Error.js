import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import Card from '../Card/Card';

import classes from './Error.module.css';

const Error = (props) => {
	const Backdrop = (props) => {
		return <div className={classes.backdrop} onClick={props.onConfirm} />;
	};

	const ErrorOverlay = (props) => {
		return (
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onConfirm}>Okey</Button>
				</footer>
			</Card>
		);
	};

	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ErrorOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
				document.getElementById('overlay-root')
			)}
			{ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
		</Fragment>
	);
};

export default Error;
