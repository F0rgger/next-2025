import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'CommentLayout',
}
type Props = {children: ReactNode}

const CommentLayout = ({ children }: Props) => {
    return(

        <>{children}</>


    );
};
export default CommentLayout;