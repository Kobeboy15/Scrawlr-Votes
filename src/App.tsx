import { useEffect, useState } from "react";
import "./App.css";
import UpvoteComponent from "./components/UpvoteComponent";
import { VoteProvider } from "./context/UpvoteContext";
import { ThemeIcon } from "./components/Icons";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  // Handles Dark / Light Theme //
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setIsDarkTheme(localStorage.getItem("theme") == "light" ? false : true);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <VoteProvider>
      <main
        className={`${
          isDarkTheme && "dark"
        } flex flex-col items-center justify-center min-h-screen bg-slate-100 dark:bg-zinc-900 px-4 py-7 transition-colors duration-300`}
      >
        <button
          onClick={() => {
            setIsDarkTheme((prev) => !prev);
            localStorage.setItem("theme", !isDarkTheme ? "dark" : "light");
          }}
          className="absolute top-0 right-0 p-4 outline-none dark:text-white text-black/70"
        >
          <ThemeIcon />
        </button>
        <UpvoteComponent />
      </main>
    </VoteProvider>
  );
}

export default App;
