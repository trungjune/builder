import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./Editor";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { pageLoad } from "./redux/actions/pageAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:pageId" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
