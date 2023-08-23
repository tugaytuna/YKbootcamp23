import React from "react";

function Footer() {
  return (
    <footer>
      <h4>Footer</h4>
      <div className="footermain">
        <div className="linkler">
          <h5>Linkler</h5>
          <p htmlFor="">Lorem, ipsum dolor.</p>
          <p htmlFor="">Lorem, ipsum dolor.</p>
          <p htmlFor="">Lorem, ipsum dolor.</p>
          <p htmlFor="">Lorem, ipsum dolor.</p>
        </div>
        <div className="sosyalmedya">
          <h5>Sosyal Medya</h5>

          <div className="social-icons">
            <a target={"_blank"} href="https://www.github.com/tugaytuna">
              <img src={require("./logos/github.png")} alt="" />
            </a>

            <a target={"_blank"} href="https://www.linkedin.com/in/tunatugay">
              <img src={require("./logos/linkedin.png")} alt="" />
            </a>

            <a target={"_blank"} href="https://www.instagram.com/tugaytunaa">
              <img src={require("./logos/instagram.jpg")} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
