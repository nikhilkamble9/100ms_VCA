import "./App.css";
import Preview from "./components/Preview";
import { useHMSActions } from "@100mslive/react-sdk";

function App() {
  const hmsActions = useHMSActions();
  const endPoint =
    "https://prod-in2.100ms.live/hmsapi/coachtoplatform.app.100ms.live";
  const getToken = async (user_id) => {
    const response = await fetch(`${endPoint}/api/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id,
        role: "host",
        type: "app",
        room_id: "629e1aba2630221c75a3d94a",
      }),
    });
    const { token } = await response.json();
    return token;
  };
  const handlesubmit = async (userName) => {
    const token = await getToken(userName);
    const config = {
      userName,
      authToken: token, // client-side token generated from your token service
      settings: {
        isAudioMuted: false,
        isVideoMuted: false,
      },
      metaData: JSON.stringify(),
      rememberDeviceSelection: true, // remember manual device change
    };
    hmsActions.join(config);
  };
  return (
    <div className="App">
      <h1>Video Conference App</h1>
      <Preview handlesubmit={handlesubmit} />
    </div>
  );
}

export default App;
