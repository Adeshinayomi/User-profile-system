import {  useState } from "react"
import { User } from "./UserCard"   
import type { UserType } from "../Types/type"

interface UsersProps {
  users:UserType[] 
  deleteUser:(id:number)=>void,
  toggleStatus:(id:number)=>void
    search:string
}

export function Users({users,deleteUser,toggleStatus,search}: UsersProps){
    const [filter,setFilter]=useState('all')
    

const filteredUsers = users.filter(user => {
  const matchesFilter =
    filter === 'all'
      ? true
      : filter === 'Online'
      ? user.isOnline
      : !user.isOnline;

  const matchesSearch = `${user.firstName}${user.lastName}`
    .toLowerCase()
    .includes(search.toLowerCase());

  return matchesFilter && matchesSearch;
});

   

    function loadFilter(){
        if(filteredUsers.length === 0){
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
                    <button className={`px-4 py-2 rounded-full ${filter==='all'?'bg-primary text-white':'text-black border border-primary'}`} onClick={()=>{
                        setFilter('all')
                    }}>All User</button>
                    <button className={`px-4 py-2 rounded-full ${filter==='Online'?'bg-primary text-white':'text-black border border-primary'}`} onClick={()=>{
                        setFilter('Online')
                    }}>Online</button>
                    <button className={`px-4 py-2 rounded-full ${filter==='Offline'?'bg-primary text-white':'text-black border border-primary'}`} onClick={()=>{
                        setFilter('Offline')
                    }}>Offline</button>
                </div>
                
               {loadFilter()}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {filteredUsers.map((user) => (
                        <User key={user.id} user={user} deleteUser={deleteUser} toggleStatus={toggleStatus}/>
                    ))}
                </div>                
            </section>
        </main>
    )
} 