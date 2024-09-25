import { NewItemModal } from "./NewItemModal";

export const FloatingActionButton = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="fixed">
        <button
          type="button"
          onClick={() => {
            (
              document.getElementById("new_item_modal") as HTMLDialogElement
            ).showModal();
          }}
          className="bg-orange-400 text-white p-3 rounded-xl shadow-2xl active:scale-90 transition-all duration-300"
        >
          <p className="flex items-center text-sm font-bold">
            <span className="material-icons" style={{ fontWeight: "bolder" }}>
              add
            </span>
            <span className="font-buildingtracks text-2xl -translate-y-1.5">
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
