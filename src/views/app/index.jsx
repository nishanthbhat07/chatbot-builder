import Flow from "../../components/flow";
import SettingsPanel from "../settings-panel";

export default function App() {
  return (
    <section className="flex flex-row">
      <div className="w-4/5 flow-container">
        <Flow />
      </div>
      <SettingsPanel />
    </section>
  );
}
