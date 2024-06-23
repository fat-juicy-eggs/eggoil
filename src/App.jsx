import { Contact, Experience, Hero, Portfolio } from "./components"

function App() {
  return (
    <section className='relative z-0'>
      <div className='wrapper'>
        <div className='z-10'>
          <Hero />
        </div>
        <div className='relative z-30 bg-primary mt-[-2px]'>
          <Portfolio />
        </div>
        <div className='relative z-30 bg-primary'>
          <Experience />
        </div>
      </div>
    </section>
  )
}

export default App
