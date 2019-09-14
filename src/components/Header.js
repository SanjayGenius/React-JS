import React from 'react';
import '../styles/style.css';
import deleteIcon from "../assets/logo.jpg";
class Header extends React.Component {
	redirect(path){
		this.props.history.push(path)
	}
	render() {
		return (
			<div>
				<header className="headerStyle">
					<div className="headerDiv displayFlex">
						<div>
							<img className="headerIcon" src={deleteIcon}/>
						</div>
						<div>
						URBAN 71 Cakes & Cafe
						</div>
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