import "./About.css";

const About = () => {
  return (
    <>
      <main className="border border-primary">
        <div className="container border border-secondary">
          <div className="row">
            <h2>About Rodgers Nyangweso</h2>
            <p>
              Data specialist at{" "}
              <a className="text-decoration-none" href="#">
                Kyosk Digital Services Ltd.
              </a>
            </p>
          </div>
          <div className="row">
            <div className="border border-primary p-2">
              <h3>Tech specializations</h3>
            </div>
            <div className="col border border-secondary p-5">
              <h3>Data Analytics</h3>
              <p>
                Unlocking full potential of data through accurate collection,
                storage, cleansing, analysis and visualizations.
              </p>
              <p>
                Using Google Looker Studio, Microsoft PowerBI, BigQuery and{" "}
                <code>Python</code>
              </p>
            </div>
            <div className="col border border-info p-5">
              <h3>Data Engineering</h3>
              <p>
                Database setup and configurations, building and maintaining data
                pipelines, and building data APIs.
              </p>
              <p>
                Tooling include: Apache Kafka, <code>Node.js</code>, MongoDB,
                PostgreSQL and Firebase.
              </p>
            </div>
            <div className="col border border-success p-5">
              <h3>Web Applications</h3>
              <p>Building Websites and Progressive Web Apps (PWAs)</p>
              <p>
                Tooling include: <code>React</code>, <code>Next.js</code>,{" "}
                <code>Bootstrap 5</code>, <code>JavaScript</code>,{" "}
                <code>HTML</code> and <code>css</code>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
