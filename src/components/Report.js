import React from 'react';
import * as APIService from "../api";
import DatePicker from 'react-date-picker';
import '../styles/style.css';
import viewIcon from "../assets/view.png";
class App extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
            fromDate: new Date(),
            toDate: new Date(),
		}
	}
	componentWillMount(){

	}
	handleStartDateChange(date){
        this.setState({
			fromDate : date,
		})
    }
    handleEndDateChange(date){
        this.setState({
			toDate : date,
		})
    }
	render(){
		return (
            <div>
                <div>
                    <div className="fromdatediv">
                        <div>From Date</div>
                        <div className="datepickerdiv">
                        <DatePicker
                            minDate = {new Date()}
                            onChange={(event) => this.handleStartDateChange(event)}
                            value={this.state.fromDate}
                        />
                    </div>
                </div>
                    <div className="toDateDiv">
                        <div>To Date</div>
                         <div className="datepickerdiv">
                         <DatePicker
                             minDate = {new Date()}
                            onChange={(event) => this.handleEndDateChange(event)}
                            value={this.state.toDate}
                        />
                         </div>
                    </div>
                    <div className="reportSubmit">
                        <input type="button" className="cursorstyle" value="Submit" onClick={()=>this.showBillReport()}></input>
                    </div>
                </div>
                <div className="productmaindiv">
                    <div id="products" className="producttable">
                        <div>Customer Name</div>
                        <div>Product Details</div>
                        <div>Purchase Amount</div>
                        <div>View Details</div>
                    </div>
                </div>
                <div className="productmaindiv">
                    <div className="productcontent">
                        <div>Sanjay</div>
                        <div>Shakes</div>
                        <div>100</div>
                        <div>
                            <img className="imagedisplay cursorstyle" src={viewIcon}  />
                        </div>
                    </div>
                </div>
                <div className="productmaindiv">
                    <div className="productcontent">
                        <div>Pradeep</div>
                        <div>Shakes</div>
                        <div>100</div>
                        <div>
                            <img className="imagedisplay cursorstyle" src={viewIcon}  />
                        </div>
                    </div>
                </div>
                <div className="productmaindiv">
                    <div className="productcontent">
                        <div>Aswin</div>
                        <div>Shakes</div>
                        <div>100</div>
                        <div>
                            <img className="imagedisplay cursorstyle" src={viewIcon}  />
                        </div>
                    </div>
                </div>
                <div className="productmaindiv">
                    <div className="productcontent">
                        <div>Santhosh</div>
                        <div>Shakes</div>
                        <div>100</div>
                        <div>
                            <img className="imagedisplay cursorstyle" src={viewIcon}  />
                        </div>
                    </div>
                </div>
                <div className="productmaindiv">
                    <div className="productcontent">
                        <div>Jeswin</div>
                        <div>Shakes</div>
                        <div>100</div>
                        <div>
                            <img className="imagedisplay cursorstyle" src={viewIcon}  />
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
export default App;