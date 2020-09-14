import React from 'react';
import Card from '../Card/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import work from '../../data/project-data.json';

class ProjectListing extends React.Component {
	render() {
		return (
			<CardColumns id="node-cntr">
				{ Object.entries(work).map(data => {
					data[1].id = data[0];
					return <Card {...data[1]} key={data[1].id} />
				})}
            </CardColumns>
		);
	}
}

export default ProjectListing;
