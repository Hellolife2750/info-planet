import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="centered">
        <p>OpenSource Data visualisation - oct. 2023</p>
        <ul className="medias">
          <li>
            <a
              href="https://www.youtube.com"
              className="fa-brands fa-youtube"
            ></a>
          </li>
          <li>
            <a
              href="https://www.github.com"
              className="fa-brands fa-github"
            ></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              className="fa-brands fa-facebook"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
