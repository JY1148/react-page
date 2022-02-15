import Nav from "../../components/Nav/Nav";
import logo from "../../assets/Marvel-fame-of-hall-logo-stamp.png";
import "./header.css";
  
function Header({setPage}){
  function navTo(target){
    setPage(target);
  }
  return (
    <div className="header">
        <img className="logo" src={logo} alt="logo" onClick={()=>navTo('Home')}/>
        <a className="skip-btn" href='#main'>Skip to content</a>
        <Nav className="nav" setPage={setPage}/>
    </div>
  )
}
export default Header;
