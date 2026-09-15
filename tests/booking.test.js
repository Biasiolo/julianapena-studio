import test from 'node:test';
import assert from 'node:assert/strict';
import { services, studio } from '../src/data.js';
import { buildMessage, selectedTotal, localDate, whatsappUrl } from '../src/lib/booking.js';

test('catálogo preserva os 12 preços e as duas opções independentes de peeling', () => {
  const expected = { pilates:30000, avaliacao:10000, acupuntura:18000, hidroterapia:15000, microagulhamento:20000, 'peeling-250':25000, bioestimulador:190000, skinbooster:40000, 'microagulhamento-pacote':72000, 'peeling-400':40000, injetavel:40000, 'injetaveis-pacote':90000 };
  assert.equal(services.length, 12);
  assert.equal(new Set(services.map(s => s.id)).size, 12);
  assert.deepEqual(Object.fromEntries(services.map(s => [s.id, s.price])), expected);
});

test('pedido mantém mensalidade, pacote, acentos e preços ao abrir o WhatsApp', () => {
  const items = services.filter(s => ['pilates', 'injetaveis-pacote'].includes(s.id));
  assert.equal(selectedTotal(items), 120000);
  const message = buildMessage({name:'  João & Júlia  ',date:'2027-12-15',period:'Manhã',notes:'Prefiro após as 10h & antes das 12h.',items,guidance:false});
  const url = new URL(whatsappUrl(studio.phone, message));
  assert.equal(url.pathname, '/5516997954701');
  assert.equal(url.searchParams.get('text'), message);
  for (const fragment of ['João & Júlia', '15/12/2027', 'Manhã', '/ mês', '/ pacote', '3 sessões', '1.200,00', 'disponibilidade']) assert.ok(message.includes(fragment), fragment);
});

test('orientação sem serviço não apresenta custo ou reserva confirmada', () => {
  const message = buildMessage({name:'Ana',date:'',period:'',items:[],guidance:true});
  assert.match(message, /orientação/);
  assert.match(message, /A combinar/);
  assert.ok(!message.includes('Soma dos valores'));
});

test('data mínima acompanha o dia de Araraquara na virada UTC', () => {
  assert.equal(localDate(new Date('2026-09-16T01:00:00Z')), '2026-09-15');
  assert.equal(localDate(new Date('2026-09-16T04:00:00Z')), '2026-09-16');
});
