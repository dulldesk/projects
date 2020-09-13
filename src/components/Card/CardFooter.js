import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import SvgIcon from '@material-ui/core/SvgIcon'; 
import BootstrapCard from 'react-bootstrap/Card';

const shortLink = link => link.substring(link.indexOf("//")+2).replace(/\/+$/,'');

function GistIcon(props) {
	// alternate:
	// <path fillRule="evenodd" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0120.25 22H3.75A1.75 1.75 0 012 20.25V3.75zm1.75-.25a.25.25 0 00-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H3.75z"></path><path d="M10.3 8.24a.75.75 0 01-.04 1.06L7.352 12l2.908 2.7a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 011.06.04zm3.44 1.06a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.908-2.7-2.908-2.7z"></path>
	return (
		<SvgIcon {...props}>
			<path fillRule="evenodd" d="M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"/>
		</SvgIcon>
	);
}

class FooterIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {child:''};
	}
	componentDidMount() {
		let icon;
		switch(this.props.type) {
			case "GitHub":
				icon = <GitHubIcon fontSize="small" />;
				break;
			case "Gist":
				icon = <GistIcon />;
				break;
			case "link":
			default:
				icon = <LinkIcon />;
				break;
		}
		this.setState({child:icon});
	}
	render() {
		return <a href={this.props.src} className="ignore no-select" target="_blank" rel="noopener noreferrer">
			<span title={`Go to ${shortLink(this.props.src)}`} className="ignore card-link-icon">{this.state.child}</span>
		</a>;
	}
}

class CardFooter extends React.Component {
	constructor(props) {
		super(props);
		this.props.external.sort((a,b) => a.type.localeCompare(b.type));
	}
	render() {
		return (
			<BootstrapCard.Footer>
				{this.props.external.map(obj => 
					<FooterIcon key={`${this.props.id}-anchor-${obj.type}`} type={obj.type} src={obj.src} />
				)}
			</BootstrapCard.Footer>
		);
	}
}

export default CardFooter;
