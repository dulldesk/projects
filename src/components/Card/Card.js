import React from 'react';
import './Card.scss';
import Footer from './CardFooter';

class Card extends React.Component {
  render() {
    let hasFooter = Boolean(this.props.external);

    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            {this.props.name}
            {this.props.ongoing ? <span title="ongoing" className="help-cursor no-select">&nbsp;⚗</span> : <></>}
          </h2>
          <p className="card-text">{this.props.caption}</p>
          <small className="text-muted">{this.props.lang}</small>
        </div>
        {hasFooter ? <Footer {...this.props} key={`${this.props.id}-footer`} /> : <></>}
      </div>
    );
  }
}

export default Card;
