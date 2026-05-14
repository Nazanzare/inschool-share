import Header from "./Header";

export default function PageShell({ children, className = "" }) {
  return (
    <>
      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <Header />
      </div>
      <main className={`mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </main>
    </>
  );
}
