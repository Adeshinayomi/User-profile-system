import { User } from "./User"   
import type { UserType } from "../Types/type"

interface UsersProps {
  users: UserType[]
  deleteUser:(id:number)=>void
}
export function Users({users,deleteUser}: UsersProps){
    return(
        <main className="w-full grid mt-16 py-10">
            <section className="w-5/6 mx-auto grid gap-5">
                <div className="flex gap-2 ">
                    <button className="px-4 py-2 rounded-full text-white bg-primary">All User</button>
                    <button className="px-4 py-2 rounded-full text-black border border-primary">Online</button>
                    <button className="px-4 py-2 rounded-full text-black border border-primary">Offline</button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {users.map((user) => (
                        <User key={user.id} user={user} deleteUser={deleteUser}/>
                    ))}
                </div>                
            </section>
        </main>
    )
} 