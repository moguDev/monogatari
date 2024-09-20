export const ButtonAddMono = () => {
  return (
    <button
      className={`
            flex flex-col items-center justify-center w-full bg-black text-white rounded-md px-5 py2 mr-2
            border-2 border-black
            transition-all duration-300 hover:scale-105 hover:shadow-md`}
    >
      <span className="relative material-icons" style={{ fontSize: "124px" }}>
        <div className="absolute top-8 left-[42px] bg-white opacity-90 w-10 h-10"></div>
        <div className="absolute top-[42px] left-[16.1px] bg-white opacity-90 w-[15px] h-6"></div>
        <div className="absolute top-[42px] right-[16px] bg-white opacity-90 w-[15px] h-6"></div>
        view_carousel
      </span>
      <p className="font-buildingtracks text-5xl -translate-y-7">
        モノをポストする
      </p>
      <p className="text-xs -translate-y-4">
        思い入れや思い出が詰まっていて、手放すことができないモノはないですか？
        これからの活用方法をみんなに考えてもらいましょう！
      </p>
    </button>
  );
};
