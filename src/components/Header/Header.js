import React from "react";
import "./header.css"
export default function Header() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" className="black-text brand-logo center">
          Loggo
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a href="sass.html"  className="black-text" >BUY</a>
          </li>
          <li>
            <a href="badges.html" className="black-text">RENT</a>
          </li>
          <li>
            <a href="collapsible.html"  className="black-text">SELL</a>
          </li>
        </ul>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html"  className="black-text">Manage Rental</a>
          </li>
          <li>
            <a href="sass.html"  className="black-text">Advertise</a>
          </li>

          <li>
            <a href="/addProperties" className="black-text" >Add properties</a>
          </li>
          
          <li>
            <a href="collapsible.html"  className="black-text">Agent Hub</a>
          </li>
          <li>
          <a href="" className="black-text"><i className="material-icons left" >help</i>help</a> 

          </li>

         
        </ul>
      </div>
    </nav>
  );
}
