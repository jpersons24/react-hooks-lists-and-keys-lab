import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const allLinks = links.map(link => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return (
    <div>
      <nav>
        {allLinks}
      </nav>;
    </div>
  )
}

export default NavBar;
