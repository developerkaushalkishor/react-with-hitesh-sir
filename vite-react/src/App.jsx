import Load from "./load";
function App() {
  const user = "'user form created new user'";
  return (
    <>
      <h1>
        React with vite | Kaushal {user}
        {/*NOTE: {user} this is expression full name is evailuated expression "evaluate expression" and we cannot write JS in expression */}
      </h1>
      <Load />
    </>
  );
}
export default App;
