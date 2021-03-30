import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
display:block;
padding:10px;
`;

const Button = styled.button`
padding:10px;
font-size:14px;
`;

const InnerContainer = styled.div`
display:flex;
flex-direction:column;
`;

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        // this.dispatch.bind(this);
    }

    dispatch = action => {
        switch (action) {
            case "INCREASE_COUNTER": {
                return this.setState({
                    counter: this.state.counter + 1
                });
            }
            case "DECREASE_COUNTER": {
                return this.setState({
                    counter: this.state.counter - 1
                });
            }
        }
    };

    render() {
        return (
            <Container>
                <InnerContainer>
                    <Button onClick={() => this.dispatch("INCREASE_COUNTER")}>Increase</Button>
                    <Button onClick={() => this.dispatch("DECREASE_COUNTER")}>Descrease</Button>
                </InnerContainer>
                <p>Increment value: {this.state.counter}</p>

            </Container>
        );
    }
}
