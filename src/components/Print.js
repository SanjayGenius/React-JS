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
		console.log(this.state.productList.length);
		var convertedDate=this.getDateFormat(this.state.purchaseDate)
		this.setState({
			purchaseDate:convertedDate,
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
					 
					{/* <div className="invoice-details-1-inner">Issue Date : 10/12/1997</div>
					<div className="invoice-details-1-inner">Issue Date : 10/12/1997</div>
					<div className="invoice-details-1-inner">Issue Date : 10/12/1997</div> */}
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
					  {/*<div className="invoice-details-2-inner">Issue Date : 10/12/1997</div> */}
					  {/* <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div> */}
				</div>
			</div>
			<div className="invoice-content">
				  <div className="invoice-table-header displayflexspacearound">
					  <div className="invoice-table-header-title sno">No</div>
					  <div className="invoice-table-header-title item">Item</div>
					  <div className="invoice-table-header-title quantity">Quantity</div>
					  <div className="invoice-table-header-title price">Price</div>
					  {/* <div className="invoice-table-header-title discount">Discount</div>
					  <div className="invoice-table-header-title tax">Tax</div>
					  <div className="invoice-table-header-title line-total">lineTotal</div> */}
				  </div>
				  {this.state.productList.length>0?
				  this.state.productList.map((item, index) => {
				  return <div className="invoice-table-data displayflexspacearound">
					  <div className="invoice-table-data-content sno">1</div>
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
    render() {
      return (
        <div className="productmaindiv">
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint {...this.props} ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  export default App;