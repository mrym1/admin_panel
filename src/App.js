import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import EventCategories from "./pages/usercategories/EventCategories";
import Contest from "./pages/Contest/Contest";
import Chat from "./pages/chat/chat";
import New from "./pages/new/New";
import Single from "./pages/Single_user/Single";
import { productInputs, userInputs } from "./formSource";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { RequireAuth } from './context/RequireAuth'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="categories">
              <Route index element={<EventCategories />} />
              <Route path=":categoriesId" element={<New />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New categories" />}
              />
            </Route>
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="contest">
              <Route index element={<Contest />} />
              <Route path=":contestId" element={<New />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Contest" />}
              />
            </Route>
            <Route path="chat">
              <Route index element={<Chat />} />
              <Route path=":chatId" element={<New />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Contest" />}
              />
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
