import React from 'react';
import * as APIService from "../api";
import DatePicker from 'react-date-picker';
import '../styles/style.css';
import viewIcon from "../assets/view.png";
const domain = "http://localhost:4000/";
class App extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
            fromDate: new Date(),
            toDate: new Date(),
            showBillReport : 0,
            viewDetailedReport:0,
            productName: '',
            quantity : 0,
            price : 0,
            detailedReport:[],
            noReport : '',
            productName: '' ,
            listProductDetails : [],
		}
	}
	componentWillMount(){

	}
	handleStartDateChange(date){
        this.setState({
            fromDate : date,
            showBillReport : 0,
            viewDetailedReport : 0,
            detailedReport:[],
		})
    }
    handleEndDateChange(date){
        this.setState({
            toDate : date,
            showBillReport : 0,
            viewDetailedReport : 0,
            detailedReport:[],
		})
    }
    showBillReport(){
            var formattedFromDate=this.getDateFormat(this.state.fromDate);
            var formattedtoDate=this.getDateFormat(this.state.toDate);
        APIService.getAPI(domain+"report?fromDate="+formattedFromDate+"&toDate="+formattedtoDate).then((response)=>{
            if(response.fetchStatus=="success"){
                if(response.result.status=="success"){
                    this.setState({
                        detailedReport : response.result.data,
                    })
                }else{
                    this.setState({
                        noReport:response.result.data,
                    })
                }
            }else{
               // this.showResponse(false, "Error while fetching bill report")
            }
        });
        this.setState({
            showBillReport : 1,
        })
    }
    getDateFormat(date){
        var year=date.getFullYear();
        var month= date.getMonth()+1;
        var day=date.getDate();
        var formatMonth=month>9?month:"0"+month;
        var formatDay=day>9?day:"0"+day;
        var formattedDate=year+"-"+formatMonth+"-"+formatDay;
        return formattedDate;
    }
    showDetailedReport(item){
        this.setState({
            viewDetailedReport : 1,
            showBillReport : 0,
            listProductDetails : item.detailedReport,
        })
    }
    closeDetailedReport(){
        this.setState({
            viewDetailedReport : 0,
            showBillReport : 1,
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
                            maxDate = {new Date()}
                            onChange={(event) => this.handleStartDateChange(event)}
                            value={this.state.fromDate}
                        />
                    </div>
                </div>
                    <div className="toDateDiv">
                        <div>To Date</div>
                         <div className="datepickerdiv">
                         <DatePicker
                             maxDate = {new Date()}
                            onChange={(event) => this.handleEndDateChange(event)}
                            value={this.state.toDate}
                        />
                         </div>
                    </div>
                    <div className="reportSubmit">
                        <input type="button" className="cursorstyle" value="Submit" onClick={()=>this.showBillReport()}></input>
                    </div>
                </div>
                {this.state.showBillReport==1?
                <div>
                    <div className="productmaindiv">
                        <div id="products" className="producttable">
                            <div>Customer Name</div>
                            <div>Purchase Amount</div>
                            {/* <div> Date </div> */}
                            <div>Product Details</div>
                        </div>
                    </div>
                    {this.state.detailedReport.length==0 ?
                    <div className="flextEvenly">
                        <div className="reportMessageStyle"> {this.state.noReport} </div>
                    </div>
                    :
                    this.state.detailedReport.map((item, index) => {
                    return <div className="productmaindiv">
                            <div className="productcontent">
                                <div>{item.customerName}</div>
                                <div>{item.totalBillAmount}</div>
                                {/* <div>{item.date}</div> */}
                                <div>
                                    <img className="imagedisplay cursorstyle" src={viewIcon}  onClick={()=>this.showDetailedReport(item)} />
                                </div>
                             </div>
                        </div>
                    })
                    }
                </div>
                :''}
                {this.state.viewDetailedReport == 1?
                      <div>
                            <div className="backDiv ">
                              <input type="button" value="Back" className="cursorstyle" onClick={()=>this.closeDetailedReport()}></input>
                            </div>
                         <div className="productmaindiv">
                            <div id="products" className="producttable">
                                <div>Product Name</div>
                                <div>Quantity</div>
                                <div>Price</div>
                            </div>
                        </div>
                        {this.state.listProductDetails.map((item, index) => {
                       return <div className="productmaindiv">
                            <div className="productcontent">
                                <div>{item.productName}</div>
                                <div>{item.quantity}</div>
                                <div>{item.price}</div>
                             </div>
                        </div>
                        })}
                  </div>
                 
                :''}
            </div>
		);
	}
}
export default App;