import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'UsersLayout',
}
 type Props = {children: ReactNode}

const UsersLayout = ({ children }: Props) => {
    return(

        <>{children}</>


    );
};
export default UsersLayout;