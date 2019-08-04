import React from 'react';
import * as APIService from "../api";
import '../styles/style.css';
class App extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
            showAddPage : 0,
            showProductPage : 1,
		}
	}
	componentWillMount(){

	}
	showAddPage(){
     this.setState({
        showAddPage :1 ,
        showProductPage : 0,
     })
    }
    closeAddPage(){
        this.setState({
            showAddPage :0 ,
        showProductPage : 1,
        })
    }
	render(){
		return (
            <div>
                {this.state.showProductPage==1?
                <div>
                    <div className="buttondiv">
                    <div className="addbutton" onClick={()=>this.showAddPage()}>Add Product</div>
                    </div>
                    <div className="productmaindiv">
                        <div id="products" className="producttable">
                            <div>Product Name</div>
                            <div>Product Price</div>
                            <div>Availability</div>
                        </div>
                    </div>
                    <div className="productmaindiv">
                        <div className="productcontent">
                            <div>Fresh Juices</div>
                            <div>Shakes</div>
                            <div>Schewarma</div>
                        </div>
                    </div>
                    <div className="productmaindiv">
                        <div className="productcontent">
                            <div>Fresh Juices</div>
                            <div>Shakes</div>
                            <div>Schewarma</div>
                        </div>
                    </div>
                    <div className="productmaindiv">
                        <div className="productcontent">
                            <div>Fresh Juices</div>
                            <div>Shakes</div>
                            <div>Schewarma</div>
                        </div>
                    </div>
                    <div className="productmaindiv">
                        <div className="productcontent">
                            <div>Fresh Juices</div>
                            <div>Shakes</div>
                            <div>Schewarma</div>
                        </div>
                    </div>
                    <div className="productmaindiv">
                        <div className="productcontent">
                            <div>Fresh Juices</div>
                            <div>Shakes</div>
                            <div>Schewarma</div>
                        </div>
                    </div>
                </div>
                :''}
                {this.state.showAddPage == 1?
                <div className="productAddDiv">
					<form className="formStyle">
						<div className="productNameDiv">
							<div>Product Name</div>
							<div className="productinput">
								<input type="text"></input>
							</div>
						</div>
						<div className="productNameDiv">
							<div>Rate</div>
							<div className="rateinput">
								<input type="number"></input>
							</div>
						</div>
						<div className="productNameDiv">
							<div className="rateinput">
								<input type="button" className="cursorstyle" value="submit"></input>
								<input type="button" className="cancelstyle cursorstyle" value="cancel" onClick={()=>this.closeAddPage()}></input>
							</div>
						</div>
					</form>
				</div>
                :''}
            </div>
		);
	}
}
export default App;