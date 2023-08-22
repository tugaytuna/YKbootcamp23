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
          <p htmlFor="">
            <img
              height="30px"
              width="30px"
              src={require("./logos/github.png")}
              alt=""
            />
            <a target={"_blank"} href="https://www.github.com/tugaytuna">
              Github
            </a>
          </p>
          <p htmlFor="">
            <a target={"_blank"} href="https://www.linkedin.com/in/tunatugay">
              Linkedin
            </a>
          </p>

          <p htmlFor="">
            <a target={"_blank"} href="https://www.instagram.com/tugaytunaa">
              Instagram
            </a>
          </p>
          <p htmlFor="">Lorem, ipsum dolor.</p>
          <p htmlFor="">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
