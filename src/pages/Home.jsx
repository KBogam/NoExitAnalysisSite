import './pages.css'
import './Home.css'

function Home() {
  return (
    <main className="page home-page">
      <section className="home-hero">
        <div className="home-text">
          <h1>No Exit</h1>
          <h2>Interactive Literary Analysis</h2>

          <p className="author">Author: Jean-Paul Sartre</p>

          <p>
            Welcome to this interactive literary analysis of <i>No Exit</i>. In this website you will learn about 
            the book's author, plot, characters, themes, and much more. If your interested in reading this book, this site can 
            help you evaluate if its right for you.
          </p>
        </div>

        <img
          className="book-cover"
          src="https://th.bing.com/th/id/OIP.s3GJOd8av3x3aj9oewZRnQAAAA?w=201&h=310&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="No Exit Book Cover"
        />
      </section>
    </main>
  )
}

export default Home