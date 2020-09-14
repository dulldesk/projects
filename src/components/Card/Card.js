import React from 'react';
import Body from './CardBody';
import Footer from './CardFooter';
import Modal from '../Modal/Modal';
import BootstrapCard from 'react-bootstrap/Card';
import './Card.scss';

import info from '../../data/project-info.json';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
		this.toggleModal = this.toggleModal.bind(this);
	}
	toggleModal() {
		this.setState((prevState) => {
			return {showModal: !prevState.showModal}
		});
	}
	render() {
		let hasFooter = Boolean(this.props.external);

		return (
			<>
				<BootstrapCard onClick={this.toggleModal}>
					<Body {...this.props} />
					{hasFooter ? <Footer {...this.props} key={`${this.props.id}-footer`} /> : <></>}
				</BootstrapCard>
				{info.hasOwnProperty(this.props.id) ? <Modal name={this.props.name} show={this.state.showModal} info={info[this.props.id]} /> : <></>}
			</>
		);
	}
}

export default Card;
