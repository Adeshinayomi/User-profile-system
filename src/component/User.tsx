import type { UserType } from "../Types/type"
import deleteIcon from '../assets/icons/icon-delete.svg'
interface UserProps {
    user: UserType
    deleteUser:(id:number)=>void
}

export function User({user,deleteUser}: UserProps){
    return(
        <div className="w-full h-fit px-4 py-2 bg-white rounded-xl shadow-xl grid gap-2">
            <div className="h-48">
                <img src={user.image} alt="" className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className="grid">
                <h1 className="text-lg font-medium">{user.firstName} {user.lastName}</h1>
                <p className="text-sm text-black/50">{user.description}</p>
                <div>
                    {user.isOnline ? 
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-primary rounded-full">

                            </div>
                            <span>Online</span>
                        </div>
                    : 'Offline'}
                </div>
                <button className="justify-self-end" onClick={()=>{
                    deleteUser(user.id)
                }}>
                    <img src={deleteIcon} alt="delete-icon" />
                </button>
            </div>
        </div>
    )
}