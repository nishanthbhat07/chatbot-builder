import { useGlobalContext } from "../../contexts/global-hooks";

// Website Header
export default function Header() {
  const { handleSaveChanges, isErrorSavingNode } = useGlobalContext();
  return (
    <header
      className={`h-4/5 p-4 bg-gray-300 flex flex-row px-30px ${
        isErrorSavingNode ? "justify-between" : "justify-end"
      } items-center w-auto`}
    >
      {isErrorSavingNode && (
        <h1 className="rounded p-1 px-3 bg-red-200 text-black font-semibold text-xs text-center items-center">
          Cannot Save Flow
        </h1>
      )}

      <button
        onClick={handleSaveChanges}
        className="outline rounded outline-1 bg-white hover:bg-slate-50 font-semibold text-blue-900 p-1 flex-row-reverse outline-blue-800"
      >
        Save Changes
      </button>
    </header>
  );
}
