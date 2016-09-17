import React from 'react';
import PictureShow from 'react-picture-show';

export default React.createClass({

  getInitialState () {
    return {
      shouldShow: 'hidden'
    }
  },

  handleToggle() {
    
  },

  render() {
    let style = {
      visibility: this.state.shouldShow
    }

    return (
      <div className="container" style={style}>
        <PictureShow>
          
        </PictureShow>
      </div>
    );
  }
});
