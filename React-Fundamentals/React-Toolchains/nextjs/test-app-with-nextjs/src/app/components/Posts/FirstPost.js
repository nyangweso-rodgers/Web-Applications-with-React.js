import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>First Post! </h1>
          <h2>
            <Link href="/">Back home!</Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default FirstPost;
