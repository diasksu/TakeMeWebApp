import { NotFound } from '../components/NotFound/NotFound';
import TakeMeType from '../../features/take-me-type/TakeMeType';
import TakeItem from '../../features/take-item/TakeItem';
import SendItem from '../../features/send-item/SendItem';
import Demo from '../../features/demo/Demo';
import MuiDemo from '../../features/mui-demo/MuiDemo';

export type RouteDefinition = {
    path?: string;
    element: JSX.Element;
    children?: RouteDefinition[];
};

export enum Routes {
    Home = '/TakeMeWebApp',
    Demo = '/TakeMeWebApp/demo',
    TakeItem = '/TakeMeWebApp/take',
    SendItem = '/TakeMeWebApp/send',
    Telebook = '/TakeMeWebApp/telebook'
}
  
export const RoutesNameMap = new Map<string, string>([
    [ Routes.Home, 'Choose Service Use Type' ]
]);

export const routes: RouteDefinition[] = [
    {
        path: Routes.Home,
        element: <MuiDemo />
    },
    {
        path: Routes.TakeItem,
        element: <TakeItem />
    },
    {
        path: Routes.SendItem,
        element: <SendItem />
    },
    {
        path: Routes.Demo,
        element: <Demo />
    },
    {
        path: Routes.Telebook,
        element: <TakeMeType />
    },
    {
        path: '*',
        element: <NotFound />,
    }
]