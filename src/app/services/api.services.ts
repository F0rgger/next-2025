import {IUser} from "@/app/models/IUser";
import {IPost} from "@/app/models/IPost";
import {IComment} from "@/app/models/IComment";


export const getAllUsers = async ():Promise<IUser[]>=>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return users;
}

export const getAllPosts = async ():Promise<IPost[]>=>{
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
    return posts;
}

export const getAllComments = async ():Promise<IComment[]>=>{
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
    return comments;
}