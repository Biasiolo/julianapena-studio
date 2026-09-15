import React, { useState } from 'react';
import { studio } from '../data';
import { buildMessage, localDate, money, selectedTotal, whatsappUrl } from '../lib/booking';
import Icon from './Icon';

export default function Booking({ items, remove }) {
  const [guidance, setGuidance] = useState(false);
  const [error, setError] = useState('');
  const [ready, setReady] = useState(null);
  const selectionKey = items.map((item) => item.id).join(',');
  const validReady = ready && ready.selectionKey === selectionKey && ready.guidance === guidance;
  function submit(event) {
    event.preventDefault(); setReady(null);
    if (!items.length && !guidance) {
      setError('Selecione um cuidado no catálogo ou marque a opção de orientação abaixo.');
      document.getElementById('guidance').focus();
      return;
    }
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    if (!fields.name.trim()) { setError('Informe seu nome para continuar.'); return; }
    if (fields.date && fields.date < localDate()) { setError('Escolha hoje ou uma data futura.'); return; }
    setError('');
    const url = whatsappUrl(studio.phone, buildMessage({ ...fields, items, guidance }));
    setReady({ url, selectionKey, guidance });
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return <section id="agendamento" className="section booking-section"><div className="container booking-layout">
    <div className="booking-copy"><p className="eyebrow">VAMOS COMBINAR SEU MOMENTO?</p><h2>O primeiro passo<br />é <em>cuidar de você.</em></h2><p>Escolha uma preferência de data e envie sua solicitação. A Juliana conversa com você sobre o cuidado e confirma os próximos passos.</p>
      <ol className="booking-steps"><li><span>01</span><div><strong>Escolha seu cuidado</strong><p>Selecione os serviços no catálogo ou peça orientação.</p></div></li><li><span>02</span><div><strong>Conte sua preferência</strong><p>Informe a data e o período que funcionam para você.</p></div></li><li><span>03</span><div><strong>Continue no WhatsApp</strong><p>Envie a mensagem e combine os detalhes com o studio.</p></div></li></ol>
      <a className="personal-contact" href={whatsappUrl(studio.phone, 'Olá, Juliana! Gostaria de saber mais sobre os atendimentos do studio.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={28} /><span>Prefere conversar primeiro?<strong>{studio.displayPhone}</strong></span><Icon name="diagonal" size={19} /></a>
    </div>
    <form className="booking-form" onSubmit={submit} onChange={() => { setReady(null); setError(''); }}>
      <div className="form-heading"><Icon name="calendar" /><h3>Seu pedido de agendamento</h3></div>
      <div className="selection-summary"><div className="summary-heading"><span>Cuidados selecionados</span><a href="#cuidados">{items.length ? 'Adicionar mais' : 'Ver catálogo'} <span aria-hidden="true">↗</span></a></div>
        {items.length ? <><ul>{items.map((item) => <li key={item.id}><div><strong>{item.title}</strong><small>{item.subtitle}</small><span>{money(item.price)} {item.unit}</span></div><button type="button" onClick={() => remove(item.id)} aria-label={`Remover ${item.title} — ${money(item.price)} do agendamento`}><Icon name="close" size={16} /></button></li>)}</ul><div className="summary-total"><span>Soma de referência</span><strong>{money(selectedTotal(items))}</strong></div><p className="summary-note">Soma dos valores anunciados, incluindo mensalidades ou pacotes selecionados. Condições a confirmar.</p></> : <p className="empty-selection">Seu momento começa com uma escolha.<br />Selecione um cuidado ou peça orientação abaixo.</p>}
      </div>
      <label className="guidance-option"><input id="guidance" type="checkbox" checked={guidance} onChange={(e) => setGuidance(e.target.checked)} /><span>Quero orientação para escolher<small>Converse com o studio sobre o próximo passo.</small></span></label>
      <div className="form-grid"><label className="full-width">Seu nome <span>*</span><input name="name" autoComplete="name" required placeholder="Como podemos te chamar?" maxLength={80} /></label><label>Data de preferência<input name="date" type="date" min={localDate()} /></label><label>Período<select name="period" defaultValue=""><option value="">A combinar</option><option>Manhã</option><option>Tarde</option><option>Noite</option></select></label><label className="full-width">Observações <small>opcional</small><textarea name="notes" placeholder="Outra preferência para o agendamento…" rows={2} maxLength={400} /></label></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-green booking-submit" type="submit"><Icon name="whatsapp" size={21} />Continuar no WhatsApp<Icon name="arrow" size={19} /></button>
      <p className="form-note">Você revisa e envia a mensagem no WhatsApp. O horário e os valores serão confirmados pelo studio.</p>
      {validReady && <p className="form-success" role="status">Sua mensagem está pronta. Se o WhatsApp não abriu, <a href={ready.url} target="_blank" rel="noreferrer">toque aqui para continuar</a>.</p>}
    </form>
  </div></section>;
}
