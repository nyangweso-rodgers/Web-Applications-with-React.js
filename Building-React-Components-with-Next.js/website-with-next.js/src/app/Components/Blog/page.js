import Link from "next/link";
import "../../globals.css";
import styles from "../../page.module.css";
import Image from "next/image";
import nextImage from "../../../../public/next.js-image.jpg";
import reactImage from "../../../../public/react-image.png";

const Blog = () => {
  return (
    <>
      <section className="border border-primary">
        <div className="container-fluid">
          <div className="row text-center">
            <h2>Tech Blog</h2>
            <span className={styles.underlineBorder}></span>
          </div>
          <div className="row border border-dark">
            <div className="col-sm-4">
              <div className="card">
                <Image
                  src={nextImage}
                  alt="Next.js Image"
                  sizes={"100vw"}
                  quality={100}
                  layout="responsive"
                />
                <div className="card-body border border-warning">
                  <h4 className="card-title">Card title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <Image
                  src={reactImage}
                  alt="React.js Image"
                  sizes={"100vw"}
                  quality={100}
                  layout="responsive"
                />
                <div className="card-body border border-warning">
                  <h4 className="card-title">Card title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <Image
                  src={nextImage}
                  alt="Next.js Image"
                  sizes={"100vw"}
                  quality={100}
                  layout="responsive"
                />
                <div className="card-body border border-warning">
                  <h4 className="card-title">Card title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row border text-center">
            <div className="col">
              <Link href="../../Components/Blog/Posts">
                <button className={styles.myButton}>Load all posts</button>
              </Link>
            </div>
          </div>
          <div className="row border">
            <h2>Explore topics</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
