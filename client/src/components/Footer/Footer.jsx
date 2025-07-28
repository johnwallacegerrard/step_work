import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__statement-container">
        <p className="footer__statement">
          "The 12 steps are a powerful and effective spiritual process. Working
          these steps has certainly changed my life, and I aim to help others do
          the same. By introducing a modern approach to the steps, I hope to
          make the journey easier and more familiar in this technological age we
          live in"
        </p>
        <p>-Levi B.</p>
      </div>
      <div className="footer__links">
        <h2 className="footer__links-title">Helpful Links</h2>
        <Link className="footer__link" to={"https://www.aa.org/"}>
          Alcoholics Anonymous
        </Link>
        <Link className="footer__link" to={"https://na.org/"}>
          Narcotics Anonymous
        </Link>
        <Link
          className="footer__link"
          to={"https://www.samhsa.gov/find-help/helplines/national-helpline"}
        >
          National Substance Abuse and Mental Health Hotlines
        </Link>
      </div>
    </div>
  );
}

export default Footer;
