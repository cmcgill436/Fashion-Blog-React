export default function NavBar(myFunctionParameter) {
  console.log(myFunctionParameter);

  const navLinks = myFunctionParameter.key1.map((page, i) => {
    return (
      <li className="hdlink">
        <a
          style={{ color: myFunctionParameter.color }}
          href={"/" + page}
          key={"page_" + i}
        >
          {page}
        </a>
      </li>
    );
  });

  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className="hdnav" style={{ color: "lightgrey" }}>
        {navLinks}
      </ul>
    </nav>
  );
}
