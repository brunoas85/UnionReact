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
  opponent: "El Barrio",
  opponentLogo: TEAM_LOGOS["El Barrio"],
  date: "Dom 06 de Septiembre",
  time: "10:00 HS",
  stadium: "Albino Stadium",
  round: "CLAUSURA 2026 · FECHA 1",
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

// Plantel — Categoría Maxi (UNION EQUIPOS 2026.xlsx)
export const PLAYERS_MAXI = [
  { name: "Mamuchi, Dario Raul", position: "Director Técnico", number: "DT" },
  { name: "Brocardo, Martin Alberto", position: "Jugador", number: "2" },
  { name: "Rodriguez Basso, Emiliano Alberto", position: "Jugador", number: "3" },
  { name: "Gasparro, Diego Gabriel", position: "Jugador", number: "4" },
  { name: "Barruti, Facundo Esequiel", position: "Jugador", number: "5" },
  { name: "Brizuela, Juan Ignacio", position: "Jugador", number: "6" },
  { name: "Pissaco, Carlos Nicolas", position: "Jugador", number: "7" },
  { name: "Baron, Alejandro David", position: "Jugador", number: "8" },
  { name: "Sierra, Lucas Marcelo", position: "Jugador", number: "9" },
  { name: "Alvarez, Lucas Santiago", position: "Jugador", number: "10" },
  { name: "Lagrost, Roberto Esteban", position: "Jugador", number: "11" },
  { name: "Bagnat, Maximiliano", position: "Jugador", number: "12" },
  { name: "De Miguel, Fernando Agustin", position: "Jugador", number: "13" },
  { name: "Carrizo, Sebastian Fernando", position: "Jugador", number: "14" },
  { name: "Andreu, Gustavo Rene", position: "Jugador", number: "15" },
  { name: "Garcia Lemos, Carlos Alberto", position: "Jugador", number: "16" },
  { name: "Caldentey, Ernesto", position: "Jugador", number: "17" },
  { name: "Berretta, Fernando", position: "Jugador", number: "18" },
  { name: "Jara, Cristian", position: "Jugador", number: "19" },
  { name: "Romero, Pablo Gaston", position: "Jugador", number: "20" },
  { name: "Altube, Mauro Gastos", position: "Jugador", number: "21" },
  { name: "Prieto, Marcelo", position: "Jugador", number: "22" },
  { name: "Ordoñez, Augusto", position: "Jugador", number: "23" },
  { name: "Morate, Christian Alejandro", position: "Jugador", number: "24" },
];

// Plantel — Categoría Súper Maxi (UNION EQUIPOS 2026.xlsx)
export const PLAYERS_SUPERMAXI = [
  { name: "Muñoz, Eliseo Moises", position: "Ayudante de Campo", number: "AC" },
  { name: "Dutto, Pablo Fernando", position: "Jugador", number: "2" },
  { name: "Almada, Gustavo Daniel", position: "Jugador", number: "3" },
  { name: "Vranken, Christian Joel", position: "Jugador", number: "4" },
  { name: "Ayala, Emiliano Daniel", position: "Jugador", number: "5" },
  { name: "Houssey, Agustin", position: "Jugador", number: "6" },
  { name: "Tacone, Alejandro Ruben", position: "Jugador", number: "7" },
  { name: "Nuske, Humberto Fredy", position: "Jugador", number: "8" },
  { name: "Garnica, Marcelo", position: "Jugador", number: "9" },
  { name: "Pellegrini, Alejandro Julian", position: "Jugador", number: "10" },
  { name: "Baltazar, Alberto David", position: "Jugador", number: "11" },
  { name: "Bischoff, Marcelo Martin", position: "Jugador", number: "12" },
  { name: "Lopez, Pablo Daniel", position: "Jugador", number: "13" },
  { name: "Amil, Javier Sebastian", position: "Jugador", number: "14" },
  { name: "Blanco, Gustavo Agustin", position: "Jugador", number: "15" },
  { name: "Costa, Sergio Daniel", position: "Jugador", number: "16" },
  { name: "Galan, Alejandro Daniel", position: "Jugador", number: "17" },
  { name: "Laguna, Maximiliano Luis", position: "Jugador", number: "18" },
  { name: "Guerrero, Damian", position: "Jugador", number: "19" },
  { name: "Conde, Ariel Fernando", position: "Jugador", number: "20" },
  { name: "Vera, Daniel Gustavo", position: "Jugador", number: "21" },
];

