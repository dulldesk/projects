import React from 'react';
import Body from './CardBody';
import Footer from './CardFooter';
import BootstrapCard from 'react-bootstrap/Card';
import './Card.scss';


class Card extends React.Component {
  render() {
    let hasFooter = Boolean(this.props.external);

		return (
				<BootstrapCard onClick={this.toggleModal}>
					<Body {...this.props} />
					{hasFooter ? <Footer {...this.props} key={`${this.props.id}-footer`} /> : <></>}
				</BootstrapCard>
		);
	}
}

export default Card;
