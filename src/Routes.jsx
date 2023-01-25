import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NestedComments from "./nestedComments/NestedComments";
import NestedFolder from "./nestedFolders/NestedFolder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/comments",
        element: <NestedComments />,
      },
      { path: "/folder", element: <NestedFolder /> },
    ],
  },
]);