// Plantel — Categoría Master (UNION EQUIPOS 2026.xlsx)
export const PLAYERS_MASTER = [
  { name: "Graziano, Jorge", position: "Jugador", number: "1" },
  { name: "Agnone, Hector", position: "Jugador", number: "2" },
  { name: "Moreno, Antonio", position: "Jugador", number: "3" },
  { name: "Cabrera, Abel Alcide", position: "Jugador", number: "4" },
  { name: "Payal, Leopoldo", position: "Jugador", number: "5" },
  { name: "Astete, Guillermo", position: "Jugador", number: "6" },
  { name: "Andrada, Alejandro", position: "Jugador", number: "7" },
  { name: "Bravo, Argentino", position: "Jugador", number: "8" },
  { name: "Huenteo, Domingo", position: "Jugador", number: "9" },
  { name: "Urra Ponce, Sergio", position: "Jugador", number: "10" },
  { name: "Cornaló, Fabian Hector", position: "Jugador", number: "11" },
  { name: "Rodriguez, Candelario Omar", position: "Jugador", number: "12" },
  { name: "Quintana Fica, Carlos M", position: "Jugador", number: "13" },
  { name: "Coliluan, Ernesto", position: "Jugador", number: "14" },
  { name: "Rimas, Adrian Horacio", position: "Jugador", number: "15" },
  { name: "Castillo, Santiago", position: "Jugador", number: "16" },
  { name: "Malagueño, Jose Gabriel", position: "Jugador", number: "17" },
  { name: "Kuasñosky, Gustavo Fabian", position: "Jugador", number: "18" },
  { name: "Cavalcanti, Jose Maria", position: "Jugador", number: "19" },
  { name: "Lavanderos, Lindor", position: "Jugador", number: "20" },
  { name: "Sepulveda, Modesto Honorio", position: "Jugador", number: "21" },
  { name: "Jara, Tomas Daniel", position: "Jugador", number: "22" },
  { name: "Saavedra, Nelson Ruben", position: "Jugador", number: "23" },
  { name: "Fernandez, Edgar Alfredo", position: "Jugador", number: "24" },
  { name: "Esteves, Emilio", position: "Jugador", number: "25" },
  { name: "Batifora, Christian", position: "Jugador", number: "26" },
  { name: "Barreiro, Cristian", position: "Jugador", number: "27" },
  { name: "Tevez, Mario", position: "Jugador", number: "28" },
  { name: "Valiña Lema, Javier Leonel", position: "Jugador", number: "29" },
];

