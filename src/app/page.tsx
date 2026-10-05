export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ATLAS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Next.js 15 + TypeScript + Tailwind CSS 4
          </p>
        </header>
        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-left hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold mb-2">App Router</h2>
            <p className="text-gray-600 dark:text-gray-300">File-based routing with layouts, loading, and error states</p>
          </article>
          <article className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-left hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold mb-2">TypeScript</h2>
            <p className="text-gray-600 dark:text-gray-300">Strict mode enabled with path aliases (@/*)</p>
          </article>
          <article className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-left hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold mb-2">Tailwind CSS</h2>
            <p className="text-gray-600 dark:text-gray-300">v4 with CSS-first config, dark mode, and JIT</p>
          </article>
          <article className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-left hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold mb-2">Turbopack</h2>
            <p className="text-gray-600 dark:text-gray-300">Fast builds and HMR powered by Rust</p>
          </article>
        </section>
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ready to build. <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-blue-600 dark:text-blue-400 font-mono">npm run dev</code>
          </p>
        </footer>
      </div>
    </main>
  );
}