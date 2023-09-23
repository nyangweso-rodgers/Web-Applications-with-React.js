import Link from "next/link";
import "../../globals.css";
import styles from "../../page.module.css";

const Blog = () => {
  return (
    <>
      <section className="border border-primary">
        <div className="container border">
          <div className="row border text-center">
            <h2>Tech Blog</h2>
            <span className={styles.underlineBorder}></span>
          </div>
          <div className="row border">
            <div className="col border border-warning">
              <Link href="../../Components/Posts">
                <button className={styles.myButton}>All posts</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
