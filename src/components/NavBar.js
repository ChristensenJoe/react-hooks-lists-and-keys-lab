import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
    {links.map((element) => {
      return (
        <a key ={links.indexOf(element)+1} href={`#${element}`}>{element}</a>
      );
    })}
    </nav>);
}

export default NavBar;
