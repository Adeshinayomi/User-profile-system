export function Modal(){
    return(
        <form className="hidden fixed top-0 w-full h-screen grid items-center z-20">
            <div className="fixed top-0 w-full h-screen bg-black/50 z-10">

            </div>

            <section className="relative bg-white w-1/2 mx-auto grid px-6 py-5 gap-5 rounded-xl z-20">
                <div>
                    <h1 className="text-center text-2xl"> New User </h1>
                </div>

                <div className="grid gap-5">
                    <div className="flex w-full gap-2 py-2">
                        <input type="text" placeholder="Name" className="w-full px-4 py-4 rounded-xl shadow-lg"/>
                        <input type="text" placeholder="Email" className="w-full px-4 py-4 rounded-xl shadow-lg"/>
                    </div>
                    {/* <input type="text" placeholder="Description"  className="px-4 py-2 rounded-xl shadow-lg"/> */}
                    <textarea className="shadow-xl px-4 rounded-xl" rows={7}  placeholder="Enter your Description"></textarea>
                    <div className="grid">
                        <label className="text-md font-medium">Upload image:</label>
                        <input type="file"/>
                    </div>
                </div>

                <button className="px-6 py-2 text-white bg-primary w-fit justify-self-center rounded-full">Add User</button>
            </section>
        </form>
    )
}