import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteDefinition, routes } from './Routes';

export const AppRoutes: FC = () => {
    function renderRoutes(routesToRender: RouteDefinition[]) {
        return routesToRender.map(({ path, element, children }) => (
            <Route
                key={path}
                path={path}
                element={element}>
                {children && renderRoutes(children || [])}
            </Route>
        ));
    }

    return (        
        <Routes>
            {renderRoutes(routes)}
        </Routes>
    );
};
