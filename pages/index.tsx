import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <div>
        <h1 className="font-extrabold w-full text-center text-4xl">Just Me</h1>
        <ul className="mt-4 space-y-4 list-none text-center list-inside text-gray-400">
          <li>TailwindCSS</li>
          <li>Nextjs</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
