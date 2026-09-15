export const money = (cents) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);
export const selectedTotal = (items) => items.reduce((total, item) => total + item.price, 0);
export function localDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now);
  const get = (key) => parts.find((p) => p.type === key).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function dateLabel(date) { return date ? date.split('-').reverse().join('/') : 'A combinar'; }
export function buildMessage({ name, date, period, notes = '', items, guidance }) {
  return [
    'Olá, Studio Juliana Pena! 🌿',
    'Gostaria de solicitar um agendamento.',
    '',
    `*Nome:* ${name.trim()}`,
    ...(items.length ? ['','*Cuidados de interesse:*', ...items.map((item) => `• ${item.title} — ${money(item.price)}${item.unit ? ` ${item.unit}` : ''}\n  ${item.subtitle}`), '', `*Soma dos valores de referência:* ${money(selectedTotal(items))}`] : []),
    ...(guidance ? ['', '*Gostaria de orientação para escolher o cuidado. Acertamos na conversa se é necessário agendar uma avaliação.*'] : []),
    '',
    `*Data de preferência:* ${dateLabel(date)}`,
    `*Período:* ${period || 'A combinar'}`,
    ...(notes.trim() ? [`*Observações sobre o agendamento:* ${notes.trim()}`] : []),
    '',
    'Podem confirmar a disponibilidade, as condições e os valores? Entendo que os procedimentos dependem de avaliação profissional.',
  ].join('\n');
}
export const whatsappUrl = (phone, message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
