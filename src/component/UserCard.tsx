import type { UserType } from "../Types/type"
import deleteIcon from '../assets/icons/icon-delete.svg'
import toggleOffIcon from '../assets/icons/icon-toggle-off.svg'

interface UserProps {
    user: UserType
    deleteUser:(id:number)=>void
    toggleStatus:(id:number)=>void
}

export function User({user,deleteUser,toggleStatus}: UserProps){
    return(
        <div className="w-full h-fit px-4 py-2 bg-white rounded-xl shadow-xl grid gap-2">
            <div className="h-48">
                <img src={user.image} alt="" className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className="grid">
                <h1 className="text-lg font-medium flex justify-between">{user.firstName} {user.lastName}
                    <button onClick={()=>{
                        toggleStatus(user.id)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={`${user.isOnline?'flex':'hidden'} w-6 h-6 fill-primary`}><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm485-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-285-85Z"/></svg>
                        
                        <img src={toggleOffIcon} alt="toggle-on-icon" className={`${user.isOnline?'hidden':'flex'}`}/>
                    </button>
                </h1>
                <p className="text-sm text-black/50">{user.description}</p>
                <div>
                    {user.isOnline ? 
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-primary rounded-full"></div>
                            <span>Online</span>
                        </div>
                    :   <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                            <span>Offline</span>
                        </div>}
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