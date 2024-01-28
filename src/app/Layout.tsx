import { FC, ReactElement } from 'react';

type Props = {
    children: ReactElement;
};
  
export const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}