import searchIcon from '../assets/icons/icon-search.svg'
type Props={
    toggleModal:()=> void;
    search:string
    setsearch:React.Dispatch<React.SetStateAction<string>>
}
export function Header({toggleModal,search,setsearch}:Props){
    
    return(
        <header className="w-full grid py-10 bg-white">
            <nav className="mx-4 md:w-5/6 md:mx-auto grid md:flex gap-2 lg:justify-between md:items-center">
                <div>
                    <h1 className="text-2xl font-bold mx-4">User Profiles</h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/2 md:mx-auto flex md:items-center">
                    <img src={searchIcon} alt="search-icon" className='relative top-0 left-9 accent-gray-200' width={17}/>
                    <input type="text" placeholder="search" className="w-full py-2 rounded-full px-10 shadow-lg" value={search} onChange={(e)=>{
                        setsearch(e.target.value)   
                    }}/>
                </div>

                <button className="mx-4 md:mx-0 flex gap-2 px-6 py-2 items-center justify-center rounded-full bg-primary text-white shadow-xl" onClick={toggleModal}>
                    Add User 
                    <svg className='w-5 h-5 fill-white' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                </button>
            </nav>
        </header>
    )
}