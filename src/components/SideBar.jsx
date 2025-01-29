export default function SideBar() {
    return (
        <aside className="hidden md:flex flex-col justify-between bg-stone-800 p-5 min-w-[200px] opacity-55 cursor-not-allowed">
           <div>
             <button className="mb-3 w-full">new chat</button>
             <hr />
             <ul className="mt-3">
                 <h3 className="font-semibold capitalize mb-3">
                     recent chats
                 </h3>
                 <li>What it HTML ?</li>
             </ul>
           </div>
            <nav>
                <ul>
                    <li>help</li>
                    <li>about</li>
                </ul>
            </nav>
        </aside>
    );
}