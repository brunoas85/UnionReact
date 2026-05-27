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
  { pos: 1, name: "Frontera", pts: 29, pj: 12, g: 9, e: 2, p: 1, gf: 45, gc: 10, dif: 35, hasPendingMatches: true },
  { pos: 2, name: "Comunicaciones", pts: 24, pj: 13, g: 8, e: 0, p: 5, gf: 35, gc: 22, dif: 13 },
  { pos: 3, name: "Arenal", pts: 23, pj: 13, g: 7, e: 2, p: 4, gf: 32, gc: 31, dif: 1 },
  { pos: 4, name: "Sarmiento", pts: 21, pj: 12, g: 6, e: 3, p: 3, gf: 32, gc: 17, dif: 15, hasPendingMatches: true },
  { pos: 5, name: "Las Rosas", pts: 21, pj: 13, g: 5, e: 6, p: 2, gf: 28, gc: 19, dif: 9 },
  { pos: 6, name: "Velez", pts: 18, pj: 13, g: 5, e: 3, p: 5, gf: 25, gc: 37, dif: -12 },
  { pos: 7, name: "Unión", pts: 8, pj: 13, g: 2, e: 2, p: 9, gf: 24, gc: 40, dif: -16, isUserTeam: true },
  { pos: 8, name: "Dinamo", pts: 0, pj: 13, g: 0, e: 0, p: 13, gf: 10, gc: 55, dif: -45 },
];

export const STANDINGS_ZONA_B = [
  { pos: 1, name: "Chapelco", pts: 28, pj: 13, g: 8, e: 4, p: 1, gf: 36, gc: 6, dif: 30 },
  { pos: 2, name: "Embajadores", pts: 25, pj: 12, g: 7, e: 4, p: 1, gf: 30, gc: 11, dif: 19, hasPendingMatches: true },
  { pos: 3, name: "Lacar", pts: 25, pj: 13, g: 7, e: 4, p: 2, gf: 23, gc: 14, dif: 9 },
  { pos: 4, name: "Patagonia", pts: 24, pj: 13, g: 6, e: 6, p: 1, gf: 27, gc: 11, dif: 16 },
  { pos: 5, name: "El Barrio", pts: 16, pj: 13, g: 5, e: 1, p: 7, gf: 23, gc: 23, dif: 0 },
  { pos: 6, name: "Old Boys", pts: 10, pj: 12, g: 2, e: 4, p: 6, gf: 19, gc: 28, dif: -9, hasPendingMatches: true },
  { pos: 7, name: "Belgrano", pts: 8, pj: 13, g: 2, e: 2, p: 9, gf: 12, gc: 43, dif: -31 },
  { pos: 8, name: "Dinosaurios", pts: 3, pj: 13, g: 0, e: 3, p: 10, gf: 3, gc: 37, dif: -34 },
];

// Mantenemos STANDINGS para compatibilidad con el componente original
export const STANDINGS = [...STANDINGS_ZONA_A, ...STANDINGS_ZONA_B];

export const FIXTURE = [
  {
    rival: "Frontera",
    date: "Dom 08 de Marzo",
    time: "10:00",
    stadium: "Albino Stadium",
    resultado: "1 - 2",
  },
  {
    rival: "Las Rosas",
    date: "Mar 10 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
  },
  {
    rival: "Sarmiento",
    date: "Dom 15 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
  },
  {
    rival: "Velez",
    date: "Lun 23 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
  },
  {
    rival: "Arenal",
    date: "Dom 29 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
  },
  {
    rival: "Comunicaciones",
    date: "Dom 12 de Abril",
    time: "19:45",
    stadium: "Albino Stadium",
    resultado: "3 - 2",
  },
  {
    rival: "Dinamo",
    date: "Dom 19 de Abril",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "8 - 6",
  },
  {
    rival: "Frontera",
    date: "Dom 26 de Abril",
    time: "17:00",
    stadium: "Albino Stadium",
    resultado: "1 - 7",
  },
  {
    rival: "Sarmiento",
    date: "Vie 01 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
  },
  {
    rival: "Velez",
    date: "Vie 08 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "0 - 1",
  },
  {
    rival: "Arenal",
    date: "Dom 17 de Mayo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 3",
  },
  {
    rival: "Las Rosas",
    date: "Mié 08 de Abril",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
  },
  // Próximos — sin resultado
  {
    rival: "Comunicaciones",
    date: "Dom 24 de Mayo",
    time: "18:45",
    stadium: "Albino Stadium",
    resultado: "",
  },
  {
    rival: "Dinamo",
    date: "Dom 31 de Mayo",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "",
  },
];

export const NEWS = [
  {
    category: "Refuerzo",
    title: "¡Bienvenido, Facu Quiroga! Nuevo refuerzo de Unión, a seguir sumando!.",
    time: "Hace 1 hora",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Entrenamiento",
    title: "Entrenamientos todos los jueves de 20hs a 21hs en todas las categorías de Unión.",
    location: "Cancha Nº 2 de veteranos",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=200&auto=format&fit=crop"
  },
  {
    category: "Cuota Social",
    title: "Recuerden pagar la cuota social a la Liga de Veteranos, sino no pueden jugar la fecha",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=200&auto=format&fit=crop"
  },
];

export const SOCIAL_EVENT = {
  title: "Asado después del partido",
  time: "Sábado",
  description: "Después del partido de los máximos, hay asado. ¡Todos invitados a compartir!"
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
