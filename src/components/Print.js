import React from 'react';
import ReactToPrint from 'react-to-print';
import '../styles/style.css';
class ComponentToPrint extends React.Component {
    render() {
      return (
        <div className="printmaindiv">
            <div className="titleprint">
                U71 Cakes & Cafe
            </div>
            <div className="productmaindiv">
                <div id="products" className="producttable">
                    <div>Product Name</div>
                    <div>Quantity</div>
                    <div>Price</div>
                </div>
            </div>
            <div className="productmaindiv">
                <div className="productcontent">
                    <div>Puffs</div>
                    <div>2</div>
                    <div>345</div>
                </div>
            </div>
            <div className="productmaindiv">
                <div className="productcontent">
                    <div>Puffs</div>
                    <div>2</div>
                    <div>345</div>
                </div>
            </div>
            <div className="productmaindiv">
                <div className="productcontent">
                    <div>Puffs</div>
                    <div>2</div>
                    <div>345</div>
                </div>
            </div>
            <div className="productprintdiv ">
                <div className="productcontent totalposition">
                    <div>Total</div>
                    <div>657657</div>
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