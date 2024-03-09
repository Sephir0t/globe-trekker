import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Prix</NavLink>
        </li>
        <li>
          <NavLink to="/product">Goodies</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Connexion
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
