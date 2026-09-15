// Única fonte de contatos, preços, catálogo e perguntas do site.
// Preços em centavos para evitar diferenças de arredondamento.
export const studio = {
  name: 'Studio Juliana Pena',
  phone: '5516997954701',
  displayPhone: '(16) 99795-4701',
  address: 'Av. Professor Dorival Alves, 29',
  neighborhood: 'Vila Xavier · Araraquara/SP',
  instagram: 'https://www.instagram.com/studiojulianapena/',
  catalog: 'https://jim.com/a/studiojulianapena',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Studio Juliana Pena Professor Dorival Alves 29 Vila Xavier Araraquara SP'),
};

export const categories = ['Todos os cuidados', 'Pilates', 'Fisioterapia e dor', 'Acupuntura', 'Estética facial', 'Hidroterapia'];

export const services = [
  { id: 'pilates', title: 'Pilates', subtitle: 'Mensalidade · 2x por semana', category: 'Pilates', price: 30000, unit: '/ mês', image: 'studio-pilates.png', imagePosition: 'center', description: 'Uma rotina de movimento com acompanhamento. Consulte os horários das turmas para começar.', featured: true },
  { id: 'avaliacao', title: 'Avaliação fisioterapêutica', subtitle: 'Avaliação individual', category: 'Fisioterapia e dor', price: 10000, image: 'fisioterapia.png', imagePosition: 'center', description: 'O primeiro encontro para conversar sobre suas necessidades e orientar os próximos cuidados.' },
  { id: 'acupuntura', title: 'Acupuntura', subtitle: 'Atendimento individual', category: 'Acupuntura', price: 18000, image: 'acupuntura-informativo.png', crop: [406, 332, 362, 660], size: [768, 1152], description: 'Um atendimento dedicado a você, com indicação e planejamento definidos na avaliação.' },
  { id: 'hidroterapia', title: 'Hidroterapia', subtitle: 'Atendimento em ambiente aquático', category: 'Hidroterapia', price: 15000, image: 'hidroterapia.png', imagePosition: 'center 55%', description: 'Conheça a modalidade e converse com o studio sobre o formato e o local do atendimento.' },
  { id: 'microagulhamento', title: 'Microagulhamento com ativos', subtitle: 'Cuidado facial', category: 'Estética facial', price: 20000, image: 'tratamento-facial.png', imagePosition: 'center 55%', description: 'Cuidado facial com planejamento individual. Os ativos e a indicação são definidos pela profissional.' },
  { id: 'peeling-250', title: 'Peeling', subtitle: 'Opção de R$ 250,00', category: 'Estética facial', price: 25000, image: 'cuidado-facial.png', imagePosition: 'center 60%', description: 'Uma das opções de peeling do catálogo. Consulte o studio para conhecer o protocolo correspondente.' },
  { id: 'bioestimulador', title: 'Bioestimulador de colágeno', subtitle: 'Cuidado estético', category: 'Estética facial', price: 190000, image: 'bioestimulador.webp', imagePosition: 'center 58%', description: 'Solicite informações sobre o procedimento, a avaliação e as condições de atendimento.' },
  { id: 'skinbooster', title: 'Skinbooster facial', subtitle: 'Cuidado facial', category: 'Estética facial', price: 40000, image: 'cuidado-facial.png', imagePosition: 'center 58%', description: 'Converse sobre o cuidado facial e receba orientação profissional antes de definir o atendimento.' },
  { id: 'microagulhamento-pacote', title: 'Pacote de microagulhamento', subtitle: 'Pacote de cuidados', category: 'Estética facial', price: 72000, unit: '/ pacote', image: 'tratamento-facial.png', imagePosition: 'center 55%', description: 'Uma opção de pacote do catálogo. Quantidade de sessões e condições a confirmar com o studio.', badge: 'Pacote' },
  { id: 'peeling-400', title: 'Peeling', subtitle: 'Opção de R$ 400,00', category: 'Estética facial', price: 40000, image: 'cuidado-facial.png', imagePosition: 'center 60%', description: 'Outra opção de peeling do catálogo. A profissional orienta qual protocolo faz sentido para você.' },
  { id: 'injetavel', title: 'Aplicação de injetável para dor', subtitle: 'Atendimento individual', category: 'Fisioterapia e dor', price: 40000, image: 'juliana-acolhimento.png', imagePosition: 'center 52%', description: 'Informações e indicação do procedimento são tratadas diretamente com a profissional na avaliação.' },
  { id: 'injetaveis-pacote', title: 'Injetáveis para dor · 3 sessões', subtitle: 'Pacote com 3 sessões', category: 'Fisioterapia e dor', price: 90000, unit: '/ pacote', image: 'tratamento-facial.png', imagePosition: 'center 52%', description: 'Pacote de aplicações conforme o catálogo. Indicação e organização das sessões a confirmar.', badge: '3 sessões' },
];

export const questions = [
  ['Como funciona o agendamento?', 'Escolha os serviços que deseja conhecer, informe seu nome e uma preferência de data e período. O site prepara uma mensagem para você enviar ao WhatsApp. O studio confirma a disponibilidade e os detalhes do atendimento na conversa.'],
  ['Ainda não sei qual cuidado escolher. Posso conversar primeiro?', 'Sim. Use a opção “Quero orientação para escolher” no formulário. Você também pode selecionar a avaliação fisioterapêutica ou chamar o studio diretamente pelo WhatsApp.'],
  ['Os valores dos cards são por sessão?', 'Cada card identifica quando se trata de mensalidade ou pacote. O Pilates de R$ 300,00 é uma mensalidade para 2 vezes por semana. O pacote de injetáveis de R$ 900,00 contempla 3 sessões. Confirme com o studio as condições dos demais atendimentos e pacotes.'],
  ['Por que há duas opções de peeling?', 'O catálogo apresenta dois itens chamados Peeling, um de R$ 250,00 e outro de R$ 400,00. Você pode solicitar informações sobre qualquer um deles. A profissional explica a diferença e avalia a indicação.'],
  ['Posso agendar qualquer procedimento diretamente?', 'Você pode solicitar informações e uma preferência de atendimento pelo site. A indicação de procedimentos depende de avaliação profissional. O envio da mensagem não confirma automaticamente uma sessão ou tratamento.'],
];
