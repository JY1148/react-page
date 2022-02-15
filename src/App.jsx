import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Privacy from "./pages/privacy/privacy";
import Search from "./pages/search/search";
import Fav from "./pages/fav/fav";
import { useState } from "react";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import { UserContext } from "./UserContext";
  
function App(){
  const defaultPage = document.location.hash.replace('#', "");
  const [page, setPage] = useState( defaultPage ||'Home');
  const [favList, setFavList] = useState([{
      "id": 1010856,
      "name": "Example",
      "description": "",
      "modified": "",
      "thumbnail": {
          "path": "",
          "extension": ""
      },
      "resourceURI": "",
      "comics": {
          "available": 0,
          "collectionURI": "",
          "items": [],
          "returned": 0
      },
      "series": {
          "available": 0,
          "collectionURI": "",
          "items": [],
          "returned": 0
      },
      "stories": {
          "available": 0,
          "collectionURI": "",
          "items": [],
          "returned": 0
      },
      "events": {
          "available": 0,
          "collectionURI": "",
          "items": [],
          "returned": 0
      },
      "urls": [
          {
              "type": "",
              "url": ""
          },
          {
              "type": "",
              "url": ""
          }
      ]
  }
  ]);

  return (
      <div className="app">
        <UserContext.Provider value={{favList, setFavList}}>
          <Header page={page} setPage={setPage}/>
          {page === 'Home' && <Home/>}
          {page === 'Favorite' && <Fav/>}
          {page === 'About' && <About/>}
          {page === 'Privacy' && <Privacy/>}
          {page === 'Search' && <Search/>}
          <Footer/>
          </UserContext.Provider>
      </div>
  )
}
export default App;
