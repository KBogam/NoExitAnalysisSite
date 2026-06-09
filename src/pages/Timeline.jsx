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
              Garcin, Estelle, and Inez each arrive in a strange room, accompanied by a Valet. They expect torture, however, the room seems empty and plain. 
            </p>
          </div>
        </article>

        <article className="timeline-event">
          <span>02</span>
          <div>
            <h2>Rising Action</h2>
            <p>
              They try to understand why they were chosen to be put in the room together. As they talk, tensions begin to rise between each character. They each slowly begin to reveal their own backstories, showing exactly how they died and landed up in Hell. As they continue to talk with each other, their hidden flaws in their past lives begin to come to light. Inez realizes that the true torment will come not physically, but from each other's judgment.

            </p>
          </div>
        </article>

        <article className="timeline-event">
          <span>03</span>
          <div>
            <h2>Climax</h2>
            <p>
              The climax occurs when the door is opened, and Garcin is prompted to make a choice. He is given the option to either leave the room and go somewhere else, or to stay. With Garcin being very eager to leave at first, decides to stay simply due to his extreme fear of being called “cowardly” by Inez. His decision to stay reveals that he is trapped not by the room itself but by other’s judgment on him. 
            </p>
          </div>
        </article>

        <article className="timeline-event">
          <span>04</span>
          <div>
            <h2>Falling Action</h2>
            <p>
             When the door opens, the characters understand that escaping will never truly fix their internal problems. Each character soon goes back to their natural state of attention seeking, manipulation, and cowardness. They realize that they will always remain the same and emotionally dependent on each other forever.
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