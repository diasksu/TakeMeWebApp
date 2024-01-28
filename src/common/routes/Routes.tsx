import { NotFound } from "../components/NotFound/NotFound";

export type RouteDefinition = {
    path?: string;
    element: JSX.Element;
    children?: RouteDefinition[];
};

export enum Routes {
    Home = '/',
    TakeMeType = 'take-me-type'
}
  
export const RoutesNameMap = new Map<string, string>([
    [ Routes.TakeMeType, 'Service Use Type' ]
]);

export const routes: RouteDefinition[] = [
    {
        path: Routes.Home,
        element: <>home</>
    },
    {
        path: Routes.TakeMeType,
        element: <>hello</>
    },
    {
        path: '*',
        element: <NotFound />,
    }
]