export default function HeaderLayout({ children }) {
  return (
    <>
      <header className="border border-warning p-5">
        <h1>All posts</h1>
      </header>
      <section>{children}</section>
    </>
  );
}
