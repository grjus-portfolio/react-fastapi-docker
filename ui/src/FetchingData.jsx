import React, { Component } from 'react';

export default class FetchingData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: null,
            error: ""
        };

    }

    fetchData() {
        fetch("http://localhost:8080/api/return-random").then(response => response.json()).then(data => this.setState({
            error: "", number: data.number
        })).catch(error => this.setState({
            ...this.state, error: error.message
        }));
    };

    componentDidMount() {
        this.fetchData();
    }

    generateRandomNumber = () => {
        this.fetchData();
    };

    render() {
        return (
            <div>
                <button onClick={this.generateRandomNumber}>Generate random number</button>
                <div>
                    Your random number is: {this.state.number}
                    <p style={{ color: "red" }}>{this.state.error}</p>
                </div>

            </div>
        );
    }
}
