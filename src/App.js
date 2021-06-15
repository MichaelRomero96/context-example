
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { MainProvider } from "./context/mainContext";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <MainProvider>
      <UserProvider>
        {/* pasando mediante props */}
        {/* <NavBar setUser={setUser} />
      <Body user={user} /> */}
        <NavBar />
        <Body />
      </UserProvider>
    </MainProvider>
  );
}

export default App;
