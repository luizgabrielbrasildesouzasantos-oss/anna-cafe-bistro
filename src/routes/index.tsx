import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Coffee,
  ExternalLink,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Quote,
  Star,
  Utensils,
  X,
  ChevronDown,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export const Route = createFileRoute("/")({
  component: AnnaCafePage,
  head: () => ({
    meta: [
      { title: "Anna Café Bistro — by Chocolatum | Belo Horizonte" },
      {
        name: "description",
        content:
          "Anna Café Bistro - by Chocolatum. Confeitaria, café e bistrô no Prado, em Belo Horizonte.",
      },
      {
        property: "og:title",
        content: "Anna Café Bistro — by Chocolatum",
      },
      {
        property: "og:description",
        content:
          "Sabores que abraçam, doces que ficam na memória. Confeitaria, café e bistrô no Prado.",
      },
      { property: "og:type", content: "website" },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
});

const COLORS = {
  cream: "#FFF8F0",
  chocolate: "#3B2218",
  cocoa: "#6B4226",
  caramel: "#C98B4B",
  rose: "#E8B4B8",
  olive: "#7A8450",
};

const whatsapp = "https://wa.me/5531999022466";
const instagram =
  "https://www.instagram.com/annacafebistro_bychocolatum";
const maps =
  "https://www.google.com/maps/search/?api=1&query=R.%20Turquesa%2C%20953%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG";

const heroImage =
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=90";

const images = [
  {
    src: heroImage,
    alt: "Sobremesa artesanal",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    alt: "Café servido em ambiente acolhedor",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    alt: "Bolo artesanal",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    alt: "Confeitaria artesanal",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
    alt: "Pães e quitandas artesanais",
    className: "",
  },
];

const reviews = [
  {
    text: "Lugar point, comidas e sobremesas maravilhosas e o biscoito frito de vó, meu Deus! Voltarei e indicarei muito.",
    author: "Paulo E.",
  },
  {
    text: "Tudo muito gostoso e em conta!!!",
    author: "Carol L.",
  },
  {
    text: "Uma delícia de lugar, o espaço é uma graça! Pedimos um pastel de massa de coxinha com recheio de alho-poró, bacon e quatro queijos, frito na hora.",
    author: "Isabela R.",
    detail: "Local Guide",
  },
  {
    text: "Quero voltar mais vezes pra experimentar os pratos do almoço.",
    author: "Cliente",
  },
];

const menuData = {
  "Bolos e Doces": [
    {
      title: "Bolo artesanal",
      description:
        "Fatias e preparos artesanais para acompanhar aquele café sem pressa.",
      tag: "Feito com carinho",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Bolo de pote",
      description:
        "Uma opção delicada para adoçar a pausa e levar um pouco da casa com você.",
      tag: "Docinho da casa",
      image:
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Sobremesas",
      description:
        "Doces pensados para transformar uma refeição em memória.",
      tag: "Queridinhas",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    },
  ],
  Salgados: [
    {
      title: "Pastel de massa de coxinha",
      description:
        "Alho-poró, bacon e quatro queijos, frito na hora.",
      tag: "Queridinho da casa",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Biscoito frito de vó",
      description:
        "Uma lembrança afetiva com gosto de quintal e cozinha mineira.",
      tag: "Memória afetiva",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    },
  ],
  Almoço: [
    {
      title: "Prato do dia",
      description:
        "Preparos de almoço para quem quer comida gostosa e uma pausa acolhedora.",
      tag: "Almoço",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Sabores da casa",
      description:
        "Uma cozinha com espaço para refeições que convidam a voltar.",
      tag: "Confira no dia",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    },
  ],
  Cafés: [
    {
      title: "Café especial",
      description:
        "Acompanhamento perfeito para doces, conversas e momentos tranquilos.",
      tag: "Café",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Café & companhia",
      description:
        "Uma pausa gostosa no coração do Prado.",
      tag: "Momento Anna",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
    },
  ],
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`anna-reveal ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Stars({ small = false }: { small?: boolean }) {
  return (
    <div className={`flex gap-1 ${small ? "text-sm" : "text-base"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={small ? 13 : 16} fill="currentColor" />
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <div
        className={`mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? "text-[#E8B4B8]" : "text-[#C98B4B]"
        }`}
      >
        <span className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
        <span className="h-px w-8 bg-current opacity-60" />
      </div>

      <h2
        className={`font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl ${
          light ? "text-[#FFF8F0]" : "text-[#3B2218]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-sm leading-7 sm:text-base ${
            light ? "text-white/65" : "text-[#6B4226]/70"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

function AnnaCafePage() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuTab, setMenuTab] =
    useState<keyof typeof menuData>("Bolos e Doces");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tabs = Object.keys(menuData) as Array<keyof typeof menuData>;

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1450);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0,
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % reviews.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".anna-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anna-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loading]);

  const activeItems = useMemo(() => menuData[menuTab], [menuTab]);

  const scrollTo = (id: string) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (loading) {
    return (
      <>
        <style>{globalStyles}</style>

        <div className="anna-preloader">
          <div className="anna-preloader-mark">
            <span>A</span>
          </div>

          <div className="mt-5 text-center">
            <p className="font-serif text-3xl text-[#FFF8F0]">
              Anna Café Bistro
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.4em] text-[#C98B4B]">
              by Chocolatum
            </p>
          </div>

          <div className="mt-8 h-px w-32 overflow-hidden bg-white/10">
            <div className="anna-loader-line" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{globalStyles}</style>

      <div
        className="min-h-screen overflow-x-hidden bg-[#FFF8F0] text-[#3B2218]"
        style={
          {
            "--cream": COLORS.cream,
            "--chocolate": COLORS.chocolate,
            "--cocoa": COLORS.cocoa,
            "--caramel": COLORS.caramel,
            "--rose": COLORS.rose,
            "--olive": COLORS.olive,
          } as CSSProperties
        }
      >
        {/* Scroll progress */}
        <div
          className="fixed left-0 top-0 z-[100] h-[3px] bg-[#C98B4B] shadow-[0_0_12px_rgba(201,139,75,.7)]"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* HEADER */}
        <header
          className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-[#FFF8F0]/90 shadow-[0_12px_40px_rgba(59,34,24,.08)] backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
            <button
              onClick={() => scrollTo("inicio")}
              className="group text-left"
              aria-label="Ir para o início"
            >
              <div className="font-serif text-[21px] leading-none text-[#3B2218]">
                Anna Café Bistro
              </div>
              <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.38em] text-[#C98B4B]">
                by Chocolatum
              </div>
            </button>

            <nav className="hidden items-center gap-7 lg:flex">
              {[
                ["Início", "inicio"],
                ["Sobre", "sobre"],
                ["Cardápio", "cardapio"],
                ["Ambiente", "ambiente"],
                ["Avaliações", "avaliacoes"],
                ["Contato", "contato"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id!)}
                  className="relative text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3B2218]/70 transition-colors hover:text-[#C98B4B]"
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full bg-[#C98B4B] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-white shadow-[0_10px_25px_rgba(201,139,75,.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(201,139,75,.32)] sm:flex"
              >
                <MessageCircle size={14} />
                Pedir no WhatsApp
              </a>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3B2218]/10 bg-white/50 lg:hidden"
                aria-label="Abrir menu"
              >
                {mobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {mobileMenu && (
            <div className="border-t border-[#3B2218]/10 bg-[#FFF8F0]/96 px-5 py-5 backdrop-blur-xl lg:hidden">
              <div className="flex flex-col">
                {[
                  ["Início", "inicio"],
                  ["Sobre", "sobre"],
                  ["Cardápio", "cardapio"],
                  ["Ambiente", "ambiente"],
                  ["Avaliações", "avaliacoes"],
                  ["Contato", "contato"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id!)}
                    className="border-b border-[#3B2218]/7 py-4 text-left text-sm font-medium"
                  >
                    {label}
                  </button>
                ))}

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#C98B4B] py-4 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <MessageCircle size={16} />
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* HERO */}
          <section
            id="inicio"
            className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(201,139,75,.20),transparent_35%),radial-gradient(circle_at_15%_75%,rgba(232,180,184,.18),transparent_30%),linear-gradient(135deg,#FFF8F0_0%,#F7E9D9_55%,#F2D8C5_100%)]" />

            <div className="anna-grain absolute inset-0 opacity-[0.16]" />

            {[
              ["18%", "20%", "12px"],
              ["72%", "15%", "8px"],
              ["83%", "70%", "14px"],
              ["12%", "68%", "7px"],
              ["58%", "12%", "6px"],
              ["46%", "83%", "10px"],
              ["92%", "42%", "6px"],
            ].map(([top, left, size], index) => (
              <span
                key={index}
                className="anna-particle absolute rounded-full bg-[#C98B4B]/40"
                style={{
                  top,
                  left,
                  width: size,
                  height: size,
                  animationDelay: `${index * 0.7}s`,
                }}
              />
            ))}

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:py-20">
              <div className="relative z-10 max-w-2xl">
                <Reveal>
                  <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C98B4B]/25 bg-white/45 px-4 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#7A8450]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#6B4226]">
                      Prado · Belo Horizonte
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="max-w-3xl font-serif text-[clamp(3.35rem,8vw,7.4rem)] leading-[.86] tracking-[-.055em] text-[#3B2218]">
                    Sabores que
                    <br />
                    <span className="relative italic text-[#C98B4B]">
                      abraçam,
                    </span>
                    <br />
                    doces que ficam
                    <br />
                    na memória.
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-7 max-w-xl text-sm leading-7 text-[#6B4226]/75 sm:text-base">
                    Confeitaria, café e bistrô no coração do Prado, em Belo
                    Horizonte. Um cantinho para comer bem, conversar e criar
                    memórias.
                  </p>
                </Reveal>

                <Reveal delay={240}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={() => scrollTo("cardapio")}
                      className="group flex items-center gap-3 rounded-full bg-[#3B2218] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_40px_rgba(59,34,24,.18)] transition-all hover:-translate-y-1"
                    >
                      Ver cardápio
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <a
                      href={maps}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-full border border-[#3B2218]/15 bg-white/35 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#3B2218] backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/70"
                    >
                      <Navigation size={14} />
                      Como chegar
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={320}>
                  <div className="mt-9 flex items-center gap-5">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/45 px-4 py-3 shadow-sm backdrop-blur-md">
                      <div className="text-[#C98B4B]">
                        <Stars small />
                      </div>
                      <div>
                        <p className="font-serif text-xl leading-none text-[#3B2218]">
                          5,0
                        </p>
                        <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#6B4226]/60">
                          no Google
                        </p>
                      </div>
                    </div>

                    <div className="hidden h-8 w-px bg-[#3B2218]/10 sm:block" />

                    <p className="hidden max-w-[180px] text-[11px] leading-5 text-[#6B4226]/60 sm:block">
                      Um café charmoso com sabor de cozinha afetiva mineira.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal
                delay={180}
                className="relative mx-auto w-full max-w-[570px] lg:ml-auto"
              >
                <div className="relative aspect-[.82] sm:aspect-[.9]">
                  <div className="absolute -right-4 top-10 h-40 w-40 rounded-full bg-[#E8B4B8]/35 blur-3xl" />
                  <div className="absolute -bottom-5 left-5 h-44 w-44 rounded-full bg-[#C98B4B]/20 blur-3xl" />

                  <div className="anna-hero-image absolute inset-5 overflow-hidden rounded-[46%_46%_24%_24%] border-[8px] border-white/60 shadow-[0_35px_90px_rgba(59,34,24,.22)] sm:inset-8">
                    <img
                      src={heroImage}
                      alt="Sobremesa artesanal — imagem ilustrativa"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B2218]/30 via-transparent to-white/10" />
                  </div>

                  <div className="anna-float absolute left-0 top-[18%] flex items-center gap-3 rounded-2xl border border-white/60 bg-white/75 px-4 py-3 shadow-[0_20px_45px_rgba(59,34,24,.12)] backdrop-blur-xl">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8B4B8]/35 text-[#6B4226]">
                      <Heart size={16} fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-serif text-sm">Feito com carinho</p>
                      <p className="text-[8px] uppercase tracking-wider text-[#6B4226]/55">
                        todos os dias
                      </p>
                    </div>
                  </div>

                  <div className="anna-float-delayed absolute bottom-[13%] right-0 flex items-center gap-3 rounded-2xl border border-white/60 bg-[#3B2218]/95 px-4 py-3 text-white shadow-[0_20px_45px_rgba(59,34,24,.2)] backdrop-blur-xl">
                    <Coffee size={18} className="text-[#C98B4B]" />
                    <div>
                      <p className="font-serif text-sm">Café & aconchego</p>
                      <p className="text-[8px] uppercase tracking-wider text-white/45">
                        Prado · BH
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-[8%] h-16 w-16 rounded-full border border-[#C98B4B]/25" />
                  <div className="absolute right-[8%] top-2 h-8 w-8 rounded-full bg-[#7A8450]/20" />
                </div>
              </Reveal>
            </div>

            <button
              onClick={() => scrollTo("destaques")}
              className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#6B4226]/50 md:flex"
              aria-label="Rolar para baixo"
            >
              <span className="text-[8px] font-bold uppercase tracking-[0.3em]">
                Descubra
              </span>
              <span className="anna-scroll-mouse flex h-9 w-6 items-start justify-center rounded-full border border-[#6B4226]/25 p-1.5">
                <span className="h-1.5 w-1 rounded-full bg-[#C98B4B]" />
              </span>
            </button>
          </section>

          {/* MARQUEE */}
          <section
            id="destaques"
            className="overflow-hidden border-y border-[#3B2218]/8 bg-[#3B2218] py-5"
          >
            <div className="anna-marquee flex w-max items-center gap-8 whitespace-nowrap">
              {[...Array(2)].flatMap((_, group) =>
                [
                  "Bolos artesanais",
                  "Café especial",
                  "Almoço caseiro",
                  "Pastel frito na hora",
                  "Biscoito frito de vó",
                  "Sobremesas",
                  "Preço justo",
                ].map((item, index) => (
                  <span
                    key={`${group}-${index}`}
                    className="flex items-center gap-8 font-serif text-xl italic text-[#FFF8F0]/90 sm:text-2xl"
                  >
                    {item}
                    <span className="text-[#C98B4B]">✦</span>
                  </span>
                )),
              )}
            </div>
          </section>

          {/* SOBRE */}
          <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute right-[-100px] top-24 h-80 w-80 rounded-full bg-[#E8B4B8]/20 blur-3xl" />

            <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
              <Reveal className="relative mx-auto w-full max-w-[530px]">
                <div className="grid grid-cols-[1.15fr_.85fr] gap-4">
                  <div className="relative pt-12">
                    <img
                      src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85"
                      alt="Confeitaria artesanal — imagem ilustrativa"
                      className="h-[440px] w-full rounded-[42%_42%_14%_14%] object-cover shadow-[0_25px_70px_rgba(59,34,24,.13)]"
                      loading="lazy"
                    />

                    <div className="absolute -bottom-4 -right-5 rounded-2xl bg-[#C98B4B] px-5 py-4 text-white shadow-xl">
                      <p className="font-serif text-2xl">Anna</p>
                      <p className="text-[8px] uppercase tracking-[.25em] text-white/65">
                        Café Bistro
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85"
                      alt="Café artesanal — imagem ilustrativa"
                      className="mt-2 h-64 w-full rotate-2 rounded-[22px] object-cover shadow-xl"
                      loading="lazy"
                    />

                    <div className="absolute bottom-8 left-[-20px] flex h-20 w-20 -rotate-6 items-center justify-center rounded-full border border-[#C98B4B]/20 bg-[#FFF8F0] shadow-lg">
                      <Leaf size={24} className="text-[#7A8450]" />
                    </div>
                  </div>
                </div>
              </Reveal>

              <div>
                <SectionHeading
                  eyebrow="Sobre a casa"
                  title="Um lugar onde o sabor encontra a memória."
                  description="Uma pausa gostosa no Prado, com doces, café, almoço e aquela sensação boa de estar em um lugar que acolhe."
                />

                <Reveal delay={100}>
                  <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-[#6B4226]/70 lg:text-left">
                    O Anna Café Bistro - by Chocolatum combina o carinho da
                    confeitaria com o clima acolhedor de um bistrô. Entre
                    bolos, cafés, sobremesas e pratos de almoço, aparecem
                    sabores que lembram casa, família e aquelas receitas que
                    fazem a gente querer voltar.
                  </p>
                </Reveal>

                <Reveal delay={180}>
                  <div className="mt-10 grid grid-cols-3 divide-x divide-[#3B2218]/10 rounded-3xl border border-[#3B2218]/8 bg-white/40 py-6">
                    <div className="px-3 text-center">
                      <p className="font-serif text-3xl text-[#C98B4B]">5,0</p>
                      <p className="mt-1 text-[8px] font-bold uppercase tracking-wider text-[#6B4226]/55">
                        avaliação
                      </p>
                    </div>

                    <div className="px-3 text-center">
                      <p className="font-serif text-2xl text-[#C98B4B]">
                        carinho
                      </p>
                      <p className="mt-1 text-[8px] font-bold uppercase tracking-wider text-[#6B4226]/55">
                        em cada detalhe
                      </p>
                    </div>

                    <div className="px-3 text-center">
                      <p className="font-serif text-3xl text-[#C98B4B]">+</p>
                      <p className="mt-1 text-[8px] font-bold uppercase tracking-wider text-[#6B4226]/55">
                        sabores para provar
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* MENU */}
          <section
            id="cardapio"
            className="relative overflow-hidden bg-[#F2E4D4] py-24 sm:py-32"
          >
            <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#E8B4B8]/20 blur-3xl" />
            <div className="absolute right-[-100px] bottom-0 h-96 w-96 rounded-full bg-[#C98B4B]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <SectionHeading
                eyebrow="Da nossa cozinha"
                title="Pequenos motivos para voltar."
                description="Uma seleção ilustrativa inspirada nos sabores e destaques mencionados pelos clientes."
              />

              <Reveal delay={100} className="mt-10">
                <div className="flex justify-center overflow-x-auto pb-2">
                  <div className="flex min-w-max gap-1 rounded-full border border-[#3B2218]/10 bg-white/50 p-1.5 backdrop-blur-md">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setMenuTab(tab)}
                        className={`rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                          menuTab === tab
                            ? "bg-[#3B2218] text-white shadow-lg"
                            : "text-[#6B4226]/60 hover:text-[#3B2218]"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {activeItems.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <article className="group overflow-hidden rounded-[28px] border border-[#3B2218]/8 bg-[#FFF8F0] shadow-[0_15px_45px_rgba(59,34,24,.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(59,34,24,.13)]">
                      <div className="relative aspect-[1.18] overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.title} — imagem ilustrativa`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2218]/30 to-transparent opacity-60" />

                        <span className="absolute left-4 top-4 rounded-full bg-[#FFF8F0]/90 px-3 py-2 text-[8px] font-bold uppercase tracking-[.12em] text-[#6B4226] backdrop-blur-md">
                          {item.tag}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serif text-2xl text-[#3B2218]">
                            {item.title}
                          </h3>

                          <span className="mt-1 text-[8px] font-bold uppercase tracking-wider text-[#C98B4B]">
                            Consulte
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-6 text-[#6B4226]/65">
                          {item.description}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-[#7A8450]">
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          Cardápio ilustrativo
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <p className="mt-8 text-center text-[10px] italic text-[#6B4226]/50">
                Cardápio ilustrativo da demonstração · itens e disponibilidade
                devem ser confirmados com o estabelecimento.
              </p>
            </div>
          </section>

          {/* AMBIENTE */}
          <section id="ambiente" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <SectionHeading
                eyebrow="O ambiente"
                title="Uma graça de lugar."
                description="Um espaço para chegar, sentar e deixar o tempo passar um pouquinho mais devagar."
              />

              <Reveal delay={100} className="mt-12">
                <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:gap-5 lg:grid-cols-4">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      onClick={() => setLightbox(index)}
                      className={`group relative overflow-hidden rounded-[24px] text-left ${
                        index === 0
                          ? "col-span-2 row-span-2"
                          : index === 3
                            ? "col-span-2"
                            : ""
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-[#3B2218]/0 transition-all duration-500 group-hover:bg-[#3B2218]/25" />

                      <div className="absolute bottom-4 left-4 right-4 translate-y-3 rounded-xl bg-white/85 px-4 py-3 opacity-0 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#6B4226]">
                          {image.alt}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </Reveal>

              <div className="mt-8 flex items-center justify-center gap-2 text-center text-sm italic text-[#6B4226]/65">
                <span>“O espaço é uma graça.”</span>
                <span className="text-[#C98B4B]">♥</span>
              </div>

              <p className="mt-3 text-center text-[9px] uppercase tracking-wider text-[#6B4226]/40">
                Imagens ilustrativas · substituir pelas fotos reais da casa
              </p>
            </div>
          </section>

          {/* REVIEWS */}
          <section
            id="avaliacoes"
            className="relative overflow-hidden bg-[#3B2218] py-24 sm:py-32"
          >
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C98B4B]/10 blur-3xl" />

            <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
              <SectionHeading
                eyebrow="Quem passou por aqui"
                title="Palavras que dão vontade de provar."
                light
              />

              <Reveal delay={120} className="mt-12">
                <div className="relative rounded-[38px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_80px_rgba(0,0,0,.15)] backdrop-blur-sm sm:p-12">
                  <Quote
                    className="absolute left-7 top-7 text-[#C98B4B]/30"
                    size={58}
                    strokeWidth={1}
                  />

                  <div className="relative mx-auto max-w-3xl text-center">
                    <div className="flex justify-center text-[#C98B4B]">
                      <Stars />
                    </div>

                    <p className="mt-8 font-serif text-2xl leading-relaxed text-[#FFF8F0] sm:text-4xl">
                      “{reviews[reviewIndex]!.text}”
                    </p>

                    <div className="mt-8">
                      <p className="text-sm font-semibold text-white/90">
                        {reviews[reviewIndex]!.author}
                      </p>

                      {reviews[reviewIndex]!.detail && (
                        <p className="mt-1 text-[9px] uppercase tracking-[.2em] text-[#C98B4B]">
                          {reviews[reviewIndex]!.detail}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-center gap-2">
                    {reviews.map((review, index) => (
                      <button
                        key={review.author}
                        onClick={() => setReviewIndex(index)}
                        aria-label={`Avaliação ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          index === reviewIndex
                            ? "w-8 bg-[#C98B4B]"
                            : "w-1.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center gap-2">
                    <button
                      onClick={() =>
                        setReviewIndex(
                          (reviewIndex - 1 + reviews.length) % reviews.length,
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white"
                      aria-label="Avaliação anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      onClick={() =>
                        setReviewIndex((reviewIndex + 1) % reviews.length)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white"
                      aria-label="Próxima avaliação"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Anna%20Caf%C3%A9%20Bistro%20by%20Chocolatum"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[9px] font-bold uppercase tracking-[.18em] text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <Star size={13} fill="#C98B4B" className="text-[#C98B4B]" />
                  Avaliações reais do Google
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </section>

          {/* CONTATO */}
          <section id="contato" className="relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <SectionHeading
                eyebrow="Venha conhecer"
                title="Seu próximo café começa aqui."
                description="Passe para um café, um doce, um almoço ou simplesmente para conhecer esse cantinho no Prado."
              />

              <div className="mt-12 grid overflow-hidden rounded-[36px] border border-[#3B2218]/8 bg-white shadow-[0_25px_80px_rgba(59,34,24,.08)] lg:grid-cols-[.9fr_1.1fr]">
                <div className="relative p-7 sm:p-10 lg:p-12">
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#E8B4B8]/20 blur-3xl" />

                  <div className="relative">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#7A8450]/10 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-[#7A8450]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7A8450]" />
                      Aberto todos os dias até 22h30*
                    </div>

                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F2E4D4] text-[#C98B4B]">
                          <MapPin size={18} />
                        </div>

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wider text-[#6B4226]/45">
                            Endereço
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#3B2218]">
                            R. Turquesa, 953 - Prado
                            <br />
                            Belo Horizonte - MG, 30850-760
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F2E4D4] text-[#C98B4B]">
                          <MessageCircle size={18} />
                        </div>

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wider text-[#6B4226]/45">
                            WhatsApp
                          </p>
                          <a
                            href={whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 block text-sm text-[#3B2218] hover:text-[#C98B4B]"
                          >
                            (31) 99902-2466
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F2E4D4] text-[#C98B4B]">
                          <Clock3 size={18} />
                        </div>

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wider text-[#6B4226]/45">
                            Horário
                          </p>
                          <p className="mt-1 text-sm text-[#3B2218]">
                            Aberto todos os dias até 22h30*
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-9 grid gap-3 sm:grid-cols-2">
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full bg-[#C98B4B] px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-xl"
                      >
                        <MessageCircle size={15} />
                        Chamar no WhatsApp
                      </a>

                      <a
                        href={maps}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full border border-[#3B2218]/12 px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-[#3B2218] transition hover:-translate-y-0.5 hover:bg-[#FFF8F0]"
                      >
                        <Navigation size={15} />
                        Traçar rota
                      </a>
                    </div>

                    <a
                      href={instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 rounded-full border border-[#3B2218]/12 px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-[#3B2218] transition hover:bg-[#FFF8F0]"
                    >
                      <Instagram size={15} />
                      @annacafebistro_bychocolatum
                    </a>

                    <p className="mt-6 text-[9px] leading-5 text-[#6B4226]/45">
                      * Horários completos devem ser confirmados com o
                      estabelecimento.
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[430px] bg-[#E8DDD1]">
                  <iframe
                    title="Localização do Anna Café Bistro"
                    src="https://www.google.com/maps?q=R.%20Turquesa%2C%20953%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG&output=embed"
                    className="absolute inset-0 h-full w-full grayscale-[.25]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <div className="pointer-events-none absolute left-5 top-5 rounded-2xl bg-[#FFF8F0]/90 px-4 py-3 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#C98B4B]" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#3B2218]">
                        Prado · Belo Horizonte
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="relative overflow-hidden bg-[#3B2218] px-5 pb-8 pt-20 text-white sm:px-8 lg:px-10">
          <div className="absolute left-0 right-0 top-0 h-10 -translate-y-1/2 rounded-[50%] bg-[#FFF8F0]" />

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[1.4fr_.8fr_.8fr]">
              <div>
                <p className="font-serif text-3xl">Anna Café Bistro</p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[.38em] text-[#C98B4B]">
                  by Chocolatum
                </p>

                <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
                  Confeitaria, café e bistrô com aquele aconchego que faz a
                  gente querer ficar mais um pouquinho.
                </p>

                <div className="mt-6 flex gap-2">
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#C98B4B]">
                  Visite
                </p>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  R. Turquesa, 953
                  <br />
                  Prado, Belo Horizonte - MG
                </p>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#C98B4B]">
                  Navegação
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  {[
                    ["Sobre", "sobre"],
                    ["Cardápio", "cardapio"],
                    ["Ambiente", "ambiente"],
                    ["Contato", "contato"],
                  ].map(([label, id]) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id!)}
                      className="text-left text-sm text-white/50 transition hover:text-white"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/8 pt-6 text-[9px] uppercase tracking-wider text-white/30 sm:flex-row">
              <span>Feito com carinho em Belo Horizonte ♥</span>
              <span>Demonstração de design</span>
            </div>
          </div>
        </footer>

        {/* WHATSAPP FLOAT */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="anna-whatsapp fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#7A8450] text-white shadow-[0_12px_35px_rgba(122,132,80,.35)] transition-transform hover:scale-110 sm:bottom-7 sm:right-7"
          aria-label="Falar com Anna Café Bistro pelo WhatsApp"
        >
          <MessageCircle size={23} />
          <span className="absolute inset-0 rounded-full border-2 border-[#7A8450] opacity-40" />
        </a>

        {/* LIGHTBOX */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#1E110C]/90 p-5 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label="Fechar imagem"
            >
              <X size={20} />
            </button>

            <img
              src={images[lightbox]!.src}
              alt={images[lightbox]!.alt}
              className="max-h-[85vh] max-w-[92vw] rounded-[28px] object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Anna Café Bistro - by Chocolatum",
              telephone: "+55 31 99902-2466",
              address: {
                "@type": "PostalAddress",
                streetAddress: "R. Turquesa, 953",
                addressLocality: "Belo Horizonte",
                addressRegion: "MG",
                postalCode: "30850-760",
                addressCountry: "BR",
              },
              sameAs: [instagram],
            }),
          }}
        />
      </div>
    </>
  );
}

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: "DM Sans", sans-serif;
    background: #FFF8F0;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  .font-serif {
    font-family: "Cormorant Garamond", Georgia, serif;
  }

  .anna-preloader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #3B2218;
    animation: anna-preloader-out .55s ease 1.05s forwards;
  }

  .anna-preloader-mark {
    display: flex;
    width: 72px;
    height: 72px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(201,139,75,.5);
    border-radius: 50%;
    color: #FFF8F0;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 38px;
    animation: anna-mark 1.1s ease forwards;
  }

  .anna-loader-line {
    height: 100%;
    width: 0;
    background: #C98B4B;
    animation: anna-loader 1.1s ease forwards;
  }

  @keyframes anna-loader {
    to { width: 100%; }
  }

  @keyframes anna-mark {
    0% { opacity: 0; transform: scale(.7) rotate(-12deg); }
    55% { opacity: 1; transform: scale(1.04) rotate(2deg); }
    100% { opacity: 1; transform: scale(1) rotate(0); }
  }

  @keyframes anna-preloader-out {
    to {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

  .anna-reveal {
    opacity: 0;
    transform: translateY(28px) scale(.985);
    transition:
      opacity .8s cubic-bezier(.22,1,.36,1) var(--delay,0ms),
      transform .8s cubic-bezier(.22,1,.36,1) var(--delay,0ms);
  }

  .anna-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .anna-grain {
    background-image:
      radial-gradient(rgba(59,34,24,.15) .7px, transparent .7px);
    background-size: 5px 5px;
  }

  .anna-particle {
    animation: anna-particle 7s ease-in-out infinite;
  }

  @keyframes anna-particle {
    0%, 100% {
      transform: translate3d(0,0,0) rotate(0);
      opacity: .25;
    }
    50% {
      transform: translate3d(14px,-24px,0) rotate(90deg);
      opacity: .7;
    }
  }

  .anna-hero-image {
    animation: anna-hero 7s ease-in-out infinite;
  }

  @keyframes anna-hero {
    0%, 100% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(-9px) rotate(.4deg);
    }
  }

  .anna-float {
    animation: anna-float 5s ease-in-out infinite;
  }

  .anna-float-delayed {
    animation: anna-float 5.5s ease-in-out 1s infinite;
  }

  @keyframes anna-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-9px); }
  }

  .anna-scroll-mouse {
    animation: anna-scroll 1.8s ease-in-out infinite;
  }

  @keyframes anna-scroll {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }

  .anna-marquee {
    animation: anna-marquee 38s linear infinite;
  }

  @keyframes anna-marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .anna-whatsapp::before {
    content: "";
    position: absolute;
    inset: -7px;
    border: 1px solid rgba(122,132,80,.35);
    border-radius: 50%;
    animation: anna-whatsapp-pulse 2.2s ease-out infinite;
  }

  @keyframes anna-whatsapp-pulse {
    0% {
      transform: scale(.85);
      opacity: .8;
    }
    70%, 100% {
      transform: scale(1.25);
      opacity: 0;
    }
  }

  @media (max-width: 640px) {
    .anna-marquee {
      animation-duration: 30s;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important;
    }

    .anna-reveal {
      opacity: 1;
      transform: none;
    }
  }
`;

export default AnnaCafePage;
