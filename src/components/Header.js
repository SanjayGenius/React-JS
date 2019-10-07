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
					{/* FOR PRODUCTION */}
					{/* <div className={this.props.location.pathname == "/U71" ? "active":''} onClick={() => this.redirect("/U71")}>Show Products</div>
					<div className={this.props.location.pathname == "/U71/billgenerate" ? "active":''} onClick={() => this.redirect("/U71/billgenerate")}>Generate Bill</div>
					<div className={this.props.location.pathname == "/U71/report" ? "active":''} onClick={() => this.redirect("/U71/report")}>Report</div> */}
						{/* FOR DEVELOPMENT */}
					<div className={this.props.location.pathname == "/" ? "active":''} onClick={() => this.redirect("/")}>Show Products</div>
					<div className={this.props.location.pathname == "/billgenerate" ? "active":''} onClick={() => this.redirect("/billgenerate")}>Generate Bill</div>
					<div className={this.props.location.pathname == "/report" ? "active":''} onClick={() => this.redirect("/report")}>Report</div>
					{/* <div className={this.props.location.pathname == "/print" ? "active":''} onClick={() => this.redirect("/print")}></div> */}
				</div>
			</div>
		);
	}
}
export default Header;