/**
 * EDITAR ESTE ARCHIVO CON LOS DATOS REALES DEL CLUB
 * Imágenes: copiá UnionEscudo.png y UnionPlantel.png a la carpeta /public del proyecto
 */

export const CLUB_INFO = {
  name: "Unión",
  location: "San Martín de los Andes",
  logo: "/UnionEscudo.png",
  heroImage: "/UnionPlantel.png",
};

export const NEXT_MATCH = {
  opponent: "Por confirmar",
  opponentLogo: "",
  date: "A confirmar",
  time: "--:-- HS",
  stadium: "San Martín de los Andes",
  round: "APERTURA 2026",
  isLocal: true,
};

export const PLAYERS = [
  { name: "Silva, Facundo Lujan",         position: "Delantero",        number: "1"  },
  { name: "Navarro, Cesar Andres",         position: "Mediocampista",    number: "2"  },
  { name: "Figueroa, Pablo Martin",        position: "Defensor",         number: "3"  },
  { name: "Figueroa, Nicolas Matias",      position: "Mediocampista",    number: "4"  },
  { name: "Durbhan, Sergio Sebastian",     position: "Defensor",         number: "5"  },
  { name: "Castro, Fernando Ezequiel",     position: "Mediocampista",    number: "6"  },
  { name: "Soto, Pedro Dario",             position: "Defensor",         number: "7"  },
  { name: "Corso, Luis Andres",            position: "Defensor",         number: "8"  },
  { name: "Figueroa, Cristian Leonardo",   position: "Mediocampista",    number: "9"  },
  { name: "Egea, Rodrigo Ariel",           position: "Mediocampista",    number: "10" },
  { name: "Soto, Adrian Ezequiel",         position: "Defensor",         number: "11" },
  { name: "Barria, Jonatan David",         position: "Delantero",        number: "12" },
  { name: "Jara Neira, Carlos",            position: "Mediocampista",    number: "13" },
  { name: "Figueroa, Jorge Luis",          position: "Defensor",         number: "14" },
  { name: "Salazar, Bruno",                position: "Mediocampista",    number: "15" },
  { name: "Flores, Maximiliano Ricardo",   position: "Mediocampista",    number: "16" },
  { name: "Villegas, Cesar Oscar",         position: "Defensor",         number: "17" },
  { name: "Vilchez, Jorge Luis",           position: "Mediocampista",    number: "18" },
  { name: "Di Sciascio, Darien Emanuel",   position: "Mediocampista",    number: "20" },
  { name: "Oliva, Horacio Sebastian",      position: "Arquero",          number: "21" },
  { name: "Flores, Facundo Emilio",        position: "Director Técnico", number: "DT" },
];

// Tabla real — Apertura 2026 — Categoría Seniors
export const STANDINGS_ZONA_A = [
  { pos: 1, name: "Frontera",        pts: 22, pj: 9,  g: 7, e: 1, p: 1,  gf: 33, gc: 8,  dif: 25  },
  { pos: 2, name: "Las Rosas",       pts: 19, pj: 10, g: 5, e: 4, p: 1,  gf: 23, gc: 12, dif: 11  },
  { pos: 3, name: "Comunicaciones",  pts: 18, pj: 10, g: 6, e: 0, p: 4,  gf: 30, gc: 18, dif: 12  },
  { pos: 4, name: "Arenal",          pts: 18, pj: 10, g: 6, e: 0, p: 4,  gf: 26, gc: 27, dif: -1  },
  { pos: 5, name: "Sarmiento",       pts: 15, pj: 9,  g: 4, e: 3, p: 2,  gf: 20, gc: 12, dif: 8   },
  { pos: 6, name: "Velez",           pts: 12, pj: 10, g: 3, e: 3, p: 4,  gf: 20, gc: 27, dif: -7  },
  { pos: 7, name: "Unión",           pts: 8,  pj: 10, g: 2, e: 2, p: 6,  gf: 21, gc: 33, dif: -12, isUserTeam: true },
  { pos: 8, name: "Dinamo",          pts: 0,  pj: 10, g: 0, e: 0, p: 10, gf: 9,  gc: 45, dif: -36 },
];

export const STANDINGS_ZONA_B = [
  { pos: 1, name: "Lacar",           pts: 20, pj: 9, g: 6, e: 2, p: 1, gf: 19, gc: 10, dif: 9   },
  { pos: 2, name: "Chapelco",        pts: 18, pj: 9, g: 5, e: 3, p: 1, gf: 27, gc: 3,  dif: 24  },
  { pos: 3, name: "Embajadores",     pts: 18, pj: 9, g: 5, e: 3, p: 1, gf: 21, gc: 8,  dif: 13  },
  { pos: 4, name: "Patagonia",       pts: 18, pj: 9, g: 5, e: 3, p: 1, gf: 19, gc: 6,  dif: 13  },
  { pos: 5, name: "El Barrio",       pts: 12, pj: 9, g: 4, e: 0, p: 5, gf: 13, gc: 12, dif: 1   },
  { pos: 6, name: "Old Boys",        pts: 7,  pj: 9, g: 1, e: 4, p: 4, gf: 11, gc: 19, dif: -8  },
  { pos: 7, name: "Dinosaurios",     pts: 3,  pj: 9, g: 0, e: 3, p: 6, gf: 3,  gc: 28, dif: -25 },
  { pos: 8, name: "Belgrano",        pts: 2,  pj: 9, g: 0, e: 2, p: 7, gf: 5,  gc: 32, dif: -27 },
];

// Mantenemos STANDINGS para compatibilidad con el componente original
export const STANDINGS = [...STANDINGS_ZONA_A, ...STANDINGS_ZONA_B];

export const FIXTURE = [
  {
    rival: "Frontera",
    date: "Dom 08 de Marzo",
    time: "10:00",
    stadium: "San Martín de los Andes",
    resultado: "2-1",
  },
  {
    rival: "Las Rosas",
    date: "Lun 10 de Marzo",
    time: "21:30",
    stadium: "San Martín de los Andes",
    resultado: "1-0",
  },
  {
    rival: "Sarmiento",
    date: "Sáb 15 de Marzo",
    time: "13:30",
    stadium: "San Martín de los Andes",
    resultado: "3-2",
  },
  {
    rival: "Velez",
    date: "Dom 23 de Marzo",
    time: "21:30",
    stadium: "San Martín de los Andes",
    resultado: "0-0",
  },
  // Próximos — sin resultado
  {
    rival: "Arenal",
    date: "A confirmar",
    time: "--:--",
    stadium: "San Martín de los Andes",
    resultado: "",
  },
];

export const NEWS = [
  {
    category: "Cuota Social",
    title: "Recuerden pagar la cuota social a la Liga de Veteranos, sino no pueden jugar la fecha",
    time: "Hace 2 horas",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=200&auto=format&fit=crop"
  },
  {
    category: "Equipo",
    title: "Por cuestiones climáticas el encuentro de la fecha queda suspendido para el próximo fin de semana",
    time: "Hace 1 día",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=200&auto=format&fit=crop"
  }
];

export const SOCIAL_EVENT = {
  title: "Asado Senior",
  date: "Viernes 15 de mayo",
  time: "20:30hs",
  description: "Unión no es solo fútbol. Enterate de los próximos asados, eventos y reuniones."
};
