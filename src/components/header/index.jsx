import { useGlobalContext } from "../../contexts/global-hooks";

export default function Header() {
  const { handleSaveChanges } = useGlobalContext();
  return (
    <header className="h-4/5 p-4 bg-gray-300 flex flex-row-reverse px-30px">
      <button
        onClick={handleSaveChanges}
        className="outline rounded outline-1 bg-white hover:bg-slate-50 font-semibold text-blue-900 p-1 flex-row-reverse outline-blue-800"
      >
        Save Changes
      </button>
    </header>
  );
}
