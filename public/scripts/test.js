import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classNames';

class Test extends React.Component {
  render() {
  	const { className } = this.props;
  	
  	// const classes = cx('blue', 'center');

  	return (
  	  <div className={cx(className)} styleName={cx('blue', 'center')}>
      </div>
    )
  }
}

export default Test;