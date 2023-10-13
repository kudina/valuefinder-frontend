import routes from "./Routes";
import { RouterProvider } from "react-router-dom";
import { useGetCurrentUserQuery } from "./features/api/apiSlice";

function App() {
  const {data} = useGetCurrentUserQuery()
  console.log("from top", data)
  return <RouterProvider router={routes} />;
}

export default App
