import React, { Component } from 'react'
import { choice } from './helpers'
import Coin from './Coin'; 

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" }, 
            { side: 'tails', imgSrc:  "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
        ]
    }; 

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0, 
            numHeads: 0, 
            numTails: 0
        } 
        this.handleClick = this.handleClick.bind(this); 
    }

    flipCoin() {
        const newCoin = choice(this.props.coins); 
        this.setState( st => {
            return {
                currCoin: newCoin, 
                numFlips: st.numFlips + 1, 
                numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
                numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }
    
    handleClick(event) {
        this.flipCoin(); 

    }

    render() {
        return(
            <div className="CoinContainer">
                <h2>Let's Flip A Coin!!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <p>
                    Out of {this.state.numFlips} flips, there has been {this.state.numHeads}{" "} 
                    heads and {this.state.numTails} tails.
                </p>
                <button onClick={this.handleClick}>Flip Me!</button>
            </div>
        ) 
    }
}


export default CoinContainer