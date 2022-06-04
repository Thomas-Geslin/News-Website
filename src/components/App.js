import Header from "./Header";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";

function App() {
  return (<div>
            <Header />
            <Search />
            <div className="HomeFlex">
              <Sidebar />
              <Homepage />
            </div>
          </div>);
}

export default App;
