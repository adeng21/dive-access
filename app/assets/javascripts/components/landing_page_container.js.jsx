var LandingPageContainer = React.createClass({
  getDefaultProps: function(){
    return {
      images: ['ocean', 'coral-reef', 'whale-shark', 'barracuda', 'jacks-ball']
    };
  },
  getInitialState: function(){
    return {
      image_class: this.props.images[0]
    };
  },
  componentDidMount: function(){
    setInterval(this.changeImage, 10000);
  },
  changeImage: function(){
    var currentImage = this.state.image_class;
    var allImages = this.props.images;
    var currentIndex = allImages.indexOf(currentImage);
    if(typeof allImages[currentIndex+1] === "undefined"){
      var next = allImages[0];
    } else {
      var next = allImages[currentIndex + 1];
    }
    return this.setState({image_class: next});
  },
  render: function(){
    return (
      <div className="image-container">
        <BackgroundImage image_class={this.state.image_class}/>
      </div>
    )
  }
});