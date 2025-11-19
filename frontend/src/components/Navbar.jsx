import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="w-full p-4 flex justify-between items-center bg-gray-950 shadow-xl border-b border-blue-500/20">
      <h1 className="text-2xl font-bold text-blue-400 tracking-wider">
        Companies Directory 🚀
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-800 text-blue-400 hover:bg-gray-700 hover:scale-105 transition-all"
      >
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>
    </div>
  );
};

export default Navbar;
