/**
 * EDITAR ESTE ARCHIVO CON LOS DATOS REALES DEL CLUB
 * Imágenes: copiá UnionEscudo.png y UnionPlantel.png a la carpeta /public del proyecto
 */

// Mapeo de nombres de equipos a logos
const TEAM_LOGOS: Record<string, string> = {
  "Frontera": "/escudo-frontera.png",
  "Comunicaciones": "/escudo-comunicaciones.png",
  "Las Rosas": "/escudo-lasrosas.png",
  "Arenal": "/escudo-arenal.png",
  "Sarmiento": "/escudo-sarmiento.png",
  "Vélez": "/escudo-vélez.png",
  "Unión": "/UnionEscudo.png",
  "Dinamo": "/escudo-dinamo.png",
  "Embajadores": "/escudo-embajadores.png",
  "Chapelco": "/escudo-chapelco.png",
  "Lácar": "/escudo-lácar.png",
  "Patagonia": "/escudo-patagonia.png",
  "El Barrio": "/escudo-elbarrio.png",
  "All Boys": "/escudo-allBoys.png",
  "Belgrano": "/escudo-belgrano.png",
  "Dinosaurios": "/escudo-dinosaurios.png",
};

export const CLUB_INFO = {
  name: "Unión",
  location: "San Martín de los Andes",
  logo: "/UnionEscudo.png",
  heroImage: "/UnionPlantel-5.png",
};

export const NEXT_MATCH = {
  opponent: "Dínamo",
  opponentLogo: TEAM_LOGOS["Dínamo"],
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
  { pos: 1, name: "Frontera", pts: 33, pj: 14, g: 10, e: 3, p: 1, gf: 46, gc: 10, dif: 36, logo: "/escudo-frontera.png" },
  { pos: 2, name: "Comunicaciones", pts: 27, pj: 14, g: 9, e: 0, p: 5, gf: 40, gc: 23, dif: 17, logo: "/escudo-comunicaciones.png" },
  { pos: 3, name: "Las Rosas", pts: 24, pj: 14, g: 6, e: 6, p: 2, gf: 33, gc:  20, dif: 13, logo: "/escudo-lasrosas.png" },
  { pos: 4, name: "Arenal", pts: 24, pj: 14, g: 7, e: 2, p: 5, gf: 33, gc: 36, dif: -3, logo: "/escudo-arenal.png" },
  { pos: 5, name: "Sarmiento", pts: 22, pj: 14, g: 6, e: 4, p: 4, gf: 32, gc: 18, dif: 14, logo: "/escudo-sarmiento.png" },
  { pos: 6, name: "Vélez", pts: 18, pj: 14, g: 5, e: 3, p: 5, gf: 26, gc: 42, dif: -16, logo: "/escudo-vélez.png" },
  { pos: 7, name: "Unión", pts: 11, pj: 14, g: 3, e: 2, p: 9, gf: 27, gc: 42, dif: -15, isUserTeam: true, logo: "/UnionEscudo.png" },
  { pos: 8, name: "Dinamo", pts: 0, pj: 14, g: 0, e: 0, p: 14, gf: 12, gc: 58, dif: -46, logo: "/escudo-dinamo.png" },
];

