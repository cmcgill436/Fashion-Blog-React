import NavBar from "./Navbar";

export default function Footer() {
  const pages = [
    "Home",
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
    "Tips",
  ];

  const color = "tomato";

  return (
    <footer className="footer">
      <NavBar key1={pages} color={"tomato"} />
      <p class="copyright">&#169; 2013 Valet Industries, Inc</p>
    </footer>
  );
}
