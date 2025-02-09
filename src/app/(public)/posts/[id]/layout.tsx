import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'PostLayout',
}
type Props = {children: ReactNode}

const PostLayout = ({ children }: Props) => {
    return(

        <>{children}</>


    );
};
export default PostLayout;