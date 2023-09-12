import "./OurTeam.css";
import Image from "next/image";
import myPic from "../../../../public/images/20230323_122421.jpg";

const OurTeam = () => {
  return (
    <>
      <section className="our-team-section">
        <div className="container">
          <div className="row">
            <h1>Our Team</h1>
            <span className="border our-team-border"></span>
          </div>
          <div className="row our-team-pictures border">
            <a href="#" className="border col">
              <Image
                src={myPic}
                width={200}
                height={200}
                alt="Picture of Rodgers Nyangweso"
              />
            </a>
            <a href="#" className="border col">
              <Image
                src={myPic}
                width={200}
                height={200}
                alt="Picture of Rodgers Nyangweso"
              />
            </a>
            <a href="#" className="border col">
              <Image
                src={myPic}
                width={200}
                height={200}
                alt="Picture of Rodgers Nyangweso"
              />
            </a>
          </div>
          <div className="row our-team-description border">
            <span className="name">Rodgers Nyangweso</span>
            <span className="our-team-border"></span>
            <p>Member description</p>
          </div>
          <div className="row our-team-description border">
            <span className="name">Rodgers Nyangweso</span>
            <span className="our-team-border"></span>
            <p>Member description</p>
          </div>
          <div className="row our-team-description border">
            <span className="name">Rodgers Nyangweso</span>
            <span className="our-team-border"></span>
            <p>Member description</p>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="our-team-section">
        <div className="container">
          <div className="row">
            <h1>Our Team</h1>
            <span className="border our-team-border"></span>
          </div>
          <div className="d-flex flex-row justify-content-evenly">
            <div className="border">
              <div className="picture">
                <a className="#">
                  <Image
                    src={myPic}
                    sizes="(min-width: 768px) 80px, 60px"
                    layout="responsive"
                    width={230}
                    height={280}
                    alt="Picture of Rodgers Nyangweso"
                  />
                </a>
              </div>
              <span className="name">Rodgers Nyangweso</span>
              <span className="our-team-border"></span>
              <p>Founder and Chief Executive Officer</p>'
            </div>
            <div className="border">
              <div className="picture">
                <a className="#">
                  <Image src={myPic} alt="Picture of Rodgers Nyangweso" />
                </a>
              </div>
              <span className="name">Rodgers Nyangweso</span>
              <span className="our-team-border"></span>
              <p>Co-Founder and Chief Technology Officer.</p>
            </div>
            <div className="border">
              <div className="picture">
                <a className="#">
                  <Image alt="Picture of Rodgers Nyangweso" />
                </a>
              </div>
              <span className="name">Rodgers Nyangweso</span>
              <span className="our-team-border"></span>
              <p>Chief Operations Officer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