export const STANDINGS_ZONA_B = [
  { pos: 1, name: "Embajadores", pts: 31, pj: 14, g: 9, e: 4, p: 1, gf: 36, gc: 12, dif: 24, logo: "/escudo-embajadores.png" },
  { pos: 2, name: "Chapelco", pts: 28, pj: 14, g: 8, e: 4, p: 2, gf: 37, gc: 8, dif: 29, logo: "/escudo-chapelco.png" },
  { pos: 3, name: "Lácar", pts: 28, pj: 14, g: 8, e: 4, p: 2, gf: 25, gc: 15, dif: 10, logo: "/escudo-lácar.png" },
  { pos: 4, name: "Patagonia", pts: 24, pj: 14, g: 6, e: 1, p: 2, gf: 27, gc: 13, dif: 14, logo: "/escudo-patagonia.png" },
  { pos: 5, name: "El Barrio", pts: 19, pj: 14, g: 6, e: 1, p: 7, gf: 26, gc: 23, dif: 3, logo: "/escudo-elbarrio.png" },
  { pos: 6, name: "All Boys", pts: 10, pj: 14, g: 2, e: 4, p: 8, gf: 20, gc: 33, dif: -13, logo: "/escudo-allBoys.png" },
  { pos: 7, name: "Belgrano", pts: 8, pj: 14, g: 2, e: 2, p: 10, gf: 12, gc: 46, dif: -34, logo: "/escudo-belgrano.png" },
  { pos: 8, name: "Dinosaurios", pts: 6, pj: 14, g: 1, e: 3, p: 10, gf: 4, gc: 37, dif: -33, logo: "/escudo-dinosaurios.png" },
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
    logo: TEAM_LOGOS["Frontera"],
  },
  {
    rival: "Las Rosas",
    date: "Mar 10 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
    logo: TEAM_LOGOS["Las Rosas"],
  },
  {
    rival: "Sarmiento",
    date: "Dom 15 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
    logo: TEAM_LOGOS["Sarmiento"],
  },
  {
    rival: "Vélez",
    date: "Lun 23 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
    logo: TEAM_LOGOS["Vélez"],
  },
  {
    rival: "Arenal",
    date: "Dom 29 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
    logo: TEAM_LOGOS["Arenal"],
  },
  {
    rival: "Comunicaciones",
    date: "Dom 12 de Abril",
    time: "19:45",
    stadium: "Albino Stadium",
    resultado: "3 - 2",
    logo: TEAM_LOGOS["Comunicaciones"],
  },
  {
    rival: "Dínamo",
    date: "Dom 19 de Abril",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "8 - 6",
    logo: TEAM_LOGOS["Dínamo"],
  },
  {
    rival: "Frontera",
    date: "Dom 26 de Abril",
    time: "17:00",
    stadium: "Albino Stadium",
    resultado: "1 - 7",
    logo: TEAM_LOGOS["Frontera"],
  },
  {
    rival: "Sarmiento",
    date: "Vie 01 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
    logo: TEAM_LOGOS["Sarmiento"],
  },
  {
    rival: "Vélez",
    date: "Vie 08 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "0 - 1",
    logo: TEAM_LOGOS["Vélez"],
  },
  {
    rival: "Arenal",
    date: "Dom 17 de Mayo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 3",
    logo: TEAM_LOGOS["Arenal"],
  },
  {
    rival: "Las Rosas",
    date: "Mié 08 de Abril",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
    logo: TEAM_LOGOS["Las Rosas"],
  },
  // Próximos — sin resultado
  {
    rival: "Comunicaciones",
    date: "Dom 24 de Mayo",
    time: "18:45",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Comunicaciones"],
  },
  {
    rival: "Dínamo",
    date: "Dom 31 de Mayo",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "3 - 2",
    logo: TEAM_LOGOS["Dínamo"],
  },
];

export const NEWS = [
  {
    category: "Campeón - Apertura 2026",
    title: "¡Felicitaciones a Comunicaciones, nuevo campeón del Apertura 2026!",
    location: "Albino Stadium",
    image: TEAM_LOGOS["Comunicaciones"]
  },
  {
    category: "Entrenamiento - NUEVO DÍA Y HORARIO!",
    title: "Entrenamientos todos los viernes de 21hs a 22hs en todas las categorías de Unión.",
    location: "Cancha Nº 2 de veteranos",
    image: "/Entrenamiento.png"
  },
];

export const SOCIAL_EVENT = {
  title: "Asado después del partido",
  time: "Sábado",
  description: "Después del partido de los máximos, hay asado. ¡Todos invitados a compartir!"
};

export const MATCH_VIDEOS = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
];

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
