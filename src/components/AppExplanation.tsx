export const AppExplanation = () => {
  return (
    <div className="bg-white bg-opacity-50 rounded-md lg:p-4 p-2">
      <div className="flex items-center justify-between border-b border-black">
        <h2 className="flex items-center w-full">
          <span className="font-buildingtracks text-4xl -translate-y-2.5 relative">
            <span className="absolute top-0.5 left-0.5 opacity-20 w-full">
              モノがたり
            </span>
            モノがたり
          </span>
          とは
          <span
            className="material-icons -translate-y-1 -translate-x-1 rotate-2"
            style={{ fontWeight: "bolder" }}
          >
            question_mark
          </span>
        </h2>
        <p className="font-buildingtracks text-sm w-full text-end">
          About this app.
        </p>
      </div>
      <section className="p-2">
        <p className="py-1">
          思い出が詰まっていて捨てられない、けれど使い道に困っている。そんなモノはありませんか？？？
        </p>
        <p className="py-1">
          「モノがたり」は、そんなモノの写真と思い出を語り、みんなで新しい活用方法を考えるアプリケーションです！
        </p>
        <p className="py-1">
          大切なモノの新しい「物語」を一緒に見つけましょう！！
        </p>
      </section>
    </div>
  );
};
