import * as React from 'react';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';

type Props = {};

class Main extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        <Header />
        <div>
          Main2
        </div>
      </Wrapper>
    );
  }
}

export default Main;
