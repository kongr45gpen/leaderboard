import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const result = trpc.greeting.useQuery({ name: 'client' });
  const utils = trpc.useContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-4xl font-bold">Leaderboard App</h1>
      </div>

      {(result.data) ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Hello, {result.data.text}!</h2>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => utils.greeting.invalidate()}
          >
            Refresh
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Loading...</h2>
        </div>
      )}


    </main>
  )
}
