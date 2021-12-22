import SignIn from "./SignIn";
import NavBar from "./NavBar";
import useAuthContext from "./useAuthContext";

const App = () => {
  const { AuthContext, loggedIn } = useAuthContext();

  return (
    <AuthContext.Provider value={loggedIn}>
      {loggedIn === null && <div>loading</div>}
      {loggedIn !== null && (
        <>
          <NavBar />
          <header style={{ textAlign: "center" }}>
            <h1>Save Queen Save</h1>
            <h2>Sit back and relax while we check for sales.</h2>
          </header>
          <SignIn />
        </>
      )}
    </AuthContext.Provider>
  );
};

export default App;
