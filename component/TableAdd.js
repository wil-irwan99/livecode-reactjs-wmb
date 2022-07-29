import { Component } from "react";
import Home from "./HeaderOption";
import 'c:/Users/ASUS/ENIGMA BOOTCAMP/reactjs/react-app/src/App.css';

class TableAdd extends Component{
    constructor(props){
        super(props)
        this.state = {
            id : '',
            status : '',
            idStatus : false,
            statStatus : false,
        }
    }

    Back = () => {
        let page =  '4'
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

    handleChangeStatus = (event) => {
        let input = event.target.value
        if (input.length > 0){
            this.setState({
                status : input,
                statStatus : true,
            })
        } else {
            this.setState({
                statStatus : false,
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.idStatus && this.state.statStatus){
            const newitem = {
                id: this.state.id,
                status : this.state.status,
            }
            this.props.tambahTable(newitem);
            alert('Table baru berhasil ditambah');

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
                                <p className="loginTextStyle">Input New Table</p><br/>
                                <p className="loginTextStyle">ID</p>
                                <input className="inputColumnStyle" type="text" name="ID" id="" onChange={this.handleChangeID}/>

                                <p className="loginTextStyle">Status</p>
                                <input className="inputColumnStyle" type="Status" onChange={this.handleChangeStatus}/>

                                <button className="buttonStyle" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableAdd;