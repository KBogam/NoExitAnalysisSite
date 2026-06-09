import './pages.css'
import './Timeline.css'

function Timeline() {
  return (
    <main className="page timeline-page">
      <h1>Plot Timeline</h1>

      <section className="timeline">
        <article className="timeline-event">
          <span>01</span>
          <div>
            <h2>Beginning</h2>
            <p>
              Garcin arrives in a strange room in Hell. He expects torture, but
              the room looks ordinary.
            </p>
          </div>
        </article>

        <article className="timeline-event">
          <span>02</span>
          <div>
            <h2>Rising Action</h2>
            <p>
              Inez and Estelle arrive. The three characters slowly realize they
              are meant to punish each other.
            </p>
          </div>
        </article>

        <article className="timeline-event">
          <span>03</span>
          <div>
            <h2>Climax</h2>
            <p>
              Garcin realizes that the real torture is being trapped under the
              judgment of others: “Hell is other people.”
            </p>
          </div>
        </article>

        <article className="timeline-event">
          <span>04</span>
          <div>
            <h2>Falling Action</h2>
            <p>
              The door opens, but Garcin stays because he still needs Inez to
              see him as brave.
            </p>
          </div>
        </article>

        <article className="timeline-event">
          <span>05</span>
          <div>
            <h2>Resolution</h2>
            <p>
              The characters remain trapped together forever in a cycle of
              judgment, desire, and shame.
            </p>
          </div>
        </article>
      </section>
       <a href="https://www.coursehero.com/lit/No-Exit/plot-summary/" target="_blank" rel="noopener noreferrer">
    No Exit Plot Summary (Course Hero)
</a>
    </main>
  )
}

export default Timeline