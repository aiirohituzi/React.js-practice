import React, { Component, PropTypes } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';

const propTypes = {

};

const defaultProps = {

};

class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {


        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
            // ``('가 아닌 1옆의 `키) 사이에 ${표현} 코드를 씀으로써 javascript 를 사용가능
        };

        return (
            <div style={style}>
                <Value number={this.props.number}/>
                <Control 
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    // 위와 아래의 차이는 이름이 기본값으로 action creator 에 적힌 그대로 사용된다는 점이다.
    return {
        handleIncrement: () => { dispatch(actions.increment()) },
        handleDecrement: () => { dispatch(actions.decrement()) },
        handleSetColor: (color) => { dispatch(actions.setColor(color)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
