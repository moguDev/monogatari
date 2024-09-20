export const Header = () => {
  return (
    <header className="fixed top-0 md:flex items-center h-16 mx-auto px-2 md:pt-7 pb-10 w-full max-w-4xl text-black select-none border-b border-black bg-theme">
      <div className="relative md:text-6xl text-4xl w-max font-buildingtracks">
        <h1 className="font-bold">
          モノ<span className="opacity-95">がたり</span>
        </h1>
        <h1 className="font-bold absolute top-0 translate-x-1 translate-y-0.5 opacity-20">
          モノがたり
        </h1>
      </div>
      <p className="h-full md:p-2 md:text-xl text-md font-buildingtracks">
        捨てられない<span className="md:text-2xl text-xl">「モノ」</span>
        の使い道をみんなで考えるアプリ
      </p>
    </header>
  );
};
