import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-[family-name:var(--font-geist-sans)]">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Welcome to My Page</h1>
        <p className="text-xl mt-2">This is where the magic happens.</p>
      </header>
      <section className="bg-white text-black rounded-lg p-8 shadow-xl w-full sm:w-2/3">
        <h2 className="text-3xl font-semibold mb-4">About This Project</h2>
        <p className="text-lg">
          This is a dynamic page built with Next.js, designed to provide a modern and responsive layout.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
          Learn More
        </button>
      </section>
    </main>
  );
}

