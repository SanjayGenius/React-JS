import React from 'react';
import ReactToPrint from 'react-to-print';
import '../styles/style.css';
import '../styles/print.css';
class ComponentToPrint extends React.Component {
    render() {
      return (
        <div className="printmaindiv">
			<div className="invoice-title">
				Invoice
			</div>
			<div className="invoice-details">
				<div className="invoice-details-1">
					<div className="invoice-details-1-inner">Issue Date : 10/12/1997</div>
					<div className="invoice-details-1-inner">Issue Date : 10/12/1997</div>
					<div className="invoice-details-1-inner">Issue Date : 10/12/1997</div>
					<div className="invoice-details-1-inner">Issue Date : 10/12/1997</div>
					<div className="invoice-details-1-inner">Issue Date : 10/12/1997</div>
				</div>
				<div className="invoice-details-2">
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
					  <div className="invoice-details-2-inner">Issue Date : 10/12/1997</div>
				</div>
			</div>
			<div className="invoice-content">
				  <div className="invoice-table-header">
					  <div className="invoice-table-header-title sno">-</div>
					  <div className="invoice-table-header-title item">Item</div>
					  <div className="invoice-table-header-title quantity">Quantity</div>
					  <div className="invoice-table-header-title price">Price</div>
					  <div className="invoice-table-header-title discount">Discount</div>
					  <div className="invoice-table-header-title tax">Tax</div>
					  <div className="invoice-table-header-title line-total">lineTotal</div>
				  </div>
				  <div className="invoice-table-data">
					  <div className="invoice-table-data-content sno">1</div>
					  <div className="invoice-table-data-content item">Item</div>
					  <div className="invoice-table-data-content quantity">Quantity</div>
					  <div className="invoice-table-data-content price">Price</div>
					  <div className="invoice-table-data-content discount">Discount</div>
					  <div className="invoice-table-data-content tax">Tax</div>
					  <div className="invoice-table-data-content line-total">lineTotal</div>
				  </div>
				  <div className="invoice-table-data">
					  <div className="invoice-table-data-content sno">2</div>
					  <div className="invoice-table-data-content item">Item</div>
					  <div className="invoice-table-data-content quantity">Quantity</div>
					  <div className="invoice-table-data-content price">Price</div>
					  <div className="invoice-table-data-content discount">Discount</div>
					  <div className="invoice-table-data-content tax">Tax</div>
					  <div className="invoice-table-data-content line-total">lineTotal</div>
				  </div>
				  <div className="invoice-table-data">
					  <div className="invoice-table-data-content sno">2</div>
					  <div className="invoice-table-data-content item">Item</div>
					  <div className="invoice-table-data-content quantity">Quantity</div>
					  <div className="invoice-table-data-content price">Price</div>
					  <div className="invoice-table-data-content discount">Discount</div>
					  <div className="invoice-table-data-content tax">Tax</div>
					  <div className="invoice-table-data-content line-total">lineTotal</div>
				  </div>
			</div>
			<div className="invoice-footer">
				<div className="invoice-footer-1">

				</div>
				<div className="invoice-footer-2">
					  <div className="invoice-footer-2-inner">
						  <div className="invoice-footer-details-1">Issue Date : </div>
						  <div className="invoice-footer-details-2">10/12/1997</div>
					  </div>
					  <div className="invoice-footer-2-inner">
						  <div className="invoice-footer-details-1">Issue Date : </div>
						  <div className="invoice-footer-details-2">10/12/1997</div>
					  </div>
					  <div className="invoice-footer-2-inner">
						  <div className="invoice-footer-details-1">Issue Date : </div>
						  <div className="invoice-footer-details-2">10/12/1997</div>
					  </div>
					  <div className="invoice-footer-2-inner">
						  <div className="invoice-footer-details-1">Issue Date : </div>
						  <div className="invoice-footer-details-2">10/12/1997</div>
					  </div>
				</div>
			</div>
        </div>
      );
    }
  }
  
class App extends React.Component {
    render() {
      return (
        <div className="productmaindiv">
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  export default App;