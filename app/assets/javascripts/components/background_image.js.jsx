var BackgroundImage = React.createClass({
  render: function(){
    return (
      <div className={"background-image " + this.props.image_class}>
        <div className="landing-page-statement">
          <h1>Ready for a Better Way to Plan Your Dive Vacation?</h1>
          <h3>Enter Your Email for Early Access Now!</h3>
          <InputForm class_id="email-submit-form" url="new_user"/>
        </div>
      </div>
    ) 
  }
});