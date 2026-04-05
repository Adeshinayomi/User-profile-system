type Props={
    toggleModal:()=> void;
}
export function Header({toggleModal}:Props){
    return(
        <header className="w-full grid py-10 bg-white">
            <nav className="w-5/6 mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">User Profiles</h1>
                </div>

                <div className="w-1/2 mx-auto">
                    <input type="text" placeholder="search" className="w-full py-2 rounded-full px-4 shadow-lg"/>
                </div>

                <button className="px-6 py-2 rounded-full bg-primary text-white shadow-xl" onClick={toggleModal}>
                    Add User
                </button>
            </nav>
        </header>
    )
}