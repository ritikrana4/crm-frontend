import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Entry } from "./pages/entry/Entry.page";

function App() {
  return (
    <div>
      <DefaultLayout>
        <Entry/>
      </DefaultLayout>
    </div>
  );
}

export default App;
