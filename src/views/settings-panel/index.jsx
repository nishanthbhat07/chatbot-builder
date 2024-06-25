import { useEffect } from "react";
import SettingsNode from "../../components/settings-node";
import { useGlobalContext } from "../../contexts/global-hooks";

export default function SettingsPanel() {
  const {
    isNodeSettingsShown,
    setIsNodeSettingsShown,
    nodeValue,
    setNodeValue,
    nodes,
    currentNode,
  } = useGlobalContext();

  useEffect(() => {
    if (nodes?.length && currentNode) {
      const node = nodes?.find((item) => item.id === currentNode);
      setNodeValue(node?.data?.value);
    }
  }, [nodes, currentNode, setNodeValue]);

  if (isNodeSettingsShown) {
    return (
      <div className="w-1/5  border-slate-400 bg-white border-s-2 border-t-2">
        <nav className="border-b-2 flex flex-row  items-center  p-3 gap-5">
          <svg
            onClick={() => setIsNodeSettingsShown(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <p className="text-center">Message</p>
        </nav>
        <aside className="p-4 flex flex-col ">
          <span className="text-gray-400">Text</span>
          <textarea
            className="border-2"
            value={nodeValue}
            onChange={(e) => setNodeValue(e.target.value)}
          />
        </aside>
      </div>
    );
  }

  return (
    <div className="w-1/5  border-slate-400 bg-white border-s-2 border-t-2 p-3">
      <SettingsNode />
    </div>
  );
}
