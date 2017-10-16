import * as React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Lobby from 'scenes/Lobby';
import Room from 'scenes/Room';
import Game from 'scenes/Game';

import { history, routes } from 'services/router';

const Router: React.StatelessComponent = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path={routes.Lobby} component={Lobby} />
      <Route exact path={routes.Room} component={Room} />
      <Route exact path={routes.Game} component={Game} />
    </div>
  </ConnectedRouter>
);

export default Router;