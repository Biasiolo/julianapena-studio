import React, { useEffect, useRef, useState } from 'react';
import { services, studio, questions } from './data';
import { money, selectedTotal, whatsappUrl } from './lib/booking';
import Icon from './components/Icon';
import Media from './components/Media';
import Catalog from './components/Catalog';
import Booking from './components/Booking';

const directMessage = whatsappUrl(studio.phone, 'Olá, Juliana! Gostaria de conhecer os atendimentos do studio e consultar a disponibilidade.');

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Studio Juliana Pena — início"><small>STUDIO</small><span>Juliana Pena</span><i>FISIOTERAPIA · PILATES · ESTÉTICA</i></a>;
}

function Botanical({ className = '' }) {
  return <svg className={`botanical ${className}`} width="170" height="260" viewBox="0 0 170 260" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M53 257c42-76 58-132 47-226M91 179C31 190 15 163 7 142c43-3 75 6 84 37ZM107 130c43-1 53-32 55-54-38 6-54 24-55 54ZM106 108C64 95 48 76 48 50c40 12 57 31 58 58ZM101 57C90 31 102 11 119 2c12 22 10 41-18 55ZM73 219c52-3 66-24 70-50-37 4-61 19-70 50Z" /></svg>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState([]);
  const [announcement, setAnnouncement] = useState('');
  const menuToggle = useRef(null);
  const bookingSection = useRef(null);
  const [bookingVisible, setBookingVisible] = useState(false);
  const items = services.filter((service) => selected.includes(service.id));

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape' && menu) { setMenu(false); menuToggle.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setBookingVisible(entry.isIntersecting), { threshold: 0 });
    if (bookingSection.current) observer.observe(bookingSection.current);
    return () => observer.disconnect();
  }, []);

  function toggle(id) {
    const service = services.find((item) => item.id === id);
    const exists = selected.includes(id);
    setSelected((current) => exists ? current.filter((item) => item !== id) : [...current, id]);
    setAnnouncement(`${service.title} ${exists ? 'removido' : 'adicionado'} à sua seleção.`);
  }

  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <header className="header"><div className="container nav-inner"><Brand /><nav id="main-menu" className={menu ? 'navigation open' : 'navigation'} aria-label="Navegação principal"><a href="#cuidados" onClick={() => setMenu(false)}>Nossos cuidados</a><a href="#sobre" onClick={() => setMenu(false)}>O studio</a><a href="#duvidas" onClick={() => setMenu(false)}>Dúvidas</a><a href="#contato" onClick={() => setMenu(false)}>Contato</a><a href="#agendamento" className="button button-green nav-button" onClick={() => setMenu(false)}>Agende seu momento<Icon name="arrow" size={16} /></a></nav><button ref={menuToggle} className="menu-toggle" aria-expanded={menu} aria-controls="main-menu" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenu(!menu)}><Icon name={menu ? 'close' : 'menu'} /></button></div></header>
    <main id="conteudo">
      <section id="inicio" className="hero"><div className="container hero-layout"><div className="hero-copy"><p className="eyebrow"><span className="small-line" />CUIDADO, MOVIMENTO E BEM-ESTAR</p><h1>Seu momento<br />de cuidado<br /><em>começa aqui.</em></h1><p>Um olhar atento para você, seu corpo e sua rotina.<br className="desktop-break" /> Conheça os cuidados do Studio Juliana Pena e encontre um tempo para se sentir bem.</p><div className="hero-actions"><a href="#cuidados" className="button button-green">Encontre seu cuidado<Icon name="arrow" size={18} /></a><a href="#agendamento" className="text-link">Quero agendar<Icon name="diagonal" size={17} /></a></div><div className="hero-detail"><span className="detail-icon"><Icon name="heart" size={21} /></span><p>Um atendimento próximo.<br /><strong>Um cuidado que respeita você.</strong></p></div></div><div className="hero-visual"><div className="hero-frame"><Media file="cuidado-facial.png" alt="Juliana Pena durante um atendimento facial" priority position="center 45%" /></div><Botanical className="hero-leaf" /><div className="hero-location"><span><Icon name="pin" size={21} /></span><p>Seu espaço de cuidado<small>Vila Xavier · Araraquara</small></p></div><span className="hero-caption">CADA PESSOA, UM CUIDADO.</span></div></div></section>
      <div className="expertise-strip"><div className="container"><span>Pilates</span><i>✧</i><span>Fisioterapia</span><i>✧</i><span>Acupuntura</span><i>✧</i><span>Tratamentos faciais</span><i>✧</i><span>Tratamentos corporais</span><i>✧</i><span>Hidroterapia</span></div></div>
      <Catalog selected={selected} toggle={toggle} />
      <section id="sobre" className="section about-section"><div className="container about-layout"><div className="about-images"><div className="about-portrait"><Media file="juliana-acolhimento.png" alt="Juliana Pena em um momento de conversa no studio" position="center" /></div><div className="about-studio"><Media file="studio-pilates.png" alt="Ambiente de pilates do Studio Juliana Pena, com equipamentos" /><span>ESPAÇO PARA SE MOVIMENTAR</span></div></div><div className="about-copy"><p className="eyebrow">BEM-VINDA AO STUDIO JULIANA PENA</p><h2>Cuidar também<br />é <em>saber ouvir.</em></h2><p>Antes de qualquer cuidado, existe uma pessoa. Sua rotina, suas necessidades e o que você deseja para si merecem atenção.</p><p>O studio reúne fisioterapia, pilates, acupuntura e cuidados estéticos em uma proposta de atendimento próximo. Um espaço para conversar, se movimentar e dedicar um tempo a você.</p><div className="about-values"><div><Icon name="heart" /><span>Escuta e acolhimento</span></div><div><Icon name="leaf" /><span>Cuidado individualizado</span></div><div><Icon name="calendar" /><span>Atendimento com agendamento</span></div></div><a className="text-link" href={studio.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" size={18} />Conheça nossa rotina<Icon name="diagonal" size={16} /></a></div></div></section>
      <section className="pause-section"><div className="container"><Icon name="leaf" size={30} /><p>Entre tantos compromissos,<br /><em>que você também seja uma prioridade.</em></p><a className="text-link" href="#agendamento">Reserve um tempo para você<Icon name="arrow" size={18} /></a></div><Botanical className="pause-leaf" /></section>
      <div ref={bookingSection}><Booking items={items} remove={toggle} /></div>
      <section id="duvidas" className="section faq-section"><div className="container faq-layout"><div><p className="eyebrow">PODEMOS TE AJUDAR?</p><h2>Uma conversa<br /><em>sem dúvidas.</em></h2><p>Informações para você dar o próximo passo com tranquilidade.</p><a href={directMessage} target="_blank" rel="noreferrer" className="text-link">Fale com o studio<Icon name="arrow" size={17} /></a></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<Icon name="plus" size={18} /></summary><p>{answer}</p></details>)}</div></div></section>
      <section id="contato" className="section contact-section"><div className="container contact-layout"><div className="contact-copy"><p className="eyebrow">PERTINHO DE VOCÊ</p><h2>Nos encontramos<br /><em>no studio.</em></h2><div className="contact-info"><Icon name="pin" /><div><strong>{studio.address}</strong><p>{studio.neighborhood}</p></div></div><div className="contact-info"><Icon name="whatsapp" /><div><a href={directMessage} target="_blank" rel="noreferrer"><strong>{studio.displayPhone}</strong></a><p>Atendimento e agendamento pelo WhatsApp</p></div></div><div className="contact-actions"><a className="button button-green" href={studio.maps} target="_blank" rel="noreferrer">Como chegar<Icon name="diagonal" size={18} /></a><a className="text-link" href={studio.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" size={18} />@studiojulianapena</a></div></div><div className="contact-image"><Media file="studio-pilates.png" alt="Sala de pilates do studio na Vila Xavier em Araraquara" /><a href={studio.maps} target="_blank" rel="noreferrer"><span><Icon name="pin" size={20} />Vila Xavier, Araraquara</span><Icon name="diagonal" size={18} /></a></div></div></section>
    </main>
    <footer className={`footer ${items.length ? 'has-selection' : ''}`}><div className="container footer-top"><Brand /><p>Um tempo para você.<br />Um cuidado com atenção.</p><div><a href={studio.instagram} target="_blank" rel="noreferrer" aria-label="Instagram do studio"><Icon name="instagram" size={20} /></a><a href={directMessage} target="_blank" rel="noreferrer" aria-label="WhatsApp do studio"><Icon name="whatsapp" size={20} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Studio Juliana Pena.</span><span>Araraquara · São Paulo</span><a href="#inicio">Voltar ao início ↑</a></div></footer>
    <div className="sr-only" aria-live="polite">{announcement}</div>
    {items.length > 0 && !bookingVisible ? <aside className="selection-bar" aria-label="Resumo da seleção"><span className="selection-icon"><Icon name="bag" size={22} /><small>{items.length}</small></span><div><strong>{items.length} {items.length === 1 ? 'cuidado selecionado' : 'cuidados selecionados'}</strong><span>{money(selectedTotal(items))} <small>· referência</small></span></div><a href="#agendamento" className="button button-green">Revisar e agendar<Icon name="arrow" size={17} /></a></aside> : <a className="floating-whatsapp" href={directMessage} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><Icon name="whatsapp" size={25} /></a>}
  </>;
}
