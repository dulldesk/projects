import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';
import BuildIcon from '@material-ui/icons/Build';

class CardBody extends React.Component {
	// Original unicode char: ⚗
	render() {
		return (
			<BootstrapCard.Body>
				<BootstrapCard.Title as="h2">
					{this.props.name}
					{this.props.ongoing ? <span title="ongoing" className="ongoing no-select">&nbsp;<BuildIcon fontSize="small" /></span> : <></>}
				</BootstrapCard.Title>
				<BootstrapCard.Text>
					{this.props.caption}
				</BootstrapCard.Text>
				<small className="text-muted">{this.props.lang}</small>
			</BootstrapCard.Body>
		);
	}
}

export default CardBody;