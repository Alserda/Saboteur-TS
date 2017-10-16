import { createMemoryHistory, MemoryHistory } from 'history';

/**
 * History object that represent the router's memory history.
 */
export const history: MemoryHistory = createMemoryHistory();

interface IRoutes {
  [key: string]: string;
}
/**
 * An object of routes that are available within the client.
 */
export const routes: IRoutes = {
  Lobby: '/',
  Room: '/room',
  Game: '/game',
};
