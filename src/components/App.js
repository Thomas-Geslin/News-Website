import Header from "./Header";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";

import { useState } from "react";

function App() {
  // Initialise localState pour recevoir news qu'on recherche
  const [searchData, setSearchData] = useState([]);

  return (<div>
            <Header />
            <Search searchData={searchData} setSearchData={setSearchData} />
            <div className="HomeFlex">
              <Sidebar />
              <Homepage searchData={searchData} setSearchData={setSearchData} />
            </div>
          </div>);
}

export default App;
