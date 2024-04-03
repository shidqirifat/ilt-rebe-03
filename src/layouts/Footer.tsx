const Author = () => {
  return (
    <a
      href="https://shidqirifat-portofolio.vercel.app/"
      target="_blank"
      rel="noopener"
      className="text-slate-100 font-medium underline underline-offset-2"
    >
      Shidqi
    </a>
  );
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-3 bg-sky-600">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-white text-center">
          Dev by <Author />. Build for demo ILT REBE &copy; {year}.
        </h3>
      </div>
    </footer>
  );
}
