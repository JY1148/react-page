import React from "react";
import Display from "../../components/Display/Display";
import Reloadbtn from "../../components/Roloadingbtn/Reloadbtn";
import Topbtn from "../../components/Topbtn/Topbtn";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Display/>
      <Reloadbtn/>
      <Topbtn/>
    </div>
  );
}
export default Home;
