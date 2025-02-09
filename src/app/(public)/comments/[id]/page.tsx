import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/app/models/IComment";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "Comment page" + id,
    }

}

const CommentPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === "string") {
        obj = JSON.parse(data) as IComment;
    }


    return (
        <div>
            {obj && <> {obj.id} {obj.name} {obj.email} </>}
        </div>
    );
};
export default CommentPage;