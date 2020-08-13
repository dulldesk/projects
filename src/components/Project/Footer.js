import React from 'react';

const icons = {
	"GitHub" : "https://raw.githubusercontent.com/primer/octicons/e65f8b2876b23a1157d97a0df7598c649f214149/icons/mark-github.svg",
	"Gist" : "https://raw.githubusercontent.com/primer/octicons/e65f8b2876b23a1157d97a0df7598c649f214149/icons/logo-gist.svg",
}

const shortLink = link => link.substring(link.indexOf("//")+2).replace(/\/+$/,'');

class FooterAnchor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {child:''}
	}
	componentDidMount() {
		let icon = this.props.type === "link"
			? <span title={`Go to ${shortLink(this.props.src)}`} className="ignore card-link-icon">{"< />"}</span>
			: <img src={icons[this.props.type]} title={`Go to ${this.props.type}`} alt={this.props.type} draggable="false" className="card-link-icon" />;
		this.setState({child:icon})
	}
	render() {
		return <a href={this.props.src} className="ignore no-select" target="_blank" rel="noopener noreferrer">{this.state.child}</a>;
	}
}

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.props.external.sort((a,b) => a.type.localeCompare(b.type));
	}
	render() {
		return (
			<div className="card-footer">
				{this.props.external.map(obj => 
					<FooterAnchor key={`${this.props.id}-anchor-${obj.type}`} type={obj.type} src={obj.src} />
				)}
			</div>
		);
	}
}

export default Footer;
