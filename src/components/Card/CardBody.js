import React from 'react';
import BuildIcon from '@material-ui/icons/Build';

class CardBody extends React.Component {
	// Original unicode char: ⚗
	render() {
		return (
			<div className="card-body">
				<h2 className="card-title">
					{this.props.name}
					{this.props.ongoing ? <span title="ongoing" className="help-cursor no-select">&nbsp;<BuildIcon fontSize="small" /></span> : <></>}
				</h2>
				<p className="card-text">{this.props.caption}</p>
				<small className="text-muted">{this.props.lang}</small>
			</div>
		);
	}
}

export default CardBody;