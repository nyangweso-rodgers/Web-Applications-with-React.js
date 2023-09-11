import "./ImageGallery.css";
import Image from "next/image";
import MyPic from "../../../../public/images/20230323_122421.jpg";

const ImageGallery = () => {
  return (
    <>
      <section className="image-gallery-container">
        <div className="row border">
            <h2>Image Gallery</h2>
            <span className="image-border"></span>
        </div>
        <div className="container border p-5">
          <div className="d-flex flex-row justify-content-evenly">
            <div>
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
            </div>
            <div>
              <a className="" href="#">
                <Image
                  src={MyPic}
                  width={380}
                  height={280}
                  quality={80}
                  layout="responsive"
                  alt="Rodgers Pic"
                />
              </a>
            </div>
            <div>
              <a className="" href="#">
                <Image
                  src={MyPic}
                  width={380}
                  height={280}
                  quality={80}
                  layout="responsive"
                  alt="Rodgers Pic"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
