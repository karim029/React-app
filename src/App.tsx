import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertState, setAlertState] = useState(false);
  return (
    <>
      <div>
        {alertState && (
          <Alert
            onclose={() => {
              setAlertState(false);
            }}
          >
            Hi
          </Alert>
        )}
        <Button
          children="Hello"
          color="secondary"
          onClick={() => {
            setAlertState(true);
          }}
        ></Button>
      </div>
    </>
  );
}

export default App;
