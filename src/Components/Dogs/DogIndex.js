import React, {Component} from 'react'
import Dogs from './Dogs'



export default class Dogindex extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        console.log('Component Mounted');
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => (
                this.setState({
                    img: data.message
                })
            ))
            .then(console.log(this.state.img))
    }


    render(){
        return(
            <div>
                <h1>Random Dog Photo</h1>
                <img src={this.state.img}></img>
                <button onClick={e => this.componentDidMount(e)}>Refresh</button>
            </div>
        )
    }

}
