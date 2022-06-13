import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const AboutFive = () => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="section section-padding-top section-padding-bottom-180">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/about/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"
                    }
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/about/roberto-cortese-ejhjSZKTeeg-unsplash.jpg"
                    }
                    alt=""
                  />
                </Tilt>
              </div>

              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/shape-animation/about-shape-1.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-content-area">
              <SectionTitleTwo
                subTitle="Our solutions begin with brand research"
                title="We’ve worked alongside plenty of brands &amp; startups"
              />

              <p>
                If you find yourself fighting with technology on a regular
                basis, then Greenfield IT can help you win the battle, by
                providing your business with a range of solutions including
                Managed Services, Business Continuity, IT Security and Office
                365 services. You can let your IT problems become our IT
                problems. Managing and solving them is what we’re good at.
              </p>

              <Link
                className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                to={process.env.PUBLIC_URL + "/"}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
