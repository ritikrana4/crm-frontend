import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";

import { Entry } from "./pages/entry/Entry.page";

function App() {
  return (
    <div>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
