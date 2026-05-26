/**
 * EDITAR ESTE ARCHIVO CON LOS DATOS REALES DEL CLUB
 * Imágenes: copiá UnionEscudo.png y UnionPlantel.png a la carpeta /public del proyecto
 */

export const CLUB_INFO = {
  name: "Unión",
  location: "San Martín de los Andes",
  logo: "/UnionEscudo.png",
  heroImage: "/UnionPlantel-5.png",
};

export const NEXT_MATCH = {
  opponent: "Dinamo",
  opponentLogo: "",
  date: "Dom 31 de Mayo",
  time: "11:45 HS",
  stadium: "Albino Stadium",
  round: "FECHA 14",
  isLocal: true,
};

export const PLAYERS = [
  { name: "Silva, Facundo Lujan", position: "Delantero", number: "1", avatar: "avatar-1.png" },
  { name: "Navarro, Cesar Andres", position: "Mediocampista", number: "2", avatar: "avatar-2.png" },
  { name: "Figueroa, Pablo Martin", position: "Defensor", number: "3", avatar: "avatar-3.png" },
  { name: "Figueroa, Nicolas Matias", position: "Mediocampista", number: "4", avatar: "avatar-4.png" },
  { name: "Durbhan, Sergio Sebastian", position: "Defensor", number: "5", avatar: "avatar-5.png" },
  { name: "Castro, Fernando Ezequiel", position: "Mediocampista", number: "6", avatar: "avatar-6.png" },
  { name: "Soto, Pedro Dario", position: "Defensor", number: "7", avatar: "avatar-7.png" },
  { name: "Corso, Luis Andres", position: "Defensor", number: "8", avatar: "avatar-8.png" },
  { name: "Figueroa, Cristian Leonardo", position: "Mediocampista", number: "9", avatar: "avatar-9.png" },
  { name: "Egea, Rodrigo Ariel", position: "Mediocampista", number: "10", avatar: "avatar-10.png" },
  { name: "Soto, Adrian Ezequiel", position: "Defensor", number: "11", avatar: "avatar-11.png" },
  { name: "Barria, Jonatan David", position: "Delantero", number: "12", avatar: "avatar-12.png" },
  { name: "Jara Neira, Carlos", position: "Mediocampista", number: "13", avatar: "avatar-13.png" },
  { name: "Figueroa, Jorge Luis", position: "Defensor", number: "14", avatar: "avatar-14.png" },
  { name: "Salazar, Bruno", position: "Mediocampista", number: "15", avatar: "avatar-15.png" },
  { name: "Flores, Maximiliano Ricardo", position: "Mediocampista", number: "16", avatar: "avatar-16.png" },
  { name: "Villegas, Cesar Oscar", position: "Defensor", number: "17", avatar: "avatar-17.png" },
  { name: "Vilchez, Jorge Luis", position: "Mediocampista", number: "18", avatar: "avatar-18.png" },
  { name: "Di Sciascio, Darien Emanuel", position: "Mediocampista", number: "19", avatar: "avatar-19.png" },
  { name: "Oliva, Horacio Sebastian", position: "Arquero", number: "21", avatar: "avatar-20.png" },
  { name: "Flores, Facundo Emilio", position: "Director Técnico", number: "DT", avatar: "avatar-21.png" },
];

