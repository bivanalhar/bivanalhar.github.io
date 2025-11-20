import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { gameData, type GameData } from "../constants/gameData";
import { useTheme } from "../contexts/ThemeContext";

const Game = () => {
  const { theme, toggleTheme } = useTheme();
  const [inputNumber, setInputNumber] = useState<string>("");
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [selectedGameData, setSelectedGameData] = useState<GameData | null>(null);
  const [error, setError] = useState<string>("");
  const [stage, setStage] = useState<"input" | "result">("input");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Bivan - Game Night";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedInput = inputNumber.trim();
    const num = parseInt(trimmedInput, 10);
    const floatNum = parseFloat(trimmedInput);

    // Validate input: must be a valid integer between 1 and 48
    if (
      isNaN(num) ||
      num < 1 ||
      num > 48 ||
      num !== floatNum || // Ensures it's an integer (not a decimal)
      trimmedInput === ""
    ) {
      setError("Please enter a valid integer between 1 and 48");
      setSelectedNumber(null);
      setSelectedGameData(null);
      return;
    }

    // Fetch data from constants
    const data = gameData[num];
    if (!data) {
      setError("Data not found for this number");
      setSelectedNumber(null);
      setSelectedGameData(null);
      return;
    }

    setIsLoading(true);
    timerRef.current = window.setTimeout(() => {
      setSelectedNumber(num);
      setSelectedGameData(data);
      setStage("result");
      setIsLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setStage("input");
    setSelectedNumber(null);
    setSelectedGameData(null);
    setInputNumber("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-10 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg
            className="w-5 h-5 text-slate-600 dark:text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-slate-600 dark:text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      <div className="w-full max-w-4xl mx-auto py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            We all are Friends!!!
          </h1>
        </div>

        {stage === "input" && (
          <div className="space-y-10">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 max-w-xl mx-auto relative overflow-hidden">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  1
                </span>
                Select the number you just picked!
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    placeholder="Enter number (1-48)"
                    min="1"
                    max="48"
                    step="1"
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-70"
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg disabled:opacity-70 disabled:hover:scale-100"
                  disabled={isLoading}
                >
                  Proceed
                </button>
              </form>

              {isLoading && (
                <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-300">
                    <div className="h-12 w-12 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
                    <p className="text-sm font-medium">Preparing your question...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {stage === "result" && selectedNumber !== null && selectedGameData !== null && (
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="inline-flex flex-col items-center">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2">
                  Chosen Number
                </span>
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-[0_20px_45px_rgba(79,70,229,0.45)]">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">
                    {selectedNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div
                className={`rounded-2xl shadow-xl p-8 border transition-all ${
                  selectedGameData?.level === 1
                    ? "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/40 dark:to-orange-950/40 border-amber-200/60 dark:border-amber-800/60"
                    : selectedGameData?.level === 2
                    ? "bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 dark:from-purple-950/60 dark:via-pink-950/60 dark:to-rose-950/60 border-purple-300/60 dark:border-purple-700/60"
                    : "bg-gradient-to-br from-blue-200 via-indigo-200 to-violet-200 dark:from-blue-950/80 dark:via-indigo-950/80 dark:to-violet-950/80 border-blue-400/60 dark:border-blue-600/60"
                }`}
              >
                <div className="min-h-[120px] flex items-center justify-center">
                  <p
                    className={`text-lg text-center font-medium ${
                      selectedGameData?.level === 1
                        ? "text-amber-900 dark:text-amber-100"
                        : selectedGameData?.level === 2
                        ? "text-purple-900 dark:text-purple-100"
                        : "text-blue-900 dark:text-blue-100"
                    }`}
                  >
                    {selectedGameData?.question || ""}
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full md:w-auto px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Back to number input
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;

