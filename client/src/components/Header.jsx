
import { Link } from "react-router-dom";
import '/src/styles/Header.css'

export default function Header() {
  return (


    <>
        <div className="headerBody">

            <h3>Header</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/example">example</Link></li>

            </ul>

        </div>
    
    
    </>

)
}
