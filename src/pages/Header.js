import logo from "../elements/logo-ec.png";

const Header = () => {
  return (
    <section id="header">
      <header>
        <img src={logo} alt="" id="logo"/>
        <nav class="nav-bar">
          <ul>
            <li><a href="#about" id="longer-nav">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;