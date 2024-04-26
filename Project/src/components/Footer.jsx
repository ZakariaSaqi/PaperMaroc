import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <p className="m-0">
        <strong>
          <span>arabicPDF</span>
        </strong>{" "}
        2024 &copy; Copyright {t("footer.copy")} <br />
     {t("footer.webgenius")}  {" "} 
        <Link className="links" to="https://webgenius212.onrender.com/">
          <strong>WebGenius212</strong>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
