import React from 'react';
import './Card.scss';
import Body from './CardBody';
import Footer from './CardFooter';

class Card extends React.Component {
  render() {
    let hasFooter = Boolean(this.props.external);

    return (
      <div className="card">
        <Body {...this.props} />
        {hasFooter ? <Footer {...this.props} key={`${this.props.id}-footer`} /> : <></>}
      </div>
    );
  }
}

export default Card;
