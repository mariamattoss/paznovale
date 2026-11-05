import { useState } from 'react'
import {
  contact,
  menu,
  benefits,
  specialties,
  partners,
  funeralFull,
  plans,
  testimonials,
  faq,
} from './data.js'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a className="skip" href="#content">Ir para o conteúdo</a>
      <div className="container header__row">
        <a href="#inicio" className="logo" aria-label="Paz no Vale">
          <img src="/img/logoPaznoVale.png" alt="Paz no Vale" />
        </a>
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          <ul>
            {menu.map((item) => (
              <li key={item.label} className={item.children ? 'has-sub' : ''}>
                <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
                {item.children && (
                  <ul className="sub">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          target={c.external ? '_blank' : undefined}
                          rel={c.external ? 'noreferrer' : undefined}
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div>
          <h1>
            O cartão que <em>cuida</em> da sua família.
          </h1>
          <p>
            Segurança para quem você ama e acesso a benefícios em mais de 300
            parceiros, com descontos de até 50%.
          </p>
          <a className="btn" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            Quero o meu cartão
          </a>
        </div>
        <div className="card-mock" aria-hidden="true">
          <div className="card-mock__brand">
            <img src="/img/logoPaznoVale.png" alt="" />
          </div>
          <div className="card-mock__label">Clube de Vantagens</div>
          <div className="card-mock__off">até 50% OFF</div>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <h2>Clube de Vantagens &amp; Benefícios Exclusivos</h2>
        <div className="grid grid--6">
          {benefits.map((b) => (
            <div className="tile" key={b.title}>
              <span className="tile__icon" aria-hidden="true">{b.icon}</span>
              <h3>{b.title}</h3>
            </div>
          ))}
        </div>
        <p className="center">
          <a className="btn" href="#parceiros">Ver parceiros</a>
        </p>

        <h2 className="mt">10% a 50% off nas especialidades</h2>
        <div className="grid grid--3 lists">
          {specialties.map((col, i) => (
            <ul key={i} className="check">
              {col.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section id="parceiros" className="section section--alt">
      <div className="container">
        <h2>Contamos com +300 parceiros</h2>
        <div className="grid grid--6">
          {partners.map((p) => (
            <div className="partner" key={p}>{p}</div>
          ))}
        </div>
        <p className="center">
          <a className="btn" href="#contato">Ver todos os parceiros</a>
        </p>
      </div>
    </section>
  )
}

function Juridico() {
  return (
    <section id="juridico" className="section">
      <div className="container split">
        <div>
          <h2>Jurídico grátis</h2>
          <p>
            Um grupo de advogados atende o titular e os dependentes, sem custo,
            durante a vigência do plano.
          </p>
          <a className="btn" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            Saiba mais
          </a>
        </div>
        <div className="panel">
          <h3>Vantagens de ser Paz no Vale</h3>
          <p>Em breve, um vídeo apresentando todos os benefícios do plano.</p>
        </div>
      </div>
    </section>
  )
}

function Sorteio() {
  return (
    <section id="sorteio" className="section section--dark">
      <div className="container center">
        <h2>Sorteio todo mês</h2>
        <p className="lead">Bolada em dinheiro, mensalidades e prêmios.</p>
        <p>
          Todo mês há sorteios com prêmios em dinheiro, vale-compras, vale-gás,
          cestas básicas e mensalidades grátis.
        </p>
      </div>
    </section>
  )
}

function Funeral() {
  return (
    <section id="funeral" className="section">
      <div className="container">
        <h2>Funeral familiar</h2>
        <p className="center">O que o plano garante à sua família:</p>
        <ul className="check cols">
          {funeralFull.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Plans() {
  return (
    <section id="planos" className="section section--alt">
      <div className="container">
        <h2>Planos para família e amigos</h2>
        <p className="center">Sem grau de parentesco e sem limite de idade.</p>
        <div className="grid grid--4">
          {plans.map((p) => (
            <article className="plan" key={p.name}>
              <div className="plan__img" aria-hidden="true">{p.name.split(' ')[0]}</div>
              <h3>{p.name}</h3>
              <a className="btn btn--sm" href={contact.whatsappHref} target="_blank" rel="noreferrer">
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2>Depoimentos</h2>
        <div className="grid grid--4">
          {testimonials.map((t) => (
            <figure className="quote" key={t.name}>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faq" className="section section--alt">
      <div className="container narrow">
        <h2>Perguntas frequentes</h2>
        {faq.map((item, i) => {
          const isOpen = openIdx === i
          return (
            <div className={`faq ${isOpen ? 'faq--open' : ''}`} key={item.q}>
              <button
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
              >
                {item.q}
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p>{item.a}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Business() {
  return (
    <section id="empresarial" className="section section--dark">
      <div className="container center">
        <h2>Planos empresariais</h2>
        <p className="lead">Pensando no futuro do seu colaborador.</p>
        <a className="btn btn--light" href={contact.whatsappHref} target="_blank" rel="noreferrer">
          Saiba mais
        </a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container split">
        <div>
          <h2>Contato</h2>
          <p className="lead">Atendimento 24 horas, de segunda a segunda.</p>
          <ul className="contact">
            <li>📞 <a href={contact.phoneHref}>{contact.phone}</a></li>
            <li>💬 <a href={contact.whatsappHref} target="_blank" rel="noreferrer">{contact.whatsapp}</a></li>
            <li>✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>📍 {contact.address}</li>
          </ul>
          <p className="social">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
          </p>
        </div>
        <iframe
          title="Mapa Paz no Vale"
          loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent('Sociedade Paz no Vale, ' + contact.address)}&output=embed`}
        />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>{contact.legal}</p>
        <p>Atendimento 24 horas · segunda a segunda</p>
        <p className="footer__brand">
          <img src="/img/logoPaznoVale.png" alt="Paz no Vale" />
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Benefits />
        <Partners />
        <Juridico />
        <Sorteio />
        <Funeral />
        <Plans />
        <Testimonials />
        <FAQ />
        <Business />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
