import React, { Component, ReactNode } from 'react';
import './style.scss';

type Props = {
  children: ReactNode;
}

class Wrapper extends Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">
        {children}
      </div>
    );
  }
}

export default Wrapper;
