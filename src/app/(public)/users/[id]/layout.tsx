import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'UserLayout',
}
type Props = {children: ReactNode}

const UserLayout = ({ children }: Props) => {
    return(

        <>{children}</>


    );
};
export default UserLayout;