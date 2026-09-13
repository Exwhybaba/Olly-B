import { ArrowRight, CalendarDays, Check, ChefHat, Flame, MessageCircle, Phone, Sparkles, UtensilsCrossed } from './Icons'

const whatsappNumber = '2348022840231'
const whatsappText = encodeURIComponent(
  'Hello Olly B Kitchen, I would like to place an order / make an enquiry.'
)

const menuItems = [
  { name: 'Jollof Rice', note: 'Bold, smoky Nigerian favourite', icon: 'JR' },
  { name: 'Fried Rice', note: 'Colourful, savoury and satisfying', icon: 'FR' },
  { name: 'Ofada Rice', note: 'Local classic with rich character', icon: 'OR' },
  { name: 'White Rice', note: 'Simple, comforting and versatile', icon: 'WR' },
  { name: 'Rice & Beans', note: 'A wholesome everyday combination', icon: 'RB' },
  { name: 'Yam & Egg', note: 'Hearty yam served with egg sauce', icon: 'YE' },
  { name: 'Porridge', note: 'Warm, homestyle comfort food', icon: 'PO' },
  { name: 'Ewa Agayin', note: 'Beans with a deeply flavoured sauce', icon: 'EA' },
  { name: 'Barbecue', note: 'Smoky, grilled and made to satisfy', icon: 'BB' },
  { name: 'Asun', note: 'Spicy grilled meat with bold flavour', icon: 'AS' },
]

const phones = ['08022840231', '08105566201', '09058226498']

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="Olly B Kitchen">
      <div className="brand__seal"><ChefHat size={compact ? 16 : 22} strokeWidth={2.1} /></div>
      <div>
        <strong>Olly B</strong>
        <span>Kitchen</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="logo-link" href="#top" aria-label="Olly B Kitchen home">
            <BrandMark compact />
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#menu">Menu</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="button button--small button--gold"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> Order on WhatsApp
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="eyebrow"><Sparkles size={15} /> Nigerian meals made for good moments</div>
            <h1>
              Great food.
              <span>Made to feel like home.</span>
            </h1>
            <p>
              From rich Jollof Rice and Ofada Rice to smoky Barbecue and spicy Asun, Olly B Kitchen serves satisfying Nigerian favourites for everyday orders and party events.
            </p>
            <div className="hero__actions">
              <a
                className="button button--gold"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} /> Order on WhatsApp <ArrowRight size={18} />
              </a>
              <a className="button button--ghost" href="#menu">
                View our menu
              </a>
            </div>
            <div className="hero__proof">
              <div><Check size={17} /> Freshly prepared</div>
              <div><Check size={17} /> Great taste</div>
              <div><Check size={17} /> Party-ready</div>
            </div>
          </div>

          <div className="hero__visual" aria-label="Olly B Kitchen food showcase">
            <div className="hero__image-shell">
              <img src="/olly-catering-flyer.png" alt="Olly B Kitchen Nigerian food and catering showcase" />
            </div>
            <div className="floating-card floating-card--top">
              <Flame size={19} />
              <div><b>Smoky favourites</b><span>Barbecue & Asun</span></div>
            </div>
            <div className="floating-card floating-card--bottom">
              <CalendarDays size={19} />
              <div><b>Planning an event?</b><span>We cater for parties</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Olly B Kitchen highlights">
        <div className="container strip__grid">
          <div><span>01</span><b>Everyday favourites</b><small>Rice, yam, beans & more</small></div>
          <div><span>02</span><b>Bold Nigerian flavours</b><small>Comforting, familiar, satisfying</small></div>
          <div><span>03</span><b>Party catering</b><small>Food that brings people together</small></div>
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow--dark"><UtensilsCrossed size={15} /> Explore the kitchen</div>
              <h2>A menu full of Nigerian favourites.</h2>
            </div>
            <p>Choose from comforting rice dishes, hearty classics and fire-grilled favourites prepared for everyday enjoyment and special occasions.</p>
          </div>

          <div className="menu-layout">
            <div className="menu-grid">
              {menuItems.map((item, index) => (
                <article className={`menu-card ${index === 0 || index === 8 ? 'menu-card--feature' : ''}`} key={item.name}>
                  <div className="menu-card__icon">{item.icon}</div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.note}</p>
                  </div>
                  <span className="menu-card__number">{String(index + 1).padStart(2, '0')}</span>
                </article>
              ))}
            </div>

            <aside className="menu-poster">
              <img src="/olly-menu-flyer.png" alt="Olly B Kitchen full menu flyer" />
              <div className="menu-poster__caption">
                <span>Need something specific?</span>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer">
                  Ask us on WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="container events-grid">
          <div className="events-card events-card--image">
            <img src="/olly-catering-flyer.png" alt="Olly B Kitchen party catering" />
          </div>
          <div className="events-copy">
            <div className="eyebrow eyebrow--gold"><CalendarDays size={15} /> Party & event catering</div>
            <h2>Make your gathering taste unforgettable.</h2>
            <p>
              Hosting a celebration or party? Olly B Kitchen is available for event orders, with a menu that gives guests the familiar flavours they love and the variety every good gathering needs.
            </p>
            <div className="service-points">
              <div><span><Check size={16} /></span><p><b>Variety that works for a crowd</b><small>Mix rice dishes, classics, barbecue and Asun.</small></p></div>
              <div><span><Check size={16} /></span><p><b>Easy ordering</b><small>Call or WhatsApp us directly to discuss your event.</small></p></div>
              <div><span><Check size={16} /></span><p><b>Food people remember</b><small>Warm Nigerian favourites made for shared moments.</small></p></div>
            </div>
            <a
              className="button button--gold"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Olly B Kitchen, I would like to enquire about catering for a party/event.')}`}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarDays size={18} /> Book catering <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <div className="experience-panel">
            <div>
              <span className="experience-kicker">OLLY B KITCHEN</span>
              <h2>Good food. Happier people.</h2>
            </div>
            <p>Delicious meals for everyday cravings, shared tables and celebrations worth remembering.</p>
            <a className="text-link" href="#contact">Contact the kitchen <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="eyebrow eyebrow--gold"><Phone size={15} /> Ready to order?</div>
            <h2>Call or WhatsApp Olly B Kitchen.</h2>
            <p>Tell us what you would like to order or share your event details. Use any of the numbers below to get in touch.</p>
          </div>
          <div className="contact-list">
            {phones.map((phone, index) => {
              const isWhatsApp = phone === whatsappNumber.replace(/^234/, '0')
              return (
                <a key={phone} href={`tel:${phone}`} className="phone-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <small>{isWhatsApp ? 'Call / WhatsApp' : 'Call'}</small>
                    <b>{phone}</b>
                  </div>
                  <ArrowRight size={19} />
                </a>
              )
            })}
            <a
              className="whatsapp-card"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={21} />
              <div><small>Fastest way to reach us</small><b>Start a WhatsApp chat</b></div>
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <BrandMark compact />
          <p>Nigerian food • Everyday orders • Party events</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App
