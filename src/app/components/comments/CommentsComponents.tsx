import {getAllComments,} from "@/app/services/api.services";
import Link from "next/link";


export const CommentsComponent = async () => {
    const comments = await getAllComments();


    return (
        <div>
            {
                comments.map((comment) => <div key={comment.id}>

                    <Link href={{pathname:'/comments/' + comment.id.toString(), query:{data: JSON.stringify(comment)}   }}></Link>{comment.id} {comment.name}</div>)
            }

        </div>
    );
};