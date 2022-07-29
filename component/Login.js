import { Component } from "react";
import 'c:/Users/ASUS/ENIGMA BOOTCAMP/reactjs/react-app/src/App.css';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            emailPesanErr : '',
            passPesanErr : '',
            emailValid : false,
            passValid : false,
        }

    }

    handleChangeEmail = (event) => {
        let input = event.target.value
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input) === true){
            this.setState({
                email : input,
                emailValid : true,
                emailPesanErr : '',
            })
        } else {
            this.setState({
                emailValid : false,
                emailPesanErr : 'Invalid email format',
            })
        }
    }

    handleChangePassword = (event) => {
        let input = event.target.value
        if (input.length >= 6){
            this.setState({
                password : input,
                passValid : true,
                passPesanErr : '',
            })
        } else {
            this.setState({
                passValid : false,
                passPesanErr : '6 min length character',
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.emailValid && this.state.passValid){
            if (this.state.email === 'admin@example.com' && this.state.password === '12345678'){
                let page =  '2'
                this.props.onNavigate(page);
            } else {
                alert('login gagal, email dan password tidak cocok');    
            }
        } else {
            alert('salah email atau password');
        }
    }

    render(){
        return(
            <div className="htmlStyle">
                <div className="bodyStyle">
                    <div className="containerMain">
                        <div className="bannerStyle">
                            <h1 className="judulStyle">Warung Makan Bahari</h1>
                            <p className="subJudulStyle">Cabang Ragunan</p>
                        </div>
                        <div className="loginStyle">
                            <form onSubmit={this.handleSubmit}>
                                <p className="loginTextStyle">Username</p>
                                <input className="inputColumnStyle" type="text" name="Username" id="" onChange={this.handleChangeEmail}/>
                                <div className="pesanErrStyle">{this.state.emailPesanErr}</div> <br/>

                                <p className="loginTextStyle">Password</p>
                                <input className="inputColumnStyle" type="password" onChange={this.handleChangePassword}/>
                                <div className="pesanErrStyle">{this.state.passPesanErr}</div> <br/>

                                <button className="buttonStyle" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default Login;