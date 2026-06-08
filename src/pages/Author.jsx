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

      <section className="author-grid">

        <article className="author-section">
          <h2>Biography</h2>

          <p>
Jean-Paul Sartre (born June 21, 1905, Paris, France—died April 15, 1980, Paris) was a French philosopher, novelist, and playwright, best known as the leading exponent of existentialism in the 20th century.
          </p>

          <p>
            Sartre studied at the prestigious École Normale Supérieure in
            Paris and later worked as a teacher before becoming a full-time
            writer. During World War II, he served in the French military,
            was captured in 1940, and spent about a year as a prisoner of war
            before being released.
          </p>
        </article>

        <article className="author-section">
          <h2>Philosophy</h2>

          <p>
            Sartre is best known for existentialism, a philosophy that
            emphasizes freedom, personal responsibility, and individual
            choice.
          </p>

          <p>
            He believed that people are responsible for creating meaning in
            their own lives through the decisions they make. Rather than
            having a predetermined purpose, individuals must define
            themselves through their actions.
          </p>

          <p>
            Sartre also argued that freedom carries responsibility. People
            cannot blame fate, society, or other people for their choices;
            they must accept responsibility for the lives they create.
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
            <li>He was one of the most famous existentialist thinkers in history.</li>
            <li>He declined the Nobel Prize in Literature in 1964.</li>
            <li>He maintained a lifelong intellectual partnership with Simone de Beauvoir.</li>
            <li>He believed that freedom and responsibility are inseparable.</li>
            <li>His ideas influenced philosophy, literature, politics, and psychology.</li>
          </ul>
        </article>

        <article className="author-section">
          <h2>Legacy</h2>

          <p>
            Sartre's writings continue to influence philosophers, writers,
            students, and scholars around the world. His exploration of
            freedom, responsibility, identity, and human relationships
            remains highly relevant today.
          </p>

          <p>
            When he died in 1980, approximately 25,000 people attended his
            funeral, demonstrating the enormous impact he had on modern
            thought and culture.
          </p>
        </article>

      </section>
    </main>
  )
}

export default Author