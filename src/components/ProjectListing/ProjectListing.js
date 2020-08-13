import React from 'react';
// import logo from './logo.svg';
// import './Project.scss';
import Project from '../Project/Project';

class ProjectListing extends React.Component {
  constructor() {
    super();
    this.state = {work:{}};
  }
  async componentDidMount() {
    let listing = await fetch("https://dulldesk.github.io/js/projects-list.json").then(resp => resp.json());
    this.setState({work: listing});
  }
  render() {
    return (
      <div className="card-columns" id="node-cntr">
        { Object.entries(this.state.work).map(data => {
          data[1].id = data[0];
          return <Project {...data[1]} key={data[1].id} />
        })}
      </div>
    );
  }
}

export default ProjectListing;
