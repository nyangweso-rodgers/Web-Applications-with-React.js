import Image from "next/image";

const Page = () => {
  return (
    <>
      <div>
        <Image 
        src={}
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
