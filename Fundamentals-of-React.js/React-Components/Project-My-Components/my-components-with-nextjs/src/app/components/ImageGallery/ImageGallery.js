import "./ImageGallery.css";
import Image from "next/image";
import MyPic from "../../../../public/images/20230323_122421.jpg";

const ImageGallery = () => {
  return (
    <>
      <section className="image-gallery-section">
        <div className="container image-gallery-container">
          <div className="row">
            <h2>Image Gallery</h2>
            <span className="image-border"></span>
          </div>
          <div className="row justify-content-evenly">
            <div className="col img-col">
              <a className="" href="#">
                <Image
                  src={MyPic}
                  width={380}
                  height={280}
                  layout="responsive"
                  quality={80}
                  alt="Rodgers Pic"
                />
              </a>
              <div>
                <h3 className="name">Rodgers Nyangweso</h3>
                <p>Founder and Chief Executive Officer</p>
              </div>
            </div>
            <div className="col img-col">
              <a className="" href="#">
                <Image
                  src={MyPic}
                  width={380}
                  height={280}
                  layout="responsive"
                  quality={80}
                  alt="Rodgers Pic"
                />
              </a>
              <div>
                <h3 className="name">Rodgers Nyangweso</h3>
                <p>Co-Founder and Chief Technology Officer</p>
              </div>
            </div>
            <div className="col img-col">
              <a className="" href="#">
                <Image
                  src={MyPic}
                  width={380}
                  height={280}
                  layout="responsive"
                  quality={80}
                  alt="Rodgers Pic"
                />
              </a>
              <div>
                <h3 className="name">Rodgers Nyangweso</h3>
                <p>Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
