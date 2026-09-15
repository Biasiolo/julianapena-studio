# Studio Juliana Pena

Site de apresentação feito em **Vite + React**, com catálogo de 12 serviços, filtros por modalidade, preços e solicitação de agendamento pelo WhatsApp. Layout responsivo em tons suaves de creme, verde e rosado, usando os materiais fornecidos.

## Abrir no VSCode

1. Extraia o ZIP e abra a pasta `studio-juliana-pena` no VSCode.
2. Instale o Node.js **22.12 ou superior** (recomendado: Node 24 LTS).
3. No terminal dessa pasta:

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://127.0.0.1:5173`.
Não abra o `index.html` diretamente pelo explorador de arquivos.

## Produção e verificação

```bash
npm test
npm run build
npm run preview
```

`dist/` contém uma compilação pronta, também incluída neste pacote. Para alterações, edite `src/` e rode o build novamente. As imagens e fontes são locais; não dependem do Instagram ou do catálogo original para carregar. A instalação das dependências e o envio pelo WhatsApp precisam de internet.

Para publicar na Vercel: preset **Vite**, comando `npm run build`, saída `dist`. Não há variáveis de ambiente obrigatórias. O domínio personalizado pode ser configurado depois no provedor de hospedagem e no DNS do domínio.

## Como funciona o pedido

- O visitante escolhe um ou mais cuidados, podendo alternar os filtros sem perder a seleção.
- O formulário recebe nome, data e período de preferência e observações opcionais. Também permite pedir orientação sem escolher um serviço.
- O botão abre o WhatsApp **(16) 99795-4701** com uma mensagem formatada contendo os cuidados, valores, nome e preferências. O visitante ainda revisa e envia a mensagem.
- Não há reserva automática, verificação de vagas, cobrança, pagamento ou envio silencioso. A confirmação acontece na conversa com o studio.
- A soma exibida é de referência: pode reunir mensalidades, pacotes e outros atendimentos. Não representa um orçamento aprovado.
- Nenhum dado do formulário é salvo em banco, cookies ou armazenamento local. Recarregar a página limpa a seleção. Dados digitados são enviados ao WhatsApp quando o visitante usa o botão; evite solicitar informações clínicas neste formulário.
- Há link alternativo caso a abertura da nova janela seja bloqueada.

## Personalizar

| Arquivo | Conteúdo |
| --- | --- |
| `src/data.js` | Contatos, endereço, links, catálogo, preços, categorias e perguntas |
| `src/App.jsx` | Apresentação, studio, seções e navegação |
| `src/components/Catalog.jsx` | Cards, filtros e seleção |
| `src/components/Booking.jsx` | Formulário e resumo do pedido |
| `src/lib/booking.js` | Formatação dos valores, datas e mensagem do WhatsApp |
| `src/styles.css` | Cores, tipografia, espaçamento e responsividade |
| `public/media/` | Fotografias e materiais recebidos |
| `index.html` | Título e descrição para buscadores |

**Os preços estão em centavos:** `30000` significa R$ 300,00. Mantenha cada `id` único. Não insira um número de WhatsApp com espaços, parênteses ou `+`: use país + DDD + número.

## Conteúdo e revisão com o studio

Referências: [catálogo existente](https://jim.com/a/studiojulianapena), [Instagram](https://www.instagram.com/studiojulianapena/) e imagens, valores e contato fornecidos no briefing.

- Os 12 valores seguem o briefing. Há dois itens chamados **Peeling**, de R$ 250 e R$ 400, mantidos como opções distintas sem inventar protocolos. Depois de confirmar a diferença, altere seus títulos, descrições e a pergunta correspondente em `src/data.js`.
- Pilates: mensalidade de R$ 300 para 2 vezes por semana. Injetáveis: pacote de 3 sessões por R$ 900. O pacote de microagulhamento de R$ 720 não tem quantidade de sessões informada; o site deixa essa condição para confirmação.
- O endereço usa **Av. Professor Dorival Alves, 29**, conforme o briefing. A página de referência utiliza “Rua” para o mesmo logradouro: confirme a nomenclatura com o studio antes da publicação definitiva.
- A apresentação não inclui depoimentos, credenciais profissionais, horários fixos ou promessas de resultados não confirmados. Antes de publicar, o studio pode revisar a identificação profissional e acrescentar os dados corretos.
- Algumas imagens são reutilizadas para ilustrar a categoria, sem afirmar que mostram exatamente cada procedimento. O card de acupuntura enquadra apenas a área fotográfica do material recebido via SVG; o original permanece intacto.
- O nome no cabeçalho é uma composição tipográfica para esta proposta. O ícone de folha é decorativo. É possível substituir pelo logotipo oficial.

## Validação

Testes automatizados cobrem os preços, as opções de peeling, os valores de pacotes e mensalidades, a mensagem do WhatsApp e o fuso horário de Araraquara. O layout e o fluxo de seleção/agendamento também foram verificados em navegador, incluindo celular. As imagens em `previas/` servem como referência visual.
