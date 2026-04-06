import {  useState } from "react"
import { User } from "./UserCard"   
import type { UserType } from "../Types/type"

interface UsersProps {
  users:UserType[] 
  deleteUser:(id:number)=>void,
  toggleStatus:(id:number)=>void
}

export function Users({users,deleteUser,toggleStatus}: UsersProps){
    const [filter,setFilter]=useState('all')

    const filterUser=users.filter((user)=>{
        if(filter === 'Offline'){
            return !user.isOnline
        }else if(filter === 'Online'){
            return user.isOnline
        }else{
            return true
        }
    })
    function loadFilter(){
        if(filterUser.length === 0){
        return (
            <p>
                No Users found
            </p>
        )
    }
    }


    return(
        <main className="w-full grid mt-16 py-10">
            <section className="w-5/6 mx-auto grid gap-5">
                <div className="flex gap-2 ">
                    <button className="px-4 py-2 rounded-full text-white bg-primary" onClick={()=>{
                        setFilter('all')
                    }}>All User</button>
                    <button className="px-4 py-2 rounded-full text-black border border-primary" onClick={()=>{
                        setFilter('Online')
                    }}>Online</button>
                    <button className="px-4 py-2 rounded-full text-black border border-primary" onClick={()=>{
                        setFilter('Offline')
                    }}>Offline</button>
                </div>
                
               {loadFilter()}
                <div className="grid grid-cols-4 gap-2">
                    {filterUser.map((user) => (
                        <User key={user.id} user={user} deleteUser={deleteUser} toggleStatus={toggleStatus}/>
                    ))}
                </div>                
            </section>
        </main>
    )
} 