import '../nav.scss'
import { useNavigate } from 'react-router'

const Nav = () => {
    const navigate = useNavigate();
  return (
    <nav className="nav-bar">
        <span className="viora">
            <span className="v">V</span>
            <span className="i">I</span>
            <span className="o">O</span>
            <span className="r">R</span>
            <span className="a">A</span>
        </span>
        <button onClick={()=>{
           navigate("/create-post");
        }} className="button primary-button">new post</button>
    </nav>
  )
}

export default Nav