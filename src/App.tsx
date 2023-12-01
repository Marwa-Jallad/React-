import { useState } from "react";
import Button from "./Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisable, setAlertVisibilty] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibilty(false)}>my Alert </Alert>
      )}
      <Button onClick={() => setAlertVisibilty(true)}>My Button</Button>
    </div>
  );
}
export default App;
