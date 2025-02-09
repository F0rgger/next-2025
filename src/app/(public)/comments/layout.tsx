import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'CommentsLayout',
}
type Props = {children: ReactNode}

const CommentsLayout = ({ children }: Props) => {
    return(

        <>{children}</>


    );
};
export default CommentsLayout;