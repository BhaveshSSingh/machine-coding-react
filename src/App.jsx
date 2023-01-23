import NestedComments from "./nestedComments/NestedComments";
import NestedFolder from "./nestedFolders/NestedFolder";

function App() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold underline pb-3 flex justify-center items-center">
        Maching Coding Question
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

      <div>
        <p className="text-purple-700 text-xl">1.Nested Comments</p>
        <NestedComments />
        <p className="text-orange-700 text-xl">2.Folder Structure</p>
        <NestedFolder />
        <p className="text-orange-700 text-xl">3.Live Chat</p>
        {/* <NestedFolder />{" "} */}
        <p className="text-orange-700 text-xl">4. Search Type Ahead</p>
        {/* <NestedFolder />{" "} */}
        <p className="text-orange-700 text-xl">5.Day Calendar</p>
        {/* <NestedFolder />{" "} */}
        <p className="text-orange-700 text-xl">
          6. Microsoft Excel like spreadsheet
        </p>
        {/* <NestedFolder />{" "} */}
        <p className="text-orange-700 text-xl">
          7.Render dynamic forms using config
        </p>
        {/* <NestedFolder />{" "} */}
        <p className="text-orange-700 text-xl">8. Implement a progress bar</p>
        {/* <NestedFolder />{" "} */}
        <p className="text-orange-700 text-xl">9.Star rating widget</p>
        {/* <NestedFolder />{" "} */}
        <p className="text-orange-700 text-xl">10.Twitter Post like textarea</p>
        {/* <NestedFolder /> */}{" "}
        <p className="text-orange-700 text-xl">11.Todo List</p>
        {/* <NestedFolder /> */}
        <p className="text-orange-700 text-xl">12.Design cart page</p>
        {/* <NestedFolder /> */}
        <p className="text-orange-700 text-xl">
          13. Design product listing page with filters
        </p>
        {/* <NestedFolder /> */}
        <p className="text-orange-700 text-xl">14.Build tic-tac-toe game</p>
        {/* <NestedFolder /> */}
      </div>
    </div>
  );
}

export default App;
