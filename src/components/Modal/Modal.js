import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import BootstrapModal from 'react-bootstrap/Modal';
import './Modal.scss';

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		this.handleClose = this.handleClose.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.show !== this.props.show) {
			this.setState({show: this.props.show});
		}
	}
	addSpecialClass() {
		Array.prototype.filter.call(document.querySelectorAll('.modal-body p'), elm => Array.prototype.filter.call(elm.children, chd => chd.nodeName === "IMG").length).forEach(p => p.classList.add('p-has-img'));
	}
	handleClose() {
		this.setState({show: false});
	}
	render() {
		return (
			<BootstrapModal show={this.state.show} onHide={this.handleClose} onShow={this.addSpecialClass} scrollable centered>
			<BootstrapModal.Header closeButton>
				<BootstrapModal.Title>{this.props.name}</BootstrapModal.Title>
			</BootstrapModal.Header>
			<BootstrapModal.Body>
				<ReactMarkdown source={this.props.info} escapeHtml={true} />
			</BootstrapModal.Body>
			</BootstrapModal>
		);
	}
}

export default Modal;
