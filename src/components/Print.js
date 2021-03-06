import React from 'react';
import ReactToPrint from 'react-to-print';
import '../styles/style.css';
import '../styles/print.css';
import watsappIcon from "../assets/watsapp.png";
class ComponentToPrint extends React.Component {
	constructor(props,context){
		
		super(props,context);
		this.state = {
			purchaseDate:new Date(),
			customerName: this.props.history.location.state.customerName,
			totalBillAmount:this.props.history.location.state.totalBillAmount,
			productList:this.props.history.location.state.productList,
			count:1,
        }
        this.productselect = React.createRef();
	}
	componentWillMount(){
		var convertedDate=this.getDateFormat(this.state.purchaseDate)
		this.setState({
			purchaseDate:convertedDate,
		})
	}
	componentDidMount(){
		this.props.onLoadCallback();
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
    render() {
      return (
        <div className="printmaindiv">
			<div className="invoice-title">
				U71 Cakes & Cafe
			</div>
			<div className="invoice-details">
				<div className="invoice-details-1">
					<div className="invoice-details-1-inner">Customer Name : {this.state.customerName}</div> 
					<div className="invoice-details-1-inner">Purchase Date : {this.state.purchaseDate}</div>
				</div>
				<div className="invoice-details-2">
					   <div className="invoice-details-2-inner productmaindiv">
						   <div className="watsappimagediv">
					   <img className="watsppimage" src={watsappIcon}/>  
					   </div>
					   <div className="numberStyle">
					   	9840886833
					   </div>
					   </div>
				</div>
			</div>
			<div className="invoice-content">
				  <div className="invoice-table-header displayflexspacearound">
					  <div className="invoice-table-header-title sno">No</div>
					  <div className="invoice-table-header-title item">Item</div>
					  <div className="invoice-table-header-title quantity">Quantity</div>
					  <div className="invoice-table-header-title price">Price</div>
				  </div>
				  {this.state.productList.length>0?
				  this.state.productList.map((item, index) => {
				  return <div className="invoice-table-data displayflexspacearound">
					  <div className="invoice-table-data-content sno">{index+1}</div>
					  <div className="invoice-table-data-content item">{item.productName}</div>
					  <div className="invoice-table-data-content quantity">{item.quantity}</div>
					  <div className="invoice-table-data-content price">{item.productPrice}</div>
				  </div>
				  })
				  :''
				  }
			</div>
			<div className="invoice-footer">
				<div className="invoice-footer-1">

				</div>
				<div className="invoice-footer-2">
					  <div className="invoice-footer-2-inner">
						  <div className="invoice-footer-details-1">Total Amount : </div>
						  <div className="invoice-footer-details-2">{this.state.totalBillAmount}</div>
					  </div>
				</div>
			</div>
        </div>
      );
    }
  }
  
class App extends React.Component {
	constructor(props,context){
		super(props,context);
	}
	onLoadCallback(){
		console.log("called")
		setTimeout(() => {
			document.getElementById("printbutton").click();			
		}, 0);
	}
	componentWillMount(){
		if (!this.props.location.state) {
			this.props.history.push("billgenerate")
		}
	}
    render() {
      return (
        <div className="productmaindiv">
          <ComponentToPrint onLoadCallback={this.onLoadCallback} {...this.props} ref={el => (this.componentRef = el)} />

          <ReactToPrint
            trigger={() => <a id="printbutton" href="#">Print this out!</a>}
			content={() => this.componentRef}
			onAfterPrint ={() => this.props.history.push("billgenerate")}
          />
        </div>
      );
    }
  }
  export default App;