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
            showProductPage : 1,
            productList : [],
            productName:'',
            productPrice:0,
            productId : 0
		}
	}
	componentWillMount(){
    this.getProductList();
	}
	showAddPage(){
     this.setState({
        showAddPage :1 ,
        showProductPage : 0,
     })
    }
    getProductList(){
        APIService.getAPI(domain).then((response) => {
			if(response.fetchStatus == "success"){
                let result = response.result;
                console.log(result)
                console.log(result.size)
				this.setState({
					productList:result
				})
			}else{
				this.showResponse(false, "Something went wrong!.")
			}
		});
    }
    closeAddPage(){
        this.setState({
            showAddPage :0 ,
            showProductPage : 1,
            productId : 0,
            productName : "",
            productPrice:0,
        })
    }
    addProductDetails(event){
        event.preventDefault();
        if(this.state.productName!='' && this.state.productPrice!=0){
            let requestData = {
                "productName":this.state.productName,
                "productPrice":this.state.productPrice,
                "productId" : this.state.productId,
            }
            let url = domain+"product";
            if(this.state.productId==0){
                APIService.postAPI(url,requestData).then((response) => {
                    if(response.fetchStatus == "success"){
                        if(response.result.status=="success"){
                            this.showResponse(true, response.result.data);
                            this.closeAddPage();
                            this.getProductList();
                            
                        }else{
                            this.showResponse(false, response.result.data)
                        }

                    }else{
                        this.showResponse(false, "Something went wrong!.")
                    }
                });
            }else{
                APIService.putAPI(url,requestData).then((response) => {
                    if(response.fetchStatus == "success"){
                        if(response.result.status=="success"){
                            this.showResponse(true, response.result.data);
                            this.closeAddPage();
                            this.getProductList();
                            
                        }else{
                            this.showResponse(false, response.result.data)
                        }

                    }else{
                        this.showResponse(false, "Something went wrong!.")
                    }
                });
            }
        }else{
            this.showResponse(false, "Please enter the required inputs.")
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
    handleProductNameChange(event){
        let productName = event.target.value;
        this.setState({
            productName : productName,
        })
    }
    handleProductPrice(event){
        let price = event.target.value;
        this.setState({
            productPrice : price,
        })
    }
    editProductDetails(item){
        this.setState({
            productName : item.product_name,
            productPrice : item.product_price,
            productId : item.product_id,
            showAddPage :1 ,
            showProductPage : 0,
        })
    }
    deleteProductDetails(item){
        let requestData = {
            "productId" : this.state.productId,
        }
        let url = domain+"product";
        APIService.deleteAPI(url,requestData).then((response) => {
            if(response.fetchStatus == "success"){
                if(response.result.status=="success"){
                    this.showResponse(true, response.result.data);
                    this.getProductList();
                }else{
                    this.showResponse(false, response.result.data)
                }

            }else{
                this.showResponse(false, "Something went wrong!.")
            }
        });
        this.setState({
            productId : item.product_id,
        })
    }
	render(){
		return (
            <div>
                <span className={this.state.errorFlag == false ?"flexAlignCenterJustifyCenter response failure" : "flexAlignCenterJustifyCenter response success"}>{this.state.responseMessage}</span>
                {this.state.showProductPage==1?
                
                <div>
                    <div className="buttondiv">
                    <div className="addbutton cursorstyle" onClick={()=>this.showAddPage()}>Add Product</div>
                    </div>
                    <div>
                        <div className="productmaindiv">
                            <div id="products" className="producttable">
                                <div>Product Name</div>
                                <div>Product Price</div>
                                {/* <div>Availability</div> */}
                                <div>Edit</div>
                                <div>Delete</div>
                            </div>
                        </div>
                        {this.state.productList.map((item, index) => {
                        return <div className="productmaindiv" key={index}>
                            <div className="productcontent" >
                                <div>{item.product_name}</div>
                                <div>{item.product_price}</div>
                                {/* <div>{item.availability}</div> */}
                                <div className="edit_delete">
                                <img className="icon cursorstyle" src={editIcon} onClick={()=>this.editProductDetails(item)}/>
                                </div>
                                <div className="edit_delete">
                                <img className="icon cursorstyle" src={deleteIcon} onClick={()=>this.deleteProductDetails(item)}/>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
                :''}
                {this.state.showAddPage == 1?
                <div className="productAddDiv">
					<form className="formStyle" onSubmit={(event)=>this.addProductDetails(event)}>
						<div className="productNameDiv">
							<div>
                                <label className="input-label">Product Name<sup>*</sup></label>
                            </div>
							<div className="productinput">
								<input type="text" value={this.state.productName} onChange ={(event)=>this.handleProductNameChange(event)}></input>
							</div>
						</div>
						<div className="productNameDiv">
                        <label className="input-label">Rate<sup>*</sup></label>
							<div className="rateinput">
								<input type="number" value={this.state.productPrice} onChange ={(event)=>this.handleProductPrice(event)}></input>
							</div>
						</div>
						<div className="productNameDiv">
							<div className="rateinput">
								<input type="submit" className="cursorstyle" value="submit"></input>
								<input type="submit" className="cancelstyle cursorstyle" value="cancel" onClick={()=>this.closeAddPage()}></input>
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