// Tabla real — Apertura 2026 — Categoría Seniors
export const STANDINGS_ZONA_A = [
  { pos: 1, name: "Frontera", pts: 22, pj: 9, g: 7, e: 1, p: 1, gf: 33, gc: 8, dif: 25 },
  { pos: 2, name: "Las Rosas", pts: 19, pj: 10, g: 5, e: 4, p: 1, gf: 23, gc: 12, dif: 11 },
  { pos: 3, name: "Comunicaciones", pts: 18, pj: 10, g: 6, e: 0, p: 4, gf: 30, gc: 18, dif: 12 },
  { pos: 4, name: "Arenal", pts: 18, pj: 10, g: 6, e: 0, p: 4, gf: 26, gc: 27, dif: -1 },
  { pos: 5, name: "Sarmiento", pts: 15, pj: 9, g: 4, e: 3, p: 2, gf: 20, gc: 12, dif: 8 },
  { pos: 6, name: "Velez", pts: 12, pj: 10, g: 3, e: 3, p: 4, gf: 20, gc: 27, dif: -7 },
  { pos: 7, name: "Unión", pts: 8, pj: 10, g: 2, e: 2, p: 6, gf: 21, gc: 33, dif: -12, isUserTeam: true },
  { pos: 8, name: "Dinamo", pts: 0, pj: 10, g: 0, e: 0, p: 10, gf: 9, gc: 45, dif: -36 },
];

export const STANDINGS_ZONA_B = [
  { pos: 1, name: "Lacar", pts: 20, pj: 9, g: 6, e: 2, p: 1, gf: 19, gc: 10, dif: 9 },
  { pos: 2, name: "Chapelco", pts: 18, pj: 9, g: 5, e: 3, p: 1, gf: 27, gc: 3, dif: 24 },
  { pos: 3, name: "Embajadores", pts: 18, pj: 9, g: 5, e: 3, p: 1, gf: 21, gc: 8, dif: 13 },
  { pos: 4, name: "Patagonia", pts: 18, pj: 9, g: 5, e: 3, p: 1, gf: 19, gc: 6, dif: 13 },
  { pos: 5, name: "El Barrio", pts: 12, pj: 9, g: 4, e: 0, p: 5, gf: 13, gc: 12, dif: 1 },
  { pos: 6, name: "Old Boys", pts: 7, pj: 9, g: 1, e: 4, p: 4, gf: 11, gc: 19, dif: -8 },
  { pos: 7, name: "Dinosaurios", pts: 3, pj: 9, g: 0, e: 3, p: 6, gf: 3, gc: 28, dif: -25 },
  { pos: 8, name: "Belgrano", pts: 2, pj: 9, g: 0, e: 2, p: 7, gf: 5, gc: 32, dif: -27 },
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
    date: "Dom 17 de Mayo",
    time: "13:30",
    stadium: "San Martín de los Andes",
    resultado: "",
  },
  {
    rival: "Comunicaciones",
    date: "Dom 24 de Mayo",
    time: "18:45",
    stadium: "San Martín de los Andes",
    resultado: "",
  },
  {
    rival: "Dinamo",
    date: "Dom 31 de Mayo",
    time: "11:45",
    stadium: "San Martín de los Andes",
    resultado: "",
  },
];

export const NEWS = [
  {
    category: "Refuerzo",
    title: "¡Bienvenido, Facu Quiroga! Nuevo refuerzo de Unión, a seguir sumando!.",
    time: "Hace 1 hora",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=200&auto=format&fit=crop",
    isFeatured: true,
  },
  {
    category: "Cuota Social",
    title: "Recuerden pagar la cuota social a la Liga de Veteranos, sino no pueden jugar la fecha",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=200&auto=format&fit=crop"
  },
];

export const SOCIAL_EVENT = {
  title: "En construcción",
  time: "20:30hs",
  description: "Unión no es solo fútbol. Enterate de los próximos asados, eventos y reuniones."
};

export const MATCH_IMAGES = [
  "UnionPlantel.png",
  "UnionPlantel-1.png",
  "UnionPlantel-2.png",
  "UnionPlantel-3.png",
  "UnionPlantel-4.png",
  "UnionPlantel-5.png",
  "UnionPlantel-6.png",
  "UnionPlantel-7.png",
  "UnionPlantel-8.png",
  "UnionPlantel-9.png",
  "UnionPlantel-10.png",
  "UnionPlantel-11.png",
  "UnionPlantel-12.png",
  "UnionPlantel-13.png",
  "UnionPlantel-14.png",
  "UnionPlantel-15.png"
];
