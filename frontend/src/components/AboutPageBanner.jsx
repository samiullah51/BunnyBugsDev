import React from "react";

function AboutPageBanner({ title, desc }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="page-header-info text-center">
          <h4>
            <a href="index-2.html">Home </a> //{" "}
            <a href="#">
              <span> {title}</span>
            </a>
          </h4>
          <h2>
            {title} {desc}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default AboutPageBanner;
