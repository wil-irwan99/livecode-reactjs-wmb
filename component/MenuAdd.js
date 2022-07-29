import { Component } from "react";
import Home from "./HeaderOption";
import 'c:/Users/ASUS/ENIGMA BOOTCAMP/reactjs/react-app/src/App.css';

class MenuAdd extends Component{
    constructor(props){
        super(props)
        this.state = {
            id : '',
            menu : '',
            price : '',
            idStatus : false,
            menuStatus : false,
            priceStatus : false,
        }
    }

    Back = () => {
        let page =  '3'
        this.props.onNavigate(page);
    }

    handleChangeID = (event) => {
        let input = event.target.value
        if (input.length > 0){
            this.setState({
                id : input,
                idStatus : true,
            })
        } else {
            this.setState({
                idStatus : false,
            })
        }
    }

    handleChangeMenu = (event) => {
        let input = event.target.value
        if (input.length > 0){
            this.setState({
                menu : input,
                menuStatus : true,
            })
        } else {
            this.setState({
                menuStatus : false,
            })
        }
    }

    handleChangePrice = (event) => {
        let input = event.target.value
        if (input.length > 0){
            this.setState({
                price : input,
                priceStatus : true,
            })
        } else {
            this.setState({
                priceStatus : false,
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.idStatus && this.state.menuStatus && this.state.priceStatus){
            const newitem = {
                id: this.state.id,
                nama : this.state.menu,
                harga : this.state.price,
            }
            this.props.tambahMenu(newitem);
            alert('Menu baru berhasil ditambah');

        } else {
            alert('Tidak satu pun data boleh kosong');
        }
    }


    render(){
        return(
            <div className="htmlStyle">
                <div className="bodyStyle">
                    <Home width="100%" onNavigate={this.props.onNavigate}/>
                    <div className="menuContainer">
                        <button className="buttonStyle" onClick={this.Back}>Back</button>

                        <form onSubmit={this.handleSubmit}>
                                <p className="loginTextStyle">Input New Menu</p><br/>
                                <p className="loginTextStyle">ID</p>
                                <input className="inputColumnStyle" type="text" name="ID" id="" onChange={this.handleChangeID}/>

                                <p className="loginTextStyle">Menu</p>
                                <input className="inputColumnStyle" type="Menu" onChange={this.handleChangeMenu}/>

                                <p className="loginTextStyle">Price</p>
                                <input className="inputColumnStyle" type="Price" onChange={this.handleChangePrice}/>

                                <button className="buttonStyle" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuAdd;