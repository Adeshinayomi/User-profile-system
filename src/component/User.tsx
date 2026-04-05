type UserType = {
    image: string
    name: string
    description: string
    isOnline: boolean
}

interface UserProps {
    user: UserType
}

export function User({user}: UserProps){
    return(
        <div className="w-full h-fit px-4 py-2 bg-white rounded-xl shadow-xl grid gap-2">
            <div className="h-48">
                <img src={user.image} alt="" className="w-full h-full rounded-xl"/>
            </div>
            <div className="grid">
                <h1 className="text-lg font-medium">{user.name}</h1>
                <p className="text-sm text-black/50">{user.description}</p>
                <p>{user.isOnline ? 
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full">

                    </div>
                    <span>Online</span>
                </div>
                : 'Offline'}</p>

            </div>
        </div>
    )
}