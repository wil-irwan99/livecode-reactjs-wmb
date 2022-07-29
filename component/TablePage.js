import { Component } from "react";
import Home from "./HeaderOption";
import 'c:/Users/ASUS/ENIGMA BOOTCAMP/reactjs/react-app/src/App.css';

class TablePage extends Component{
    constructor(props){
        super(props)
    }

    Add = () => {
        let page =  '4.1'
        this.props.onNavigate(page);
    }

    Delete = () => {
        let page =  '4.2'
        this.props.onNavigate(page);
    }

    render(){
        let table = this.props.dataTable
        return(
            <div className="htmlStyle">
                <div className="bodyStyle">
                    <Home width="100%" onNavigate={this.props.onNavigate}/>
                    <div className="menuContainer">
                        <div>
                            <button className="buttonStyle" onClick={this.Add}>Add Table</button>
                            <button className="buttonStyle" onClick={this.Delete}>Delete Table</button>
                        </div>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Status</th>
                            </tr>
                            {table.map(t => <tr>
                                <td>{t.id}</td>
                                <td>{t.status}</td>
                            </tr>)}
                        </table>
                    </div>
                </div>
            </div>
        )
    }   
}

export default TablePage;