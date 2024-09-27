import { NewItemModal } from "./NewItemModal";

export const FloatingActionButton = () => {
  return (
    <div className="relative max-w-4xl mx-auto flex flex-row-reverse">
      <div className="fixed bottom-0 my-3">
        {" "}
        <button
          type="button"
          onClick={() => {
            (
              document.getElementById("new_item_modal") as HTMLDialogElement
            ).showModal();
          }}
          className="bg-orange-500 text-white p-3 rounded-md shadow-2xl active:scale-90 transition-all duration-300"
        >
          <p className="flex items-center lg:text-base text-xs font-bold">
            <span className="material-icons" style={{ fontWeight: "bolder" }}>
              add
            </span>
            <span className="font-buildingtracks lg:text-3xl text-xl lg:-translate-y-[7px] -translate-y-1">
              モノがたり
            </span>
            を作成
          </p>
        </button>
      </div>
      <NewItemModal />
    </div>
  );
};
