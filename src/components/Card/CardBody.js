import React from 'react';

class CardBody extends React.Component {
	render() {
		return (
			<div className="card-body">
				<h2 className="card-title">
					{this.props.name}
					{this.props.ongoing ? <span title="ongoing" className="help-cursor no-select">&nbsp;⚗</span> : <></>}
				</h2>
				<p className="card-text">{this.props.caption}</p>
				<small className="text-muted">{this.props.lang}</small>
			</div>
		);
	}
}

export default CardBody;