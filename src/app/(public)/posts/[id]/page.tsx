import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/app/models/IPost";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "Post page" + id,
    }

}

const PostPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === "string") {
        obj = JSON.parse(data) as IPost;
    }


    return (
        <div>
            {obj && <> {obj.id} {obj.title} {obj.body} </>}
        </div>
    );
};
export default PostPage;