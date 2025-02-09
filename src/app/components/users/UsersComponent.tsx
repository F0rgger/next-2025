import {getAllUsers} from "@/app/services/api.services";
import Link from "next/link";


export const UsersComponent = async () => {
    const users = await getAllUsers();


    return (
        <div>
            {
                users.map((user) => <div key={user.id}>

                    <Link href={{pathname:'/users/' + user.id.toString(), query:{data: JSON.stringify(user)}   }}></Link>{user.id} {user.name}</div>)
            }

        </div>
    );
};