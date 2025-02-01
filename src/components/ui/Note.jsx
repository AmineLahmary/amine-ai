import PropTypes from 'prop-types'

const Note = ({ closeNote }) => {
  return (
    <>
      <div className="relative w-full flex-wrap items-center justify-center bg-red-200 p-2 pr-16 text-red-500 md:flex md:p-2 md:text-center">
        <strong>Big Note !!</strong>&nbsp; some data will stored on your local
        storage in your browser
        <button
          onClick={closeNote}
          className="absolute right-2 top-4 ml-10 flex h-[30px] w-[30px] items-center justify-center border border-red-500 bg-red-500 text-sm md:static"
        >
          &times;
        </button>
      </div>
    </>
  );
}

Note.propTypes = {
    closeNote: PropTypes.func.isRequired
}

export default Note;
