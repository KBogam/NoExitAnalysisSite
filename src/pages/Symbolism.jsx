import './pages.css'
import './Symbolism.css'

function Symbolism() {
  const symbols = [
    {
      className: 'symbol1',
      title: 'The Drawing Room',
      image:
        'https://clickamericana.com/wp-content/uploads/Heres-what-a-simple-1940s-style-living-room-makeover-looked-like-1536x1229.jpg',
      symbol: 'The room where Garcin, Inez, and Estelle are trapped.',
      meaning:
        'The room symbolizes psychological imprisonment. There are no flames or physical forms of torture, only the constant pressure from the other characters.',
      evidence:
        'The characters cannot leave and must spend eternity confronting one another.',
      impact:
        'It reinforces the idea that people can be trapped by their choices and by the judgment of others.',
    },
    {
      className: 'symbol2',
      title: 'The Locked Door',
      image:
        'https://png.pngtree.com/background/20230701/original/pngtree-locked-wooden-door-with-padlock-access-metal-mystery-photo-picture-image_4108893.jpg',
      symbol: 'The door that keeps the characters confined.',
      meaning:
        'The locked door represents the inability to escape past actions and mistakes.',
      evidence:
        'Even when escape seems possible, the characters remain emotionally trapped.',
      impact:
        'It emphasizes personal responsibility and the consequences of choices.',
    },
    {
      className: 'symbol3',
      title: 'The Absence of Mirrors',
      image:
        'https://i.pinimg.com/originals/65/01/6c/65016cb1b31b4c20e687239475186c7f.jpg',
      symbol: 'There are no mirrors in the room.',
      meaning:
        'The missing mirrors show that the characters depend on others to define themselves.',
      evidence:
        'Estelle asks others how she looks because she cannot see herself.',
      impact:
        'It supports the theme that people often rely on others’ opinions to understand themselves.',
    },
    {
      className: 'symbol4',
      title: 'The Bronze Statue',
      image:
        'https://www.arturbanstatue.com/wp-content/uploads/2024/06/1-35-480x480.jpg',
      symbol: 'A bronze statue placed in the room.',
      meaning:
        'The statue symbolizes permanence and the inability to change. Just as the statue remains fixed and unchanging, the characters are trapped forever with the consequences of their actions.',
      evidence:
        'Garcin frequently notices the statue, which remains motionless and unchanged throughout the play.',
      impact:
        'The statue reinforces the existentialist idea that the characters must live forever with the identities they created through their choices.',
    },
  ]

  return (
    <main className="page symbolism-page">
      <section className="symbolism-hero">
        <h1>Symbolism</h1>
        <p>
          In <em>No Exit</em>, ordinary objects become symbols of guilt,
          judgment, and psychological imprisonment.
        </p>
      </section>

      <section className="symbolism-grid">
        {symbols.map((item, index) => (
          <article
            className={`symbol-card ${item.className}`}
            key={item.title}
          >
            <div className="symbol-image-wrap">
              <img src={item.image} alt={item.title} />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="symbol-content">
              <h2>{item.title}</h2>

              <p><strong>Symbol:</strong> {item.symbol}</p>
              <p><strong>Meaning:</strong> {item.meaning}</p>
              <p><strong>Evidence:</strong> {item.evidence}</p>
              <p><strong>Impact on Theme:</strong> {item.impact}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Symbolism