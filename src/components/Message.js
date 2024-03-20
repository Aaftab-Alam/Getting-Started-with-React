import React , {Component} from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeMessgae(){
        console.log("Clicked")
        this.setState({
            message : "Thank you for visiting"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessgae()}> Subscribe</button>
            </div>
        )
    }
}

export default Message