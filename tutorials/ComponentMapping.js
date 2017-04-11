class ContactInfo extends React.Component {
  render() {
    return(
      <div>{this.props.contact.name}{this.props.contact.phone}</div>
    )
  }
}

class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {name: 'Abet', phone: '010-0000-0001'},
        {name: 'Betty', phone: '010-0000-0002'},
        {name: 'Charlie', phone: '010-0000-0003'},
        {name: 'David', phone: '010-0000-0004'}
      ]
    }
  }
  render() {
    
    // const : 프로그램이 실행되면서 변할일이 없는 값을 지정하는 상수
    const mapToComponent = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    };
  
    return (
      <div>
        {mapToComponent(this.state.contactData)}
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <Contact/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);