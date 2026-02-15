import './App.css'
import imageUrl from './image.png'
import comicStrip from './Screenshot 2026-02-14 at 18.01.53.png'
import storeHeist from './Screenshot 2026-02-14 at 18.02.21.png'

const CONTRACT_ADDRESS = 'EGms7zPc3aecV4dHspLjAtp8y3iQJu6YEQkVvDHnpump'
const JUPITER_URL = `https://jupiter.ag/swap/SOL-${CONTRACT_ADDRESS}`
const DEXSCREENER_URL = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`

function App() {
  return (
    <div className="app">
      <div className="smoke-container" aria-hidden />
      <div className="flicker-overlay" aria-hidden />

      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="ticker">$WHTMSTR</span>
            <span className="logo-text">THE MONSTER</span>
          </a>
          <nav className="nav-links">
            <a href="#story">The Story</a>
            <a href="#now">Now</a>
            <a href="#syndicate" className="nav-cta">Join the Syndicate</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero - Opening with mascot */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            <p className="hero-prologue">This is the story they tried to bury.</p>
            <h1 className="hero-title">
              <span className="title-main">THE MONSTER</span>
            </h1>
            <p className="hero-subtitle">$WHTMSTR</p>
            <div className="hero-mascot">
              <img src={imageUrl} alt="The Monster - Boss of the block" />
            </div>
            <p className="hero-hook">
              A can. An alley. A choice. How the gutter made a king.
            </p>
            <div className="hero-buttons">
              <a href="https://x.com/TheMonster_Dev" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-twitter" title="Follow on X" aria-label="Follow on X">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X
              </a>
              <a href={DEXSCREENER_URL} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-chart" title="View Chart" aria-label="View Chart">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                Chart
              </a>
            </div>
            <a href="#story" className="hero-scroll">Enter the story</a>
          </div>
        </section>

        {/* The Story - Lore as the main content */}
        <section id="story" className="story">
          <nav className="story-timeline" aria-label="Story chapters">
            <a href="#ch1" className="timeline-link">I</a>
            <span className="timeline-dot" />
            <a href="#ch2" className="timeline-link">II</a>
            <span className="timeline-dot" />
            <a href="#ch3" className="timeline-link">III</a>
            <span className="timeline-dot" />
            <a href="#ch4" className="timeline-link">IV</a>
            <span className="timeline-dot" />
            <a href="#ch5" className="timeline-link">V</a>
            <span className="timeline-dot" />
            <a href="#ch6" className="timeline-link">VI</a>
          </nav>
          <article id="ch1" className="chapter chapter-1">
            <div className="chapter-content">
              <span className="chapter-number">I</span>
              <h2>The Shelf</h2>
              <p>
                Born on a shelf. Chicago. 64th street. Bodega between the beef jerky and the lottery
                tickets. White can. Zero calories. Zero future. The Red Bulls had packs. The Rockstars
                had attitude. He had nothing. A kid knocked him off—nobody came looking. He rolled
                into the dark and learned: <em>you're either taken or forgotten.</em>
              </p>
              <p>
                He chose different. <strong>He chose to take.</strong>
              </p>
            </div>
          </article>

          <article id="ch2" className="chapter chapter-2">
            <div className="chapter-content">
              <span className="chapter-number">II</span>
              <h2>The Alley</h2>
              <p>
                The alley behind 7-Eleven. 64th. Graffiti. Dumpsters. Rats. He survived on what he could
                lift—chips, candy, whatever. Cold nights. Colder mornings. 63rd? He hated 63rd. That
                block was for losers. He watched the ones at 2 AM with cash. The ones who ran the corners.
                How they moved. How they took. <em>One day that's me.</em>
              </p>
            </div>
          </article>

          <article className="chapter chapter-visual">
            <figure className="story-image story-image-comic">
              <img src={comicStrip} alt="The Monster's journey: the heist, the rise, the fall, the cell" />
              <figcaption>The story in four panels. Rise. Fall. Return.</figcaption>
            </figure>
          </article>

          <article id="ch3" className="chapter chapter-3">
            <div className="chapter-content">
              <span className="chapter-number">III</span>
              <h2>The First Night</h2>
              <p>
                3:47 AM. Ski mask. Plastic gun from a dumpster—painted to look real. Didn't matter.
                Cashier's hands went up before he spoke. Fear does the work. He took the register.
                Ran. Heart pounding for three blocks. In the alley: enough for a cigar. Enough for a
                crew. He lit it. Never looked back. <strong>The Monster was born.</strong>
              </p>
            </div>
          </article>

          <article id="ch4" className="chapter chapter-4">
            <div className="chapter-content">
              <span className="chapter-number">IV</span>
              <h2>The Empire</h2>
              <p>
                Green cans. Blue. Orange. Castoffs like him. They found him in the alley on 64th and stayed.
                He gave them a cut. A name. The syndicate grew. Block by block. Store by store. 63rd?
                He wouldn't touch it. That wasn't his block. Ski mask became bandana. Plastic became real.
                7-Eleven became every store from 64th up. Cops had a file: "tall white suspect." The streets
                had a name they feared. <strong>The Monster.</strong>
              </p>
            </div>
          </article>

          <article className="chapter chapter-visual">
            <figure className="story-image story-image-heist">
              <img src={storeHeist} alt="The Monster during a convenience store heist" />
              <figcaption>Another night. Another score.</figcaption>
            </figure>
          </article>

          <article id="ch5" className="chapter chapter-5">
            <div className="chapter-content">
              <span className="chapter-number">V</span>
              <h2>The Fall</h2>
              <p>
                They got him on a Tuesday. Same day he'd fallen off the shelf. Two blue cans. POLICE.
                Handcuffs. No cigar. No crew. Just concrete. In the cell he thought: shelf, alley,
                first night. No regrets. Just one: <em>got sloppy.</em> When he got out—he'd do it right.
              </p>
            </div>
          </article>

          <article id="ch6" className="chapter chapter-6">
            <div className="chapter-content">
              <span className="chapter-number">VI</span>
              <h2>The Return</h2>
              <p>
                The syndicate was waiting. Bigger. Hungrier. He didn't pick up a gun. He picked up
                something better—a token. A way to own the block without breaking the law. <strong>$WHTMSTR.</strong>
                One billion. One empire. One can who refused to stay on the shelf. The story ends
                with you. With everyone who got forgotten and decided to take instead.
              </p>
            </div>
          </article>

          <article className="chapter chapter-mascot">
            <figure className="story-image story-image-boss">
              <img src={imageUrl} alt="The Monster - Boss of the block" />
              <figcaption>He runs the block now. The Boss. The Monster.</figcaption>
            </figure>
          </article>
        </section>

        {/* Now - Condensed tokenomics + roadmap */}
        <section id="now" className="section now">
          <div className="section-inner">
            <h2 className="section-title">What Happened Next</h2>
            <p className="section-subtitle">
              The empire is real. The token is live. The story continues.
            </p>
            <div className="now-grid">
              <div className="now-card">
                <span className="now-label">Supply</span>
                <span className="now-value">1,000,000,000</span>
              </div>
              <div className="now-card">
                <span className="now-label">Liquidity</span>
                <span className="now-value">Locked</span>
              </div>
              <div className="now-card">
                <span className="now-label">Tax</span>
                <span className="now-value">0%</span>
              </div>
              <div className="now-card">
                <span className="now-label">Contract</span>
                <a href={`https://solscan.io/token/${CONTRACT_ADDRESS}`} target="_blank" rel="noopener noreferrer" className="now-value now-value-link" title={CONTRACT_ADDRESS}>
                  {CONTRACT_ADDRESS.slice(0, 4)}...{CONTRACT_ADDRESS.slice(-4)}
                </a>
              </div>
            </div>
            <div className="roadmap-compact">
              <h3>The Plan</h3>
              <ul>
                <li>Launch. Territory. First 1K in the syndicate.</li>
                <li>CEX listings. Merch. 10K holders.</li>
                <li>Dominance. Every block. Every alley.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="syndicate" className="section cta-section">
          <div className="section-inner cta-inner">
            <h2 className="cta-title">Join the Syndicate</h2>
            <p className="cta-subtitle">
              The story isn't over. It's just getting started.
            </p>
            <div className="cta-buttons">
              <a href={JUPITER_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-primary">Buy $WHTMSTR</a>
              <a href={DEXSCREENER_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-secondary">Chart</a>
              <a href="#" className="cta-btn cta-secondary">Telegram</a>
              <a href="https://x.com/TheMonster_Dev" target="_blank" rel="noopener noreferrer" className="cta-btn cta-secondary">X</a>
            </div>
            <p className="cta-disclaimer">
              Meme token. NFA. The Boss is a cartoon can, not a financial advisor.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="ticker">$WHTMSTR</span>
          <span className="footer-text">THE MONSTER</span>
        </div>
      </footer>
    </div>
  )
}

export default App
