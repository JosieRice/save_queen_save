import Auth from "./Auth";
import useAuthContext from "./useAuthContext";

const App = () => {
  const { AuthContext, loggedIn } = useAuthContext();

  return (
    <AuthContext.Provider value={loggedIn}>
      {loggedIn === null && <div>loading</div>}
      {loggedIn !== null && (
        <div>
          <header>
            <p>Save Queen Save coming soon</p>
          </header>
          <Auth />
        </div>
      )}
    </AuthContext.Provider>
  );
};

export default App;
