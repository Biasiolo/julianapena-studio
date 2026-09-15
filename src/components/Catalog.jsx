import React, { useState } from 'react';
import { categories, services } from '../data';
import { money } from '../lib/booking';
import Media from './Media';
import Icon from './Icon';

export default function Catalog({ selected, toggle }) {
  const [category, setCategory] = useState(categories[0]);
  const visible = services.filter((service) => category === categories[0] || service.category === category);
  return <section id="cuidados" className="section catalog-section"><div className="container">
    <div className="section-intro"><p className="eyebrow">ENCONTRE O SEU CUIDADO</p><h2>Um tempo para você.<br /><em>Um cuidado para cada momento.</em></h2><p>Conheça as modalidades, consulte os valores e selecione o que faz sentido para você. A conversa continua com o studio.</p></div>
    <div className="category-list" role="group" aria-label="Filtrar cuidados por modalidade">{categories.map((item) => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={category === item ? 'category active' : 'category'}>{item}</button>)}</div>
    <div className="catalog-meta"><p aria-live="polite">{visible.length} {visible.length === 1 ? 'cuidado disponível' : 'cuidados disponíveis'}</p><span>Selecione e agende pelo WhatsApp</span></div>
    <div className="catalog-grid">{visible.map((service) => {
      const checked = selected.includes(service.id);
      return <article className={`care-card ${checked ? 'selected' : ''}`} key={service.id}>
        <div className="care-image"><Media file={service.image} alt={service.title === 'Peeling' ? 'Atendimento facial no Studio Juliana Pena' : service.title} crop={service.crop} size={service.size} position={service.imagePosition} />{service.badge && <span className="care-badge">{service.badge}</span>}<span className="care-image-category">{service.category}</span></div>
        <div className="care-body"><h3>{service.title}</h3><p className="care-subtitle">{service.subtitle}</p><p className="care-description">{service.description}</p><div className="care-price"><span>{money(service.price)}</span>{service.unit && <small>{service.unit}</small>}</div><button className={`care-button ${checked ? 'is-selected' : ''}`} onClick={() => toggle(service.id)} aria-pressed={checked} aria-label={`${checked ? 'Remover' : 'Selecionar'} ${service.title} — ${money(service.price)}`}>{checked ? 'Selecionado' : 'Quero agendar'}<Icon name={checked ? 'check' : 'plus'} size={19} /></button></div>
      </article>;
    })}</div>
    <p className="catalog-note">Valores de referência do catálogo. A indicação dos procedimentos e as condições de atendimento são confirmadas com a profissional.</p>
  </div></section>;
}
