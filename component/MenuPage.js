import { Component } from "react";
import Home from "./HeaderOption";
import 'c:/Users/ASUS/ENIGMA BOOTCAMP/reactjs/react-app/src/App.css';

class MenuPage extends Component{
    constructor(props){
        super(props)
    }

    Add = () => {
        let page =  '3.1'
        this.props.onNavigate(page);
    }

    Delete = () => {
        let page =  '3.2'
        this.props.onNavigate(page);
    }

    render(){
        let menu = this.props.dataMenu
        return(
            <div className="htmlStyle">
                <div className="bodyStyle">
                    <Home width="100%" onNavigate={this.props.onNavigate}/>
                    <div className="menuContainer">
                        <div>
                            <button className="buttonStyle" onClick={this.Add}>Add Menu</button>
                            <button className="buttonStyle" onClick={this.Delete}>Delete Menu</button>
                        </div>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Menu</th>
                                <th>Price</th>
                            </tr>
                            {menu.map(m => <tr>
                                <td>{m.id}</td>
                                <td>{m.nama}</td>
                                <td>{m.harga}</td>
                            </tr>)}
                        </table>
                    </div>
                </div>
            </div>
        )
    }   
}

export default MenuPage;