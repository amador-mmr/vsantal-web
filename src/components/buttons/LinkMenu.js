import React from 'react';
import './LinkMenu.css';
import { Link } from 'react-router-dom';

function LinkMenu(props) {

  return (
    <li>
        <Link to={props.link.route}>{props.link.text}</Link>
    </li>
  );
}

export default LinkMenu;
