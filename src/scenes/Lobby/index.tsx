import * as React from 'react';
import { history } from 'services/router';

class Lobby extends React.Component<any, any> {
  public componentDidMount(): void {
    setTimeout(() => {
      history.push('/room');
    }, 2000);
  }

  public render() {
    return (
      <div>Lobby screen</div>
    )
  }
}

export default Lobby;
