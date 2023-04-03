import React from 'react';

class Comment extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        console.log("CONSTRUCTOR")
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT")
    }

    shouldComponentUpdate() {
        const rnd = Math.round(Math.random() * 10)
        console.log("SHOULD COMPONENT UPDATE ", rnd);
        return rnd > 5;
    }

    componentDidUpdate() {
        console.log("COMPONENT DID UPDATE");
    }

    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT");
    }

    countIncreaseHandler = () => this.setState({ count: this.state.count + 1 })

    render() {
        console.log("RENDER")
        return (
            <div>
                <h2>The Class based component loaded</h2>
                <button className='btn btn-primary'
                    onClick={this.countIncreaseHandler}>Count : {this.state.count}</button>
            </div>
        )
    }

}


// function Comment() {
//     return (
//         <div>
//             <h2>The Class based component loaded</h2>
//         </div>
//     )
// }
export default Comment;