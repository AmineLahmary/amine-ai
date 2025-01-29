function Note({closeNote}) {


    return (<>

        <div className="flex justify-center items-center w-full py-2 text-center bg-red-200 text-red-500">
            <strong>Big Note !!</strong>&nbsp; this data will stored on your local storage in your browser

            <button
            onClick={closeNote} 
            className="ml-10 text-sm flex justify-center items-center bg-transparent text-red-500 border border-red-500 h-[30px] w-[30px]">
                X
            </button>
        </div>

    </>);
}
export default Note;