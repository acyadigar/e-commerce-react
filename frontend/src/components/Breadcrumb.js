import { Link } from "react-router-dom";
import './styles/Breadcrumb.css'

export default function Breadcrumb({ data }) {
  return (
    <div id="breadcrumb">
      <ul>
        {data.map((link, index) => (
          <li>
            <Link to={link.path}> {link.name}</Link> 
            { (index + 1 !== data.length) && <span> /</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
