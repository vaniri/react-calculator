import React, { Component } from 'react';
import Button from './button';
import './index.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };

        this.num = 0;
        this.lastNum = 0;
        this.operation = "";
        this.valuesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "="];
    }

    computation = (value) => {
        if (value >= '0' && value <= '9') {
            this.num = this.num * 10 + value;
            this.setState({ name: this.num });
        } else {
            switch (this.operation) {
                case "+":
                    this.num = this.num + this.lastNum;
                    break;
                case "-":
                    this.num = this.lastNum - this.num;
                    break;
                case "/":
                    this.num = this.lastNum / this.num;
                    break;
                case "*":
                    this.num = this.num * this.lastNum;
                    break;
                case "=":
                    break;
                case "":
                    break;
                default:
                    console.log("unsuppported opperation");
                    break;
            };

            this.setState({ name: this.num });
            this.lastNum = this.num;
            this.num = 0;
            this.operation = value;
        }
    }

    render() {
        return (
            <div id="calculator-container" style={{}}>
                <div>
                    <p id="display">{this.state.name}</p>
                </div>
                <div id="buttons-container">
                    {this.valuesArr.map(value =>
                        <Button
                            value={value}
                            clickHandler={this.computation} />
                    )}
                </div>
            </div>
        )
    }
}

export default Calculator;