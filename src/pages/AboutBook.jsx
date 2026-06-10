import './pages.css'
import './AboutBook.css'

function AboutBook() {
  return (
    <main className="page about-book-page">
      <section className="about-hero">
        <h1>About the Book</h1>
        <p>
          A closer look at the genre, story, and importance of Jean-Paul Sartre’s
          <i> No Exit</i>.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-section about1">
     
          <h2>Genre</h2>
          <p>
            <i>No Exit</i>  is an existentialist play that falls under philosophical drama. Its heavily associated with absurdist and existentialist theatre as it goes over major themes such as freedom, self-sabotage, and the nature of human relationships. 
          </p>
        </article>

        <article className="about-section about2">

          <h2>Summary</h2>
          <p>
             The book, <i>No Exit</i>,  is about three different people who after dying, are sent to a room in hell with eachother. These characters being Inez, Garcin, and Estelle, are prepared for the worst, thinking that eternal physical torment awaits them. However, with the room being plain and pretty much harmless, they suspect that the torment may come in a non-physical form, creating an eerie vibe within the room. As the story progresses, the tensions between the characters start to rise as arguments break out constantly. One by one, each character ends up revealing their backstories and past crimes. As they admit to their sins, they begin to understand that their suffering comes from the judgement of one another. By the end of the story, the characters make a chilling discovery that they themselves are each other's punishment, leading to Sartre's famous quote, "hell is other people". 
          </p>
        </article>

        <article className="about-section about3">
   
          <h2>Why the Book Is Significant</h2>
          <p>
            The play is famous for the line “Hell is other people.” It remains as one of the most memorable parts of the book and as an influential work of existentialist literature, as it displays how people can be trapped by their own choices and by the way others perceive them.
          </p>
        </article>
      </section>

      <a href="https://www.coursehero.com/lit/No-Exit/" target="_blank" rel="noopener noreferrer">
    No Exit Study Guide (Course Hero)
</a>
    </main>
  )
}

export default AboutBook