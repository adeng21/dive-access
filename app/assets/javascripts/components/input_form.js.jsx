var InputForm = React.createClass({
  getInitialState: function(){
    return {
      message: null,
      error: false
    };
  },
  componentDidMount: function(){
    this.setMessageClass();
  },
  handleSubmit: function(e){
    e.preventDefault();
    var email_value = React.findDOMNode(this.refs.email).value.trim();
    if(!email_value){
      return;
    }
    this.createUser({email: email_value});
    this.setMessageClass();
  },
  setMessageClass: function(){
    if(!this.state.message){
      return "hidden";
    } else {
      return null;
    }
  },
  setInputClass: function(){
    if(!this.setMessageClass()){
      return "hidden";
    } else {
      return null;
    }
  },
  setFaClass: function(){
    if(!this.state.error){
      return "hidden";
    } else {
      return null;
    }
  },
  tryAgain: function(){
    this.setState({message: null, error: false});
    this.setMessageClass();
    React.findDOMNode(this.refs.email).value = "";
    return;
  },
  createUser: function(data){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(){
        this.setState({message: "Thank you!", error: false});
      }.bind(this),
      error: function(){
        this.setState({message: "Uh oh! Email appears to be invalid. Please try again!", error: true});
      }.bind(this)
    }); 
  },
  render: function(){
    return (
      <form className={this.props.class_id} onSubmit={this.handleSubmit}>
        <div className={"message-box " + this.setMessageClass()}>
        {this.state.message}
          <i className={"fa fa-times red pull-right " + this.setFaClass()} onClick={this.tryAgain}></i>
        </div>
        <input className={"email-input " + this.setInputClass()} type="text" placeholder="email here.." ref="email"/>
        <input type="submit"/>
      </form>
    );
  }
});