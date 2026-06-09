import './pages.css'
import './Author.css'

function Author() {
  return (
    <main className="page author-page">

      <section className="author-hero">
        <h1>Jean-Paul Sartre</h1>
        <p>
          Philosopher, novelist, playwright, and the leading figure of
          existentialism in the twentieth century.
        </p>
      </section>

      <section className="author-image-section">
        <img
          src="https://images.yourstory.com/cs/wordpress/2017/06/Jean-Paul-Sartre-1.jpg?mode=crop&crop=faces&ar=16:9&format=auto&w=3840&q=75"
          alt="Jean-Paul Sartre"
          className="author-image"
        />

        <p className="author-caption">
          Jean-Paul Sartre (1905–1980), French philosopher, novelist, playwright,
          and author of <i>No Exit</i>.
        </p>
      </section>

      <section className="author-grid">

        <article className="author-section">
          <h2>Biography</h2>

          <p>
Jean–Paul Sartre was born on June 21, 1905 in Paris, France. He died on April 15, 1980. He was a French philosopher, novelist, and playwright, most popular for his leading role in existentialism in the 20th century. 
          </p>

          <p>
            Sartre studied at the prestigious École Normale Supérieure in Paris
            and later worked as a teacher before becoming a full-time writer.
            During World War II, he served in the French military, was captured
            in 1940, and spent about a year as a prisoner of war before being
            released.
          </p>
        </article>

        <article className="author-section">
          <h2>Philosophy</h2>

          <p>
            Sartre is best known for existentialism, a philosophy that
            emphasizes freedom, personal responsibility, and individual choice.
          </p>

          <p>
            He believed that people are responsible for creating meaning in
            their own lives through the decisions they make. Rather than having
            a predetermined purpose, individuals must define themselves through
            their actions.
          </p>

          <p>
            Sartre also argued that freedom carries responsibility. People
            cannot blame fate, society, or other people for their choices; they
            must accept responsibility for the lives they create.
          </p>
        </article>

        <article className="author-section">
          <h2>Major Works</h2>

          <ul>
            <li><i>Nausea</i> (1938)</li>
            <li><i>Being and Nothingness</i> (1943)</li>
            <li><i>No Exit</i> (1944)</li>
            <li><i>Dirty Hands</i> (1948)</li>
          </ul>
        </article>

        <article className="author-section">
          <h2>Interesting Facts</h2>

          <ul>
            <li>Jean-Paul Sartre, a famous philosopher, declined the Nobel Prize, believed in individual freedom, and had a unique relationship with Simone de Beauvoir.</li>
            <li>He was an active participant in the French Resistance during World War II.</li>
            <li>Sartre popularized the phrase “Hell is other people.”</li>
            <li>Towards the end of his life, Jean-Paul Sartre began to describe himself as a "special kind" of anarchist.</li>
            <li>Sartre authored a seminal work of existentialist fiction, “Nausea.”</li>
          </ul>
        </article>

        <article className="author-section">
          <h2>Legacy</h2>

          <p>
    Sartre's work continues to influence modern day philosophers, writers, students, and scholars around the globe. His deep dive into freedom, responsibility, identity, and human relationships is still relevant to this day. When he died in 1980, about 25,000 people attended his funeral, showing how big of an impact he had on modern thought and culture.
          </p>
        </article>
<a href="https://philopedia.org/philosophers/jean-paul-sartre/#7-major-philosophical-works" target="_blank" rel="noopener noreferrer">
    Jean-Paul Sartre's Major Philosophical Works
</a>
      </section>

    </main>
  )
}

export default Author