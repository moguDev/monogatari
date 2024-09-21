export const Footer = () => {
  return (
    <footer className="lg:flex items-center justify-center w-full max-w-4xl mx-auto px-2 py-4">
      <p className="px-3 font-mono text-sm">
        © 2024 <span className="font-buildingtracks text-2xl">モノがたり</span>
        .com
      </p>
      <p className="translate-y-1.5 lg:block hidden">|</p>
      <p className="px-3 font-mono text-xs">
        Developed by
        <a
          href="https://x.com/mogu_57B"
          target="_blank"
          className="ml-0.5 font-buildingtracks text-blue-900 text-2xl underline"
        >
          もぐ<span className="text-lg">@RUNTEQ57期生</span>
        </a>
      </p>
    </footer>
  );
};
