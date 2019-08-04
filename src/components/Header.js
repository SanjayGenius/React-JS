import React from 'react';
import '../styles/style.css';
class Header extends React.Component {
	redirect(path){
		this.props.history.push(path)
	}
	render() {
		return (
			<div>
				<header className="headerStyle">
					<div className="headerDiv">
						Pradeep Billing Application
					</div>
				</header>
				<div className="topnav">
					<div className={this.props.location.pathname == "/" ? "active":''} onClick={() => this.redirect("/")}>Show Products</div>
					<div className={this.props.location.pathname == "/billgenerate" ? "active":''} onClick={() => this.redirect("/billgenerate")}>Generate Bill</div>
					<div className={this.props.location.pathname == "/report" ? "active":''} onClick={() => this.redirect("/report")}>Report</div>
				</div>
			</div>
		);
	}
}
export default Header;