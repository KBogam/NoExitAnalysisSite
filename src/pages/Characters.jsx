import './pages.css'
import './Characters.css'

function Characters() {
  return (
    <main className="page characters-page">
      <h1>Characters</h1>

      <div className="character-row">
        <div className="character-label">Character 1</div>
        <div>
          <h2>Garcin</h2>
          <p>
            A journalist who's biggest weakness is guilt and the fear of being judged. He is eager for others
            to see him as brave, but he is haunted by his actions in his past life where he was ridiculed for being "cowardly". He is attracted to Estelle and pursues her throughout the play. 
          </p>
        </div>
      </div>

      <div className="character-row">
        <div className="character-label">Character 2</div>
        <div>
          <h2>Inez</h2>
          <p>
  The second prisoner and also the most cruel. She had been a postal clerk and claims that she is in hell for seducing her friend's wife. She died when her lover left the gas on when she was in the car, killing them both. She doesn’t like men, including Garcin, another character stuck in the room. However, she finds Estelle very attractive and tries to seduce her too. Though she is very controlling and manipulative, she admits her wrongs and accepts her consequences sooner than the other characters do. With her intelligence, she also understands the truth of their situation more quickly than the others and forces them to face uncomfortable realities. 
          </p>
        </div>
      </div>

      <div className="character-row">
        <div className="character-label">Character 3</div>
        <div>
          <h2>Estelle</h2>
          <p>
           The third and final prisoner who is also the most frightened. 
           She desperately wants to see her reflection in a mirror showing her deep insecurity with herself. Throughout the play, she doesn't take accountability for her past actions, and constantly seeks validation from others. She seeks attention especially from male figures like Garcin. 
          </p>
        </div>
      </div>

<section className="relationship-diagram">
  <h2>Character Relationship Web</h2>

  <div className="diagram-area">
    <svg className="arrow-layer" viewBox="0 0 1000 700">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="white" />
        </marker>
      </defs>

      <line x1="500" y1="180" x2="250" y2="450" className="arrow" />
      <line x1="280" y1="520" x2="720" y2="520" className="arrow" />
      <line x1="750" y1="450" x2="500" y2="180" className="arrow" />
    </svg>

    <div className="char-card garcin-card">
      <h3>Garcin</h3>
      <p>Needs validation and fears being judged a coward.</p>
    </div>

    <div className="char-card inez-card">
      <h3>Inez</h3>
      <p>Exposes the truth and refuses to comfort Garcin.</p>
    </div>

    <div className="char-card estelle-card">
      <h3>Estelle</h3>
      <p>Seeks attention and uses Garcin for approval.</p>
    </div>

    <div className="center-circle">
      Hell is<br />Other People
    </div>

    <div className="arrow-label label-1">
      Inez judges Garcin
    </div>

    <div className="arrow-label label-2">
      Estelle wants Garcin
    </div>

    <div className="arrow-label label-3">
      Inez wants Estelle
    </div>
  </div>
</section>

<a href="https://www.litcharts.com/lit/no-exit/characters" target="_blank" rel="noopener noreferrer">
    No Exit Character Analysis (LitCharts)
</a>
    </main>
  )
}

export default Characters