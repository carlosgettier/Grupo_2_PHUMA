function LeftMenuNavItem (props){
    return(
        <li className="nav-item">
        <a className="nav-link collapsed" href={props.href}>
          {props.fontAwesomeElement}
          <span>{props.text}</span>
        </a>
      </li>

    );
}

export default LeftMenuNavItem;