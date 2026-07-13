import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Dumbbell,
  Flame,
  HeartPulse,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const links = {
  plans:
    import.meta.env.VITE_PLANS_URL ??
    "https://sua-pagina-de-planos.com.br",
  whatsapp:
    import.meta.env.VITE_WHATSAPP_URL ??
    "https://wa.me/5519999999999",
};

export const heroImages = [
  "/Hero/IMG_8323.jpg",
  "/Hero/image00008.jpeg",
  "/Hero/image00010.jpeg",   
];

export const transformations = [
  {
    label: "Evolução Física",
    text: "Resultados reais conquistados com disciplina e constância.",

    before: "/transformations/aluno1-before.jpeg",
    after: "/transformations/aluno1-after.jpeg",
  },

  {
    label: "Mais performace",
    text: "Resultados reais conquistados com disciplina e constância.",

    before: "/transformations/aluno2-before.jpeg",
    after: "/transformations/aluno2-after.jpeg",
  },

  {
    label: "Consistência",
    text: "Resultados reais conquistados com disciplina e constância.",

    before: "/transformations/aluno3-before.jpeg",
    after: "/transformations/aluno3-after.jpeg",
  },
];

export const benefits = [
  {
    icon: Target,
    title: "Treino com direção",
    text: "Cada aula tem objetivo claro, intensidade controlada e progressão para você sair melhor do que entrou.",
  },
  {
    icon: ShieldCheck,
    title: "Técnica antes da carga",
    text: "Movimentos bem ensinados, ajustes reais e seguranca para evoluir sem pular etapas.",
  },
  {
    icon: HeartPulse,
    title: "Condicionamento real",
    text: "Força, resistência e capacidade mental em um método feito para vida, não apenas para foto.",
  },
  {
    icon: Users,
    title: "Comunidade forte",
    text: "Um ambiente que empurra voce para frente quando a motivação não aparece.",
  },
];

export const schedules = [
  {
    title: "Cross Training",
    description:
      "Treinos para todos os níveis, com foco em condicionamento, força e performance.",
    button: "Conhecer os Planos",
    icon: Dumbbell,
    times: [
      "06:00",
      "07:00",
      "08:00",
      "16:00",
      "17:20",
      "18:20",
      "19:20",
      "20:20",
    ],
  },

  {
    title: "Muay Thai",
    description:
      "Aulas para iniciantes e avançados, desenvolvendo técnica, disciplina e condicionamento.",
    button: "Conhecer os Planos",
    icon: Trophy,
    times: [
      "Terça • 06:30",
      "Quinta • 06:30",
      "Segunda • 19:00",
      "Quarta • 19:00",
      "Segunda a Quinta • 20:20",
    ],
  },
];

export const methodSteps = [
  { title: "Avaliação", text: "Entender ponto de partida, rotina e limites." },
  { title: "Estratégia", text: "Definir foco, frequência e caminho de evolução." },
  { title: "Treino", text: "Executar com técnica, intensidade e presençaa." },
  { title: "Acompanhamento", text: "Corrigir, ajustar e manter consistência." },
  { title: "Evolução", text: "Aumentar capacidade física e confiança." },
  { title: "Resultado", text: "Transformar comportamento em performance." },
];

export const numbers = [
  {
    value: "+130",
    label: "alunos ativos",
    icon: Users,
  },
  {
    value: "8 anos",
    label: "de história",
    icon: Flame,
  },
  {
    value: "+1000",
    label: "vidas transformadas",
    icon: Trophy,
  },
  {
    value: "Treinos",
    label: "Todos os dias",
    icon: Dumbbell,
  },
];

export const testimonials = [
  {
    name: "Pedro",
    role: "Aluno Box Louveira",

    text:
      "Os resultados apareceram muito mais rápido do que eu imaginava.",

    title: "Feedback do Pedro",

    video: "/TestimonialsVideo/Pedro.mp4",
  },

  {
    name: "Ana",
    role: "Aluna Box Louveira",

    text:
      "Aqui eu descobri que sou capaz de muito mais do que imaginava.",

    title: "Feedback da Ana",

    video: "/TestimonialsVideo/Ana.mp4",
  },

  {
    name: "Melhores momentos",
    role: "Alunos Box Louveira",

    text:
      "A melhor parte não é chegar ao objetivo, é perceber o quanto você evoluiu no caminho.",

    title: "Transformações Reais",

    video: "/TestimonialsVideo/Melhoresmomentos.mp4",
  },
];

export const footerLinks = [
  { label: "Instagram", href: "https://www.instagram.com/boxlouveira" },
  { label: "WhatsApp", href: links.whatsapp },
  { label: "Planos", href: links.plans },
];

export const visualIcons = {
  activity: Activity,
  arrow: ArrowUpRight,
  trophy: Trophy,
};

export const quotes = {
  wellington: {
    quote:
      "Eu achava que Cross Training era só para quem já era atleta. Hoje vejo que qualquer pessoa consegue evoluir quando encontra um lugar que realmente acompanha você.",
    author: "Wellington",
  },

  adilma: {
    quote:
      "Achei que não conseguiria acompanhar os treinos, mas descobri que cada pessoa evolui no seu próprio ritmo.",
    author: "Adilma",
  },

  vera: {
    quote:
      "O Muay Thai me fez recuperar minha confiança e ainda encontrei uma equipe que me incentivou desde o primeiro dia.",
    author: "Vera",
  },

  joyce: {
    quote:
      "Eu já tinha tentado academia várias vezes. Aqui foi a primeira vez que realmente consegui criar uma rotina.",
    author: "Joyce",
  },

  marinalva: {
    quote:
      "Mais do que um lugar para treinar, encontrei pessoas que me acolheram e me fizeram sentir parte da família Box Louveira.",
    author: "Marinalva",
  },

  bruna: {
    quote:
      "Eu tinha vergonha de começar. Hoje percebo que dar o primeiro passo foi a melhor decisão que tomei.",
    author: "Bruna",
  },
};