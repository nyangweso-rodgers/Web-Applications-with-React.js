import Link from "next/link";

const About = () => {
  return (
    <>
      <main className="">
        <div className="container">
          <div className="row border p-5"></div>
          <div className="row">
            <div className="col">
              <button className="btn btn-lg btn-success">
                <Link href="#">Get in touch</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
