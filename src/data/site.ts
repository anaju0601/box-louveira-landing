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
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=2400&q=85",
];

export const transformations = [
  {
    label: "Evolução física",
    text: "Placeholder para antes e depois real.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Mais performance",
    text: "Placeholder para resultado de aluno.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Consistência",
    text: "Placeholder para jornada semanal.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
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
    name: "Aluno Box Louveira",
    text: "Entrei achando que não conseguiria acompanhar. Hoje treino com disciplina e vejo resultado toda semana.",
  },
  {
    name: "Aluna Box Louveira",
    text: "O ambiente muda tudo. Voce chega cansada, mas sai com a sensação de que venceu o dia.",
  },
  {
    name: "Aluno Box Louveira",
    text: "Aqui eu aprendi a treinar de verdade: técnica, intensidade e constância.",
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
