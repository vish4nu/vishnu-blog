import React, { Component } from "react"

class PasswordPrompt extends Component {

    constructor (ownProps) {
        super(ownProps)
        this.state = {
            password: null,
            authenticated: false
        }
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
 
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.password === "YOLO") {
            this.setState({
                authenticated: true
            })
            localStorage.setItem("authenticated", true)
            window.location.reload()
        } else {
            window.alert("Wrong Password");
        }
    }

    render() {
        return (
            <div>
                <form
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="password"
                        placeholder={'Enter Password'}
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                     <button type="submit"  >submit
                     </button>
                </form>                
            </div>
        );
    }
}

export default PasswordPrompt       