// Tabla — Clausura 2026 — Categoría Seniors (recién arranca, todo en cero)
export const STANDINGS_ZONA_A = [
  { pos: 1, name: "Arenal", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-arenal.png" },
  { pos: 2, name: "Comunicaciones", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-comunicaciones.png" },
  { pos: 3, name: "Dinamo", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-dinamo.png" },
  { pos: 4, name: "Frontera", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-frontera.png" },
  { pos: 5, name: "Las Rosas", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-lasrosas.png" },
  { pos: 6, name: "Sarmiento", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-sarmiento.png" },
  { pos: 7, name: "Unión", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, isUserTeam: true, logo: "/UnionEscudo.png" },
  { pos: 8, name: "Vélez", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-vélez.png" },
];

export const STANDINGS_ZONA_B = [
  { pos: 1, name: "All Boys", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-allBoys.png" },
  { pos: 2, name: "Belgrano", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-belgrano.png" },
  { pos: 3, name: "Chapelco", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-chapelco.png" },
  { pos: 4, name: "Dinosaurios", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-dinosaurios.png" },
  { pos: 5, name: "El Barrio", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-elbarrio.png" },
  { pos: 6, name: "Embajadores", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-embajadores.png" },
  { pos: 7, name: "Lácar", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-lácar.png" },
  { pos: 8, name: "Patagonia", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-patagonia.png" },
];

// Mantenemos STANDINGS para compatibilidad con el componente original
export const STANDINGS = [...STANDINGS_ZONA_A, ...STANDINGS_ZONA_B];

export const FIXTURE = [
  {
    match_number: 1,
    rival: "Frontera",
    date: "Dom 08 de Marzo",
    time: "10:00",
    stadium: "Albino Stadium",
    resultado: "1 - 2",
    logo: TEAM_LOGOS["Frontera"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 2,
    rival: "Las Rosas",
    date: "Mar 10 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
    logo: TEAM_LOGOS["Las Rosas"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 3,
    rival: "Sarmiento",
    date: "Dom 15 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
    logo: TEAM_LOGOS["Sarmiento"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 4,
    rival: "Vélez",
    date: "Lun 23 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
    logo: TEAM_LOGOS["Vélez"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 5,
    rival: "Arenal",
    date: "Dom 29 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
    logo: TEAM_LOGOS["Arenal"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 6,
    rival: "Comunicaciones",
    date: "Dom 12 de Abril",
    time: "19:45",
    stadium: "Albino Stadium",
    resultado: "3 - 2",
    logo: TEAM_LOGOS["Comunicaciones"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 7,
    rival: "Dínamo",
    date: "Dom 19 de Abril",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "8 - 6",
    logo: TEAM_LOGOS["Dínamo"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 8,
    rival: "Frontera",
    date: "Dom 26 de Abril",
    time: "17:00",
    stadium: "Albino Stadium",
    resultado: "1 - 7",
    logo: TEAM_LOGOS["Frontera"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 9,
    rival: "Sarmiento",
    date: "Vie 01 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
    logo: TEAM_LOGOS["Sarmiento"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 10,
    rival: "Vélez",
    date: "Vie 08 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "0 - 1",
    logo: TEAM_LOGOS["Vélez"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 11,
    rival: "Arenal",
    date: "Dom 17 de Mayo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 3",
    logo: TEAM_LOGOS["Arenal"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 12,
    rival: "Las Rosas",
    date: "Mié 08 de Abril",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
    logo: TEAM_LOGOS["Las Rosas"],
    torneo: "Apertura 2026",
  },
  // Próximos — sin resultado
  {
    match_number: 13,
    rival: "Comunicaciones",
    date: "Dom 24 de Mayo",
    time: "18:45",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Comunicaciones"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 14,
    rival: "Dínamo",
    date: "Dom 31 de Mayo",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "3 - 2",
    logo: TEAM_LOGOS["Dínamo"],
    torneo: "Apertura 2026",
  },
  // Clausura 2026 — Fixture publicado (FixClau26.png) — numeración propia desde F1
  {
    match_number: 1,
    rival: "El Barrio",
    date: "Dom 06 de Septiembre",
    time: "10:00",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["El Barrio"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 2,
    rival: "Vélez",
    date: "Dom 13 de Septiembre",
    time: "10:00",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Vélez"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 3,
    rival: "Sarmiento",
    date: "Dom 20 de Septiembre",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Sarmiento"],
    torneo: "Clausura 2026",
  },
];

export const NEWS = [
  {
    category: "¡Arrancó el Clausura 2026!",
    title: "Empieza una nueva chance de gloria. ¡Vamos Unión, a dejar todo en cada cancha!",
    image: "/UnionPlantel-5.png"
  },
  {
    category: "Entrenamiento",
    title: "Entrenamientos todos los martes de 21hs a 23hs.",
    location: "Cancha Chango Soria",
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
