import {getAllPosts} from "@/app/services/api.services";
import Link from "next/link";


export const PostsComponent = async () => {
    const posts = await getAllPosts();


    return (
        <div>
            {
                posts.map((post) => <div key={post.id}>

                    <Link href={{pathname:'/posts/' + post.id.toString(), query:{data: JSON.stringify(post)}   }}></Link>{post.id} {post.title} {post.body}</div>)
            }

        </div>
    );
};