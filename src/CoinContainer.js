import React, { Component } from 'react'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'head', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" }, 
            { side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }; 

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0, 
            numHead: 0, 
            numTails: 0
        } 
        this.handleClick = this.handleClick.bind(this); 
    }

    flipCoin() {
    }
    
    handleClick(event) {
        this.flipCoin(); 

    }

    render() {
        return(
            <div className="CoinContainer">
                <h2>Let's Flip A Coin!!</h2>
                <button onClick={this.handleClick}>Flip Me! </button>
                <p>
                    Out of {this.state.numFlips} flips, there has been {this.state.numHead}{" "} 
                    heads and {this.state.numTails} tails.
                </p>
            </div>
        ) 
    }
}


export default CoinContainer