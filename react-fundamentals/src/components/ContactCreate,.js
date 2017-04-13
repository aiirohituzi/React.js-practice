import React from 'react';

export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let nextState ={};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        });

        this.nameInput.focus();
    }

    handleKeyPress(e) {
        if(e.charCode===13) {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        ref={(ref) => { this.nameInput = ref }}
                        // render 메소드 내부랑 constructor 메소드 내부에서는 ref에 접근불가
                        // ref를 쓰기전에는 꼭 ref를 쓰지 않고 다른 방법으로 기능이 구현 가능한지 알아보고 사용할것
                        // focus 의 경우는 ref 말고는 구현방법이 달리 없음
                    />
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}

ContactCreate.propTypes = {
    onCreate: React.PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined'); }
}