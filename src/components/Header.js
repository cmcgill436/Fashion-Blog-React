import NavBar from "./Navbar";

export default function Header() {
  const pages = [
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
  ];

  return (
    <header className="header">
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <NavBar key1={pages} color={"lightgrey"} />
    </header>
  );
}
