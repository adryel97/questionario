// Definição das perguntas e alternativas para o questionário de perfil
// Cada pergunta contribui para uma ou mais áreas: paciência, estresse, comunicação, conhecimento e foco

const perguntas = [
  {
    id: 1,
    texto: "Como você reage quando alguém discorda de sua opinião?",
    alternativas: [
      { texto: "Fico irritado e defendo meu ponto de vista com veemência", valor: { paciencia: 0, estresse: 100, comunicacao: 20, conhecimento: 40, foco: 60 } },
      { texto: "Tento convencer a pessoa de que estou certo", valor: { paciencia: 25, estresse: 75, comunicacao: 40, conhecimento: 60, foco: 70 } },
      { texto: "Escuto o argumento, mas mantenho minha opinião", valor: { paciencia: 50, estresse: 50, comunicacao: 60, conhecimento: 70, foco: 60 } },
      { texto: "Considero o ponto de vista da outra pessoa", valor: { paciencia: 75, estresse: 25, comunicacao: 80, conhecimento: 80, foco: 50 } },
      { texto: "Vejo como uma oportunidade de aprender algo novo", valor: { paciencia: 100, estresse: 0, comunicacao: 100, conhecimento: 100, foco: 40 } }
    ]
  },
  {
    id: 2,
    texto: "Quando você está em uma fila que demora mais do que o esperado, você:",
    alternativas: [
      { texto: "Reclama em voz alta e considera sair do local", valor: { paciencia: 0, estresse: 100, comunicacao: 30, conhecimento: 20, foco: 20 } },
      { texto: "Fica impaciente e verifica constantemente o relógio", valor: { paciencia: 25, estresse: 75, comunicacao: 40, conhecimento: 30, foco: 30 } },
      { texto: "Espera, mas fica visivelmente incomodado", valor: { paciencia: 50, estresse: 50, comunicacao: 50, conhecimento: 40, foco: 50 } },
      { texto: "Aproveita o tempo para checar mensagens ou e-mails", valor: { paciencia: 75, estresse: 25, comunicacao: 60, conhecimento: 60, foco: 70 } },
      { texto: "Mantém a calma e usa o tempo para refletir ou observar o ambiente", valor: { paciencia: 100, estresse: 0, comunicacao: 70, conhecimento: 80, foco: 90 } }
    ]
  },
  {
    id: 3,
    texto: "Durante uma reunião importante, você prefere:",
    alternativas: [
      { texto: "Dominar a conversa e expor todas as suas ideias", valor: { paciencia: 20, estresse: 60, comunicacao: 40, conhecimento: 60, foco: 70 } },
      { texto: "Falar bastante, mas permitir que outros também falem", valor: { paciencia: 40, estresse: 40, comunicacao: 60, conhecimento: 70, foco: 60 } },
      { texto: "Equilibrar entre falar e ouvir", valor: { paciencia: 60, estresse: 30, comunicacao: 80, conhecimento: 80, foco: 70 } },
      { texto: "Ouvir mais do que falar, intervindo quando necessário", valor: { paciencia: 80, estresse: 20, comunicacao: 90, conhecimento: 90, foco: 80 } },
      { texto: "Principalmente ouvir e tomar notas, falando apenas quando solicitado", valor: { paciencia: 100, estresse: 10, comunicacao: 70, conhecimento: 100, foco: 100 } }
    ]
  },
  {
    id: 4,
    texto: "Quando você precisa aprender uma nova habilidade, como procede?",
    alternativas: [
      { texto: "Tenta aprender sozinho, sem buscar ajuda", valor: { paciencia: 30, estresse: 70, comunicacao: 20, conhecimento: 50, foco: 80 } },
      { texto: "Busca tutoriais rápidos e tenta aplicar imediatamente", valor: { paciencia: 40, estresse: 60, comunicacao: 30, conhecimento: 60, foco: 70 } },
      { texto: "Estuda o básico e pratica regularmente", valor: { paciencia: 60, estresse: 40, comunicacao: 50, conhecimento: 70, foco: 80 } },
      { texto: "Busca cursos estruturados e segue o passo a passo", valor: { paciencia: 80, estresse: 20, comunicacao: 60, conhecimento: 90, foco: 90 } },
      { texto: "Pesquisa profundamente, compara métodos e cria um plano de estudos", valor: { paciencia: 100, estresse: 30, comunicacao: 70, conhecimento: 100, foco: 100 } }
    ]
  },
  {
    id: 5,
    texto: "Ao enfrentar um problema complexo no trabalho, você geralmente:",
    alternativas: [
      { texto: "Tenta resolver rapidamente para se livrar logo", valor: { paciencia: 20, estresse: 80, comunicacao: 30, conhecimento: 40, foco: 50 } },
      { texto: "Analisa brevemente e aplica a primeira solução viável", valor: { paciencia: 40, estresse: 60, comunicacao: 40, conhecimento: 50, foco: 60 } },
      { texto: "Divide o problema em partes menores para resolver", valor: { paciencia: 60, estresse: 40, comunicacao: 60, conhecimento: 70, foco: 80 } },
      { texto: "Pesquisa soluções similares e adapta ao seu contexto", valor: { paciencia: 80, estresse: 30, comunicacao: 70, conhecimento: 90, foco: 90 } },
      { texto: "Analisa profundamente, considera múltiplas abordagens e testa cada uma", valor: { paciencia: 100, estresse: 20, comunicacao: 80, conhecimento: 100, foco: 100 } }
    ]
  },
  {
    id: 6,
    texto: "Quando alguém está falando devagar ou de forma confusa, você:",
    alternativas: [
      { texto: "Interrompe para corrigir ou acelerar a conversa", valor: { paciencia: 0, estresse: 90, comunicacao: 20, conhecimento: 30, foco: 40 } },
      { texto: "Demonstra impaciência com gestos ou expressões faciais", valor: { paciencia: 20, estresse: 70, comunicacao: 30, conhecimento: 40, foco: 50 } },
      { texto: "Escuta, mas mentalmente já está pensando em outras coisas", valor: { paciencia: 40, estresse: 50, comunicacao: 40, conhecimento: 50, foco: 30 } },
      { texto: "Mantém a atenção e pede esclarecimentos quando necessário", valor: { paciencia: 70, estresse: 30, comunicacao: 80, conhecimento: 70, foco: 70 } },
      { texto: "Escuta atentamente, faz perguntas e ajuda a pessoa a se expressar", valor: { paciencia: 100, estresse: 10, comunicacao: 100, conhecimento: 80, foco: 90 } }
    ]
  },
  {
    id: 7,
    texto: "Em um ambiente com muitas distrações, você consegue:",
    alternativas: [
      { texto: "Não consigo me concentrar de forma alguma", valor: { paciencia: 20, estresse: 90, comunicacao: 30, conhecimento: 40, foco: 0 } },
      { texto: "Me distraio facilmente e tenho dificuldade para retomar", valor: { paciencia: 30, estresse: 70, comunicacao: 40, conhecimento: 50, foco: 20 } },
      { texto: "Consigo trabalhar, mas com eficiência reduzida", valor: { paciencia: 50, estresse: 50, comunicacao: 60, conhecimento: 60, foco: 50 } },
      { texto: "Mantenho o foco na maioria das vezes, com poucas interrupções", valor: { paciencia: 70, estresse: 30, comunicacao: 70, conhecimento: 70, foco: 80 } },
      { texto: "Consigo bloquear as distrações e manter total concentração", valor: { paciencia: 90, estresse: 10, comunicacao: 80, conhecimento: 80, foco: 100 } }
    ]
  },
  {
    id: 8,
    texto: "Quando você recebe uma crítica sobre seu trabalho, como reage?",
    alternativas: [
      { texto: "Fico na defensiva e rejeito a crítica", valor: { paciencia: 10, estresse: 90, comunicacao: 10, conhecimento: 20, foco: 30 } },
      { texto: "Aceito, mas fico ressentido internamente", valor: { paciencia: 30, estresse: 70, comunicacao: 30, conhecimento: 40, foco: 50 } },
      { texto: "Ouço e considero se há pontos válidos", valor: { paciencia: 60, estresse: 50, comunicacao: 60, conhecimento: 60, foco: 70 } },
      { texto: "Agradeço e peço sugestões específicas para melhorar", valor: { paciencia: 80, estresse: 30, comunicacao: 80, conhecimento: 80, foco: 80 } },
      { texto: "Vejo como uma oportunidade valiosa de crescimento", valor: { paciencia: 100, estresse: 10, comunicacao: 100, conhecimento: 100, foco: 90 } }
    ]
  },
  {
    id: 9,
    texto: "Ao explicar um conceito complexo para alguém, você prefere:",
    alternativas: [
      { texto: "Explicar rapidamente e esperar que a pessoa entenda", valor: { paciencia: 10, estresse: 70, comunicacao: 20, conhecimento: 50, foco: 30 } },
      { texto: "Dar uma explicação técnica detalhada de uma vez", valor: { paciencia: 30, estresse: 50, comunicacao: 40, conhecimento: 80, foco: 60 } },
      { texto: "Explicar passo a passo, verificando o entendimento", valor: { paciencia: 70, estresse: 30, comunicacao: 70, conhecimento: 70, foco: 80 } },
      { texto: "Usar analogias e exemplos práticos", valor: { paciencia: 80, estresse: 20, comunicacao: 90, conhecimento: 80, foco: 70 } },
      { texto: "Adaptar a explicação ao estilo de aprendizagem da pessoa", valor: { paciencia: 100, estresse: 10, comunicacao: 100, conhecimento: 90, foco: 90 } }
    ]
  },
  {
    id: 10,
    texto: "Quando você tem múltiplas tarefas com prazo apertado, como procede?",
    alternativas: [
      { texto: "Fico ansioso e tenho dificuldade para começar", valor: { paciencia: 20, estresse: 100, comunicacao: 30, conhecimento: 40, foco: 10 } },
      { texto: "Tento fazer tudo ao mesmo tempo", valor: { paciencia: 30, estresse: 80, comunicacao: 40, conhecimento: 50, foco: 20 } },
      { texto: "Priorizo as tarefas e trabalho em uma de cada vez", valor: { paciencia: 60, estresse: 50, comunicacao: 60, conhecimento: 70, foco: 70 } },
      { texto: "Crio um cronograma detalhado e sigo rigorosamente", valor: { paciencia: 80, estresse: 30, comunicacao: 70, conhecimento: 80, foco: 90 } },
      { texto: "Delego o que posso e foco no que só eu posso fazer", valor: { paciencia: 90, estresse: 20, comunicacao: 90, conhecimento: 90, foco: 100 } }
    ]
  },
  {
    id: 11,
    texto: "Quando você precisa memorizar informações novas, você:",
    alternativas: [
      { texto: "Tem grande dificuldade e esquece rapidamente", valor: { paciencia: 30, estresse: 80, comunicacao: 40, conhecimento: 10, foco: 20 } },
      { texto: "Memoriza temporariamente, mas esquece após alguns dias", valor: { paciencia: 40, estresse: 60, comunicacao: 50, conhecimento: 30, foco: 40 } },
      { texto: "Consegue lembrar se revisar algumas vezes", valor: { paciencia: 60, estresse: 40, comunicacao: 60, conhecimento: 60, foco: 60 } },
      { texto: "Usa técnicas de memorização como associações", valor: { paciencia: 80, estresse: 20, comunicacao: 70, conhecimento: 80, foco: 80 } },
      { texto: "Cria sistemas de revisão espaçada e retém por longo prazo", valor: { paciencia: 90, estresse: 10, comunicacao: 80, conhecimento: 100, foco: 100 } }
    ]
  },
  {
    id: 12,
    texto: "Em uma discussão acalorada, você geralmente:",
    alternativas: [
      { texto: "Eleva a voz e tenta impor seu ponto de vista", valor: { paciencia: 0, estresse: 100, comunicacao: 20, conhecimento: 30, foco: 40 } },
      { texto: "Defende firmemente sua posição sem ceder", valor: { paciencia: 20, estresse: 80, comunicacao: 30, conhecimento: 50, foco: 60 } },
      { texto: "Apresenta seus argumentos de forma calma", valor: { paciencia: 60, estresse: 50, comunicacao: 70, conhecimento: 70, foco: 70 } },
      { texto: "Escuta os outros e busca pontos em comum", valor: { paciencia: 80, estresse: 30, comunicacao: 90, conhecimento: 80, foco: 80 } },
      { texto: "Procura entender a raiz do conflito e mediar uma solução", valor: { paciencia: 100, estresse: 10, comunicacao: 100, conhecimento: 90, foco: 90 } }
    ]
  },
  {
    id: 13,
    texto: "Quando você está aprendendo algo novo e encontra dificuldades, você:",
    alternativas: [
      { texto: "Desiste e busca algo mais fácil", valor: { paciencia: 10, estresse: 90, comunicacao: 20, conhecimento: 10, foco: 20 } },
      { texto: "Continua tentando, mas fica frustrado facilmente", valor: { paciencia: 30, estresse: 70, comunicacao: 40, conhecimento: 30, foco: 40 } },
      { texto: "Persiste e tenta abordagens diferentes", valor: { paciencia: 60, estresse: 50, comunicacao: 60, conhecimento: 60, foco: 70 } },
      { texto: "Busca ajuda e recursos adicionais", valor: { paciencia: 80, estresse: 30, comunicacao: 80, conhecimento: 80, foco: 80 } },
      { texto: "Vê o desafio como parte do processo de aprendizado", valor: { paciencia: 100, estresse: 10, comunicacao: 90, conhecimento: 100, foco: 100 } }
    ]
  },
  {
    id: 14,
    texto: "Ao trabalhar em um projeto de longo prazo, você:",
    alternativas: [
      { texto: "Tem dificuldade em manter o interesse até o final", valor: { paciencia: 20, estresse: 70, comunicacao: 30, conhecimento: 40, foco: 10 } },
      { texto: "Começa com entusiasmo, mas perde o foco no meio", valor: { paciencia: 40, estresse: 60, comunicacao: 40, conhecimento: 50, foco: 30 } },
      { texto: "Mantém um ritmo constante, com alguns altos e baixos", valor: { paciencia: 60, estresse: 40, comunicacao: 60, conhecimento: 70, foco: 60 } },
      { texto: "Estabelece metas intermediárias para manter a motivação", valor: { paciencia: 80, estresse: 30, comunicacao: 70, conhecimento: 80, foco: 80 } },
      { texto: "Mantém o foco e a qualidade consistentes do início ao fim", valor: { paciencia: 100, estresse: 20, comunicacao: 80, conhecimento: 90, foco: 100 } }
    ]
  },
  {
    id: 15,
    texto: "Quando você precisa dar feedback negativo a alguém, você:",
    alternativas: [
      { texto: "Evita a situação ou é excessivamente direto e crítico", valor: { paciencia: 20, estresse: 80, comunicacao: 10, conhecimento: 30, foco: 40 } },
      { texto: "Dá o feedback, mas de forma desconfortável e vaga", valor: { paciencia: 40, estresse: 60, comunicacao: 30, conhecimento: 40, foco: 50 } },
      { texto: "Equilibra pontos positivos e negativos", valor: { paciencia: 60, estresse: 40, comunicacao: 60, conhecimento: 60, foco: 70 } },
      { texto: "Foca em comportamentos específicos, não na pessoa", valor: { paciencia: 80, estresse: 30, comunicacao: 80, conhecimento: 80, foco: 80 } },
      { texto: "Cria um diálogo construtivo com sugestões práticas", valor: { paciencia: 100, estresse: 20, comunicacao: 100, conhecimento: 90, foco: 90 } }
    ]
  },
  {
    id: 16,
    texto: "Quando você está lendo um material complexo, você:",
    alternativas: [
      { texto: "Tem dificuldade em manter a concentração", valor: { paciencia: 20, estresse: 80, comunicacao: 30, conhecimento: 20, foco: 10 } },
      { texto: "Lê rapidamente, mas absorve apenas o básico", valor: { paciencia: 40, estresse: 60, comunicacao: 40, conhecimento: 40, foco: 30 } },
      { texto: "Lê com atenção, mas precisa reler partes difíceis", valor: { paciencia: 60, estresse: 40, comunicacao: 60, conhecimento: 60, foco: 60 } },
      { texto: "Faz anotações e marca pontos importantes", valor: { paciencia: 80, estresse: 30, comunicacao: 70, conhecimento: 80, foco: 80 } },
      { texto: "Lê ativamente, relacionando com conhecimentos prévios", valor: { paciencia: 90, estresse: 20, comunicacao: 80, conhecimento: 100, foco: 100 } }
    ]
  },
  {
    id: 17,
    texto: "Em situações de pressão no trabalho, você geralmente:",
    alternativas: [
      { texto: "Fica paralisado ou entra em pânico", valor: { paciencia: 10, estresse: 100, comunicacao: 10, conhecimento: 20, foco: 0 } },
      { texto: "Fica ansioso e comete mais erros que o normal", valor: { paciencia: 30, estresse: 80, comunicacao: 30, conhecimento: 40, foco: 20 } },
      { texto: "Mantém a compostura, mas sente o estresse internamente", valor: { paciencia: 50, estresse: 60, comunicacao: 50, conhecimento: 60, foco: 50 } },
      { texto: "Permanece calmo e metódico na maioria das vezes", valor: { paciencia: 80, estresse: 30, comunicacao: 70, conhecimento: 80, foco: 80 } },
      { texto: "Trabalha melhor sob pressão, mantendo total clareza mental", valor: { paciencia: 100, estresse: 10, comunicacao: 90, conhecimento: 90, foco: 100 } }
    ]
  },
  {
    id: 18,
    texto: "Quando você precisa trabalhar em equipe, você prefere:",
    alternativas: [
      { texto: "Trabalhar sozinho na sua parte, com mínima interação", valor: { paciencia: 30, estresse: 60, comunicacao: 20, conhecimento: 50, foco: 70 } },
      { texto: "Dividir tarefas claramente para evitar sobreposições", valor: { paciencia: 50, estresse: 50, comunicacao: 40, conhecimento: 60, foco: 80 } },
      { texto: "Colaborar em algumas partes, trabalhar solo em outras", valor: { paciencia: 60, estresse: 40, comunicacao: 60, conhecimento: 70, foco: 70 } },
      { texto: "Manter comunicação constante e ajudar quando necessário", valor: { paciencia: 80, estresse: 30, comunicacao: 80, conhecimento: 80, foco: 60 } },
      { texto: "Trabalhar de forma totalmente colaborativa e integrada", valor: { paciencia: 90, estresse: 20, comunicacao: 100, conhecimento: 90, foco: 50 } }
    ]
  },
  {
    id: 19,
    texto: "Quando você comete um erro, como lida com isso?",
    alternativas: [
      { texto: "Tento esconder ou negar o erro", valor: { paciencia: 10, estresse: 90, comunicacao: 0, conhecimento: 10, foco: 20 } },
      { texto: "Reconheço, mas fico muito frustrado comigo mesmo", valor: { paciencia: 30, estresse: 80, comunicacao: 30, conhecimento: 30, foco: 40 } },
      { texto: "Assumo a responsabilidade e tento corrigir", valor: { paciencia: 60, estresse: 50, comunicacao: 60, conhecimento: 60, foco: 70 } },
      { texto: "Analiso o que deu errado para evitar repetir", valor: { paciencia: 80, estresse: 30, comunicacao: 80, conhecimento: 80, foco: 80 } },
      { texto: "Vejo como oportunidade de aprendizado e compartilho com outros", valor: { paciencia: 100, estresse: 10, comunicacao: 100, conhecimento: 100, foco: 90 } }
    ]
  },
  {
    id: 20,
    texto: "Ao enfrentar uma tarefa repetitiva e monótona, você:",
    alternativas: [
      { texto: "Evita ao máximo ou procrastina constantemente", valor: { paciencia: 10, estresse: 80, comunicacao: 20, conhecimento: 30, foco: 10 } },
      { texto: "Faz com pressa para terminar logo, mesmo com erros", valor: { paciencia: 30, estresse: 70, comunicacao: 30, conhecimento: 40, foco: 30 } },
      { texto: "Completa a tarefa, mas com frequentes pausas", valor: { paciencia: 50, estresse: 50, comunicacao: 50, conhecimento: 50, foco: 50 } },
      { texto: "Cria um sistema para tornar o processo mais eficiente", valor: { paciencia: 70, estresse: 30, comunicacao: 70, conhecimento: 80, foco: 80 } },
      { texto: "Mantém a qualidade e consistência do início ao fim", valor: { paciencia: 100, estresse: 20, comunicacao: 80, conhecimento: 90, foco: 100 } }
    ]
  }
];

export default perguntas;
