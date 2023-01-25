import { Link, Outlet } from "react-router-dom";
import NestedComments from "./nestedComments/NestedComments";
import NestedFolder from "./nestedFolders/NestedFolder";

function App() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold underline pb-3 flex justify-center items-center">
        Maching Coding Question{" "}
        <a
          href="https://github.com/BhaveshSSingh/machine-coding-react"
          className=" p-2 ml-5"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-purple-600"
          >
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </h1>
      <div className="flex flex-col">
        <Link to="/comments" className="py-2">
          1. Nested Comments
        </Link>
        <Link to="folder" className="py-2">
          2. Nested Folder
        </Link>
        <Link to="folder" className="py-2">
          3.Live Chat
        </Link>
        <Link to="folder" className="py-2">
          4. Search Type Ahead
        </Link>
        <Link to="folder" className="py-2">
          5.Day Calendar
        </Link>
        <Link to="folder" className="py-2">
          {" "}
          6. Microsoft Excel like spreadsheet
        </Link>
        <Link to="folder" className="py-2">
          {" "}
          7.Render dynamic forms using config
        </Link>
        <Link to="folder" className="py-2">
          8. Implement a progress bar
        </Link>
        <Link to="folder" className="py-2">
          9.Star rating widget
        </Link>
        <Link to="folder" className="py-2">
          10.Twitter Post like textarea
        </Link>
        <Link to="folder" className="py-2">
          11.Todo List
        </Link>
        <Link to="folder" className="py-2">
          12.Design cart page
        </Link>
        <Link to="folder" className="py-2">
          13. Design product listing page with filters
        </Link>
        <Link to="folder" className="py-2">
          14.Build tic-tac-toe game
        </Link>
      </div>
      <div className="w-full h-full border-4  border-sky-400">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
