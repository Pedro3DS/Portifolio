// LoadingScreen.tsx
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake delay to simulate loading (e.g. images, API, etc.)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute min-h-screen scroll-none">
      {/* Main content */}
      <div
        className={`transition-all duration-700 ${
          isLoading ? "blur-lg scale-105" : "blur-0 scale-100"
        }`}
      >
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 transition-opacity duration-700">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-400 border-solid"></div>
        </div>
      )}
    </div>
  );
}
