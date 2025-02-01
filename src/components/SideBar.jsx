export default function SideBar() {
  return (
    <aside className="hidden min-w-[200px] cursor-not-allowed flex-col justify-between bg-stone-800 p-5 opacity-55 md:flex">
      <div>
        <button className="mb-3 w-full">new chat</button>
        <hr />
        <ul className="mt-3">
          <h3 className="mb-3 font-semibold capitalize">recent chats</h3>
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
