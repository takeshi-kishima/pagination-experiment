import "./App.css";
import PaginateTest from "./fueru/PaginateTest";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <main>
          <PaginateTest itemsPerPage={3} />
        </main>
        <footer>ですよね</footer>
      </div>
    </>
  );
}

export default App;
