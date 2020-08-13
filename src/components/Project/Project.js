import React from 'react';
import './Project.scss';
import Footer from './Footer';

class Project extends React.Component {
  render() {
    let hasFooter = Boolean(this.props.external);

    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{this.props.name + (this.props.ongoing ? ' ⚗' : '')}</h2>
          <p className="card-text">{this.props.caption}</p>
          <small className="text-muted">{this.props.lang}</small>
        </div>
        {hasFooter ? <Footer {...this.props} key={`${this.props.id}-footer`} /> : <></>}
      </div>
    );
  }
}

export default Project;
