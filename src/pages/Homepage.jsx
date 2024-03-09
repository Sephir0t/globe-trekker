import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Se souvenir est important
          <br />
          GlobeTrekker garde la trace de vos aventures
        </h1>
        <h2>
        Une application qui suit vos pas dans toutes les villes du monde et qui vous permet, à tout instant,
        de partager vos aventures avec vos amis.
        </h2>
        <Link to="/login" className="cta">
          Commencez maintenant
        </Link>
      </section>
    </main>
  );
}
