import './pages.css'
import './Themes.css'

function Themes() {
  return (
    <main className="page themes-page">
      <section className="themes-hero">
        <h1>Themes</h1>
        <p>
          <em>No Exit</em> explores how people suffer when they depend on others
          for approval, hide from the truth, and refuse responsibility.
        </p>
      </section>

      <section className="theme-grid">
        <article className="theme-card theme1">
          <img
            className="theme-image"
            src="https://eitan.bar/wp-content/uploads/2025/05/verses-bible-hell-585x390.jpg"
            alt="Hell symbolism"
          />

          <span className="theme-number">01</span>

          <div className="theme-content">
            <h2>Hell is Other People</h2>
            <p>
This theme reflects the existentialist belief that the presence of others can be a source of torment and self-alienation. 
This idea shows that some people may struggle with their own identities when confronted with the judgments and perceptions of those around them, leading to a sense of entrapment in social interactions.
            </p>

            <div className="theme-detail">
              <strong>Evidence:</strong> In the play, Garcin, Inez, and Estelle are trapped eternally with each other in a room. Due to how the room was set up, they were forced to see themselves through each other's eyes, which proved to be unbearable for them. With each character’s harsh judgment, they could only see the flaws within their past lives which created a sense of psychological torture.
            </div>
          </div>
        </article>

        <article className="theme-card theme2">
          <img
            className="theme-image"
            src="https://exploringyourmind.com/wp-content/uploads/2017/11/man-self-deception.jpg?auto=webp&quality=45&width=384&crop=16:9"
            alt="Self deception symbolism"
          />

          <span className="theme-number">02</span>

          <div className="theme-content">
            <h2>Self-Deception</h2>
            <p>
This theme is where people see the world around them in a distorted way to make themselves feel better.

            </p>

            <div className="theme-detail">
              <strong>Evidence:</strong> Throughout the entire play, each character lies to themselves about who they really are. One example of this is when Garcin insists that he is not a coward even though his past life proves otherwise. Another example can be seen when Estelle refuses to accept accountability for the damage she has done. Though swears that she doesn’t belong in Hell, in her past life, she has abandoned and harmed others for her own personal desires. 
            </div>
          </div>
        </article>

        <article className="theme-card theme3">
          <img
            className="theme-image"
            src="https://cognitiontoday.com/wp-content/uploads/2023/01/know-yourself.jpg"
            alt="Know yourself symbolism"
          />

          <span className="theme-number">03</span>

          <div className="theme-content">
            <h2>Identity Shaped by Others</h2>
            <p>
              This theme shows how people define themselves on how other people view them, rather than using their own understanding of who they are. 
            </p>

            <div className="theme-detail">
              <strong>Evidence:</strong> Throughout the play, Estelle and Garcin struggle to define who they are without other people’s validation. One example can be seen when Garcin depended on Estelle to call him brave, as he could not believe it himself without other people’s say. Another example is when Estelle relies on Garcin’s desire for her to feel valuable, showing her neediness for men’s attention. 
            </div>
          </div>
        </article>

        <article className="theme-card theme4">
          <img
            className="theme-image"
            src="https://thumbs.dreamstime.com/b/ethical-icon-moral-150861651.jpg"
            alt="Moral responsibility icon"
          />

          <span className="theme-number">04</span>

          <div className="theme-content">
            <h2>Moral Responsibility</h2>
            <p>
              The play argues that people are responsible for their choices, even
              when they try to excuse them.
            </p>

            <div className="theme-detail">
              <strong>Evidence:</strong> Throughout the entire play, each character is forced to confront their past actions and its consequences. One example of this is when Garcin is condemned by his colleagues for abandoning his moral duty during wartime, defining him as a coward. Another example is when Estelle is held accountable for her selfish and harmful actions, including abandoning and harming others in pursuit of her own desires. 
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Themes