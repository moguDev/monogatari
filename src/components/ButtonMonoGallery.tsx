export const ButtonMonoGallery = () => {
  return (
    <div
      className={`
            flex items-center w-full bg-white bg-opacity-30 text-black rounded-md lg:p-4 p-2`}
    >
      <span
        className="relative material-icons mr-1"
        style={{ fontSize: "44px" }}
      >
        <div className="absolute top-3 left-[15px] bg-white w-3.5 h-3.5" />
        <div className="absolute top-[15.5px] left-[5.5px] bg-white w-[5.4px] h-2" />
        <div className="absolute top-[15.5px] right-[5.5px] bg-white w-[5.4px] h-2" />
        view_carousel
      </span>
      <p className="font-buildingtracks text-3xl -translate-y-1.5">
        モノぎゃらりー
      </p>
    </div>
  );
};
