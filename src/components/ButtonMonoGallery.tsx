export const ButtonMonoGallery = () => {
  return (
    <button
      className={`
            flex items-center justify-center w-full bg-white bg-opacity-30 text-black rounded-md
            transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:shadow
            active:brightness-100 active:translate-y-0 active:shadow-none`}
    >
      <span className="relative material-icons" style={{ fontSize: "124px" }}>
        <div className="absolute top-8 left-[42px] bg-white opacity-90 w-10 h-10"></div>
        <div className="absolute top-[42px] left-[16.1px] bg-white opacity-90 w-[15px] h-6"></div>
        <div className="absolute top-[42px] right-[16px] bg-white opacity-90 w-[15px] h-6"></div>
        view_carousel
      </span>
      <div className="ml-2 flex flex-col justify-center items-start">
        <p className="font-buildingtracks text-5xl -translate-y-3">
          モノぎゃらりー
        </p>
        <p className="text-xs -translate-y-1">
          みんなの手放せないモノの一覧がみれます
        </p>
      </div>
    </button>
  );
};
