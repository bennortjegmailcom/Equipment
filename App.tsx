
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Welcome to Your New Page
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            This is a starting point. Feel free to edit and build upon this structure.
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 space-y-8">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-indigo-500 pb-3 mb-6">
              Editable Section
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              You can start editing the content right here in <code className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 font-mono text-sm text-indigo-600 dark:text-indigo-400">App.tsx</code>. The page is styled with Tailwind CSS, making it easy to create beautiful layouts.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Try changing this text or adding new components. The possibilities are endless.
            </p>
          </section>

          <section>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Next Steps
            </h3>
            <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li>Explore the file structure to understand the setup.</li>
              <li>Create new reusable components inside the <code className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 font-mono text-sm">components/</code> directory.</li>
              <li>Integrate with an API, like the Gemini API, in the <code className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 font-mono text-sm">services/</code> directory.</li>
              <li>Customize the Tailwind CSS theme to match your brand.</li>
            </ul>
          </section>

          <div className="text-center pt-6">
            <button
              type="button"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </main>
        
        <footer className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
          <p>Powered by React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
