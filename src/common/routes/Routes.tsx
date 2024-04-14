import { NotFound } from '../components/NotFound';
import DeliverItem from '../../features/deliver/DeliverItem';
import SendItem from '../../features/send/SendItem';
import Home from '../../features/home/Home';

export type RouteDefinition = {
    path?: string;
    element: JSX.Element;
    children?: RouteDefinition[];
};

export enum Routes {
    Home = '/',
    DeliverItem = '/deliver',
    SendItem = '/send'
}
  
export const RoutesNameMap = new Map<string, string>([
    [ Routes.Home, 'Choose Service Use Type' ]
]);

export const routes: RouteDefinition[] = [
    {
        path: Routes.Home,
        element: <Home />
    },
    {
        path: Routes.DeliverItem,
        element: <DeliverItem />
    },
    {
        path: Routes.SendItem,
        element: <SendItem />
    },
    {
        path: '*',
        element: <NotFound />,
    }
]