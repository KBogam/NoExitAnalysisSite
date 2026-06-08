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
          <span>01</span>
          <h2>Genre</h2>
          <p>
            <i>No Exit</i>  is an existentialist play that falls under philosophical drama. Its heavily associated with absurdist and existentialist theatre as it goes over major themes such as freedom, self-sabotage, and the nature of human relationships. 
          </p>
        </article>

        <article className="about-section about2">
          <span>02</span>
          <h2>Summary</h2>
          <p>
             The book, <i>No Exit</i>,  is about three different people who are sent to a room in hell after their deaths. These people—Inez, Garcin, and Estelle, are prepared for the worst knowing that eternal physical punishment awaits them. However, with the room being plain and pretty much harmless, they suspect that the torment may come in a non-physical form, creating unease within the room. As the story progresses, the tensions between the characters start to rise as arguments break out constantly. One by one, each character ends up revealing their past sins that have landed them in hell. As they admit to their past crimes, they begin to understand that their suffering comes from the judgement of one another. By the end of the story, the characters make a chilling discovery that they themselves are each other's punishment, leading to Sartre's famous idea that "hell is other people".  
          </p>
        </article>

        <article className="about-section about3">
          <span>03</span>
          <h2>Why the Book Is Significant</h2>
          <p>
            The play is famous for the line “Hell is other people.” It remains as one of the most memorable parts of the book and as an influential work of existentialist literature, as it displays how people can be trapped by their own choices and by the way others perceive them.
          </p>
        </article>
      </section>
    </main>
  )
}

export default AboutBook