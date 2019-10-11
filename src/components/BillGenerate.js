import React from 'react';
import * as APIService from "../api";
import '../styles/style.css';
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
const domain = "http://localhost:4000/";
class App extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
            showAddPage : 0,
            productList : [],
            totalProductList:[],
            selectedProductId:'',
            productPrice:0,
            billReport:'',
            quantity:0,
            totalBillAmount:0,
            deleteIndex:0,
            showEditPage : 0,
            productName:'',
            customerName: '',
        }
        this.productselect = React.createRef();
	}
	componentWillMount(){
        this.getAllProductList();
    }
    getAllProductList(){
        APIService.getAPI(domain).then((response) => {
			if(response.fetchStatus == "success"){
                let result = response.result;
                console.log(result)
                console.log(result.size)
				this.setState({
					totalProductList:result
				})
			}else{
				this.showResponse(false, "Something went wrong!.")
			}
		});
    }
	showAddPage(){
     this.setState({
        showAddPage :1 ,
        showProductPage : 0,
     })
    }
    productselect(){
       
    }
    handleProductChange(){
        console.log(this.productselect.current.value)
        this.setState({
            selectedProductId :  this.productselect.current.value,
        })
    }
    closeAddPage(){
        this.setState({
            showAddPage :0 ,
            showProductPage : 1,
        })
    }
    addBillDetails(event){
        event.preventDefault();
        if(this.state.customerName!='' && this.state.selectedProductId!=''&& this.state.quantity!=0){
            var billDetails=this.state.productList;
            APIService.getAPI(domain+"product?productId="+this.state.selectedProductId+"&quantity="+this.state.quantity).then((response) => {
                if(response.fetchStatus == "success"){
                    let price = response.result.productPrice;
                    let billAmount=this.state.totalBillAmount +price
                    billDetails.push( response.result);
                    this.setState({
                        productList:billDetails,
                        totalBillAmount : billAmount,
                    })
                    this.clearForm();
                }else{
                    this.showResponse(false, "Something went wrong!.")
                }
            });
        }else{
            this.showResponse(false, "Please enter the required inputs")
        }
    }
    showResponse(errorFlag, message){
		window.scrollTo(0, 0);
		this.setState({
			responseMessage : message,
			errorFlag : errorFlag,
		});
		clearTimeout(this.timer);
		this.timer = setTimeout(function() {
			this.hideResponse()
		}
		.bind(this), 5000);
	}
	hideResponse(){
		this.setState({
			responseMessage : '',
			formErrorMessage : '',
			errorFlag : false,
		})
		clearTimeout(this.timer);
	}
    modifyBillDetails(event){
        console.log("enteted")
        event.preventDefault();
        var item={
            productId : this.state.productId,
            productPrice :  this.state.productPrice,
        }
        this.deleteBillDetails(item);
        this.addBillDetails(event)
        this.closeEditPage();

    }
    clearForm(){
        this.setState({
            quantity : 0,
            selectedProductId : '',
        })
    }
    handleQuantityChange(event){
        let quantity = event.target.value;
        this.setState({
            quantity : quantity,
        })
    }
    deleteBillDetails(item){
        var jsonarray=this.state.productList;
        var index=0;
        var deleteFlag=false;
        var billAmount=0;
        var filteredObj = jsonarray.find(function(items, i){
            if(item.productId==items.productId){
                index=i;
                billAmount=item.productPrice;
                deleteFlag=true;
            }
          });
          billAmount=this.state.totalBillAmount - billAmount;
          if(deleteFlag){
            jsonarray.splice(index,1);
            this.setState({
              totalBillAmount : billAmount,
            })
          }
    }
    editBillDetails(item){
        this.setState({
            showEditPage:1,
            productName : item.productName,
            quantity: item.quantity,
            productPrice:item.productPrice,
            productId : item.productId,
            selectedProductId : item.productId,
        })
    }
    closeEditPage(){
        this.setState({
            quantity : 0,
            productName : '',
            showEditPage : 0,
            productPrice : 0,
            productId : 0,
        })
    }
    handleQuantity(event){
        var quantity=event.target.value;
        this.setState({
            quantity:quantity,
        })
    }

    handleProductNameChange(event){
        var productName=event.target.value;
        this.setState({
            productName:productName,
        })
    }
    handleCustomerNameChange(evnt){
        var customerName=event.target.value;
        this.setState({
            customerName : customerName,
        })
    }
    printBillDetails(event){
        
        event.preventDefault();
        var data={
            customerName : this.state.customerName,
            totalBillAmount : this.state.totalBillAmount,
            purchasedProductList : this.state.productList,
        }
        APIService.postAPI(domain+"print",data).then((response) => {
			if(response.fetchStatus == "success"){
                if(response.result.status=="success"){
                    this.props.history.push({
                            pathname: '/print',
                            state: { 
                                customerName: this.state.customerName,
                                totalBillAmount: this.state.totalBillAmount,
                                productList: this.state.productList,
                            }
                        });
                    this.showResponse(true, response.result.data)
                }else{
                    this.showResponse(false, response.result.data)
                }
                this.clearPrintForm();
			}else{
				this.showResponse(false, "Something went wrong!.")
			}
		});
    }
    clearPrintForm(){
        this.setState({
            customerName : '',
            totalBillAmount : 0,
            productList : [],
        })
    }
	render(){
		return (
            <div className="billMainDiv">
                <span className={this.state.errorFlag == false ?"flexAlignCenterJustifyCenter response failure" : "flexAlignCenterJustifyCenter response success"}>{this.state.responseMessage}</span>
                {this.state.showEditPage == 0?
                <div>
                    <form onSubmit={(event)=>this.addBillDetails(event)}>
                        <div className="flexDirectionColumn">
                        <div className="flexAlignCenterJustifyCenter selectProduct">
                                <div>
                                <label className="input-label">Customer Name<sup>*</sup></label>
                                </div>
                                <div className="customerDiv">
                                <input type="text" value={this.state.customerName}  onChange={(event) => this.handleCustomerNameChange(event)}></input>
                                </div>
                            </div>
                            <div className="flexAlignCenterJustifyCenter selectProduct">
                                <div>
                                <label className="input-label">Select Product<sup>*</sup></label>
                                </div>
                                <div className="productinput">
                                <select className="SelectBox" value={this.state.selectedProductId} ref={this.productselect} onChange={() => this.handleProductChange()}>
                                <option value="">Select Product</option>
                                {
                                    this.state.totalProductList.map((item,index) => {
                                        return <option key={index} value={item.product_id}>{item.product_name}</option>
                                    })
                                }
                                </select>
                                </div>
                            </div>
                            <div className="flexAlignCenterJustifyCenter selectProduct">
                                <div>
                                <label className="input-label">Quantity<sup>*</sup></label>
                                </div>
                                <div className="quantity">
                                <input type="number" value={this.state.quantity}  onChange={(event) => this.handleQuantityChange(event)}></input>
                                </div>
                            </div>
                            <div className="flexAlignCenterJustifyCenter">
                                {/* <div>
                                    <input className="cursorstyle" type="button"  value="ADD"></input>
                                </div> */}
                                <div className="productinput">
                                    <input type="submit" className="cursorstyle" value="SUBMIT"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                    {this.state.productList.length>0?
                    <form onSubmit={(event)=>this.printBillDetails(event)}>
                        <div>
                            <div className="productmaindiv">
                                <div id="products" className="producttable">
                                    <div>Product Name</div>
                                    <div>Quantity</div>
                                    <div>Price</div>
                                    <div>Edit</div>
                                    <div>Remove</div>
                                </div>
                            </div>
                            <div>
                            {this.state.productList.map((item, index) => {
                        return <div className="productmaindiv">
                                <div className="productcontent">
                                    <div>{item.productName}</div>
                                    <div>{item.quantity}</div>
                                    <div>{item.productPrice}</div>
                                    <div className="edit_delete">
                                    <img className="icon cursorstyle" src={editIcon} onClick={()=>this.editBillDetails(item)}/>
                                    </div>
                                    <div className="edit_delete">
                                    <img className="icon cursorstyle" src={deleteIcon} onClick={()=>this.deleteBillDetails(item)}/>
                                    </div>
                                </div>
                            </div>
                            })}
                            <div className="productmaindiv ">
                                <div className="productcontent billtotalColor">
                                    <div>Total</div>
                                    <div>{this.state.totalBillAmount}</div>
                                    <input type="submit" className="cursorstyle" value="PRINT" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </form>
                    :''}
                </div>
                :''}
                {this.state.showEditPage == 1?
                <div className="productAddDiv">
                     <form className="formStyle" onSubmit={(event)=>this.modifyBillDetails(event)}>
                        <div className="productNameDiv">
                            <div>Product Name</div>
                            <div className="productinput">
                                <input type="text"readOnly value={this.state.productName} onChange ={(event)=>this.handleProductNameChange(event)}></input>
                            </div>
                        </div>
                        <div className="productNameDiv">
                            <div>Quantity</div>
                            <div className="quantityInput">
                                <input type="number" value={this.state.quantity} onChange ={(event)=>this.handleQuantity(event)}></input>
                            </div>
                        </div>
                        <div className="productNameDiv">
                            <div className="rateinput">
                                <input type="submit" className="cursorstyle" value="submit"></input>
                                <input type="button" className="cancelstyle cursorstyle" value="cancel" onClick={()=>this.closeEditPage()}></input>
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