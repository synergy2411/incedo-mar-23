import React, { useState } from 'react';

const Hoc = (WrapperComponent) => {

    return class extends React.Component {
        constructor(){
            super()
            this.state = {
                counter : 0
            }
        }

        counterClickHandler = () => this.setState({counter : this.state.counter + 1})

        render(){
            return (
                <div>
                <WrapperComponent companyName="Incedo"
                    increaseCounter={this.counterClickHandler}
                    counter={this.state.counter} />
                </div>
            )
        }
    }
    
}

export default Hoc;




// const [counter, setCounter] = useState(0)

//     const counterClickHandler = () => setCounter(counter + 1);
    
//     return () => {
//         return (
//            
//         );
//     }