import Image from "next/image";
import nextImage from '../../../../public/next.js-image.jpg';

const Page = () => {
  return (
    <>
      <div>
        <Image 
        src={nextImage}
        alt="First Image"
        quality={100}
        placeholder="blur"
        sizes={"100vw"}
        fill
        style={{
            objectFit: "cover",
        }}
        />
      </div>
    </>
  );
};

export default Page;
