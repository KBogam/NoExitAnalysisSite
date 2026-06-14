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
             The book <i>"No Exit",</i>  is about three different people who after dying are sent to a room in hell with each other. The characters Inez, Garcin, and Estelle are prepared for the worst, thinking that eternal damnation awaits them in Hell. However, they are shocked when they arrive in an ordinary and seemingly harmless looking room. They suspect that the torment may come in an unexpected form later on, creating a tense vibe within the room. As the characters start interacting with each other, tensions between them start to rise as arguments break out constantly. As the story progresses, they end up confronting and judging each other's present and past actions, creating conflict between one another. One by one, each character ends up revealing their backstories and past crimes. By the end of the story, they begin to realize that their placement together was no accident. Through their interactions, they discover the true purpose of their confinement: to serve as one another's tormentor.

 
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