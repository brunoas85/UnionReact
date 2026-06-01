/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Bell,
  Home,
  Users,
  Trophy,
  Calendar,
  Beer,
  ChevronRight,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  User,
  Camera,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, ReactNode } from 'react';
import {
  CLUB_INFO,
  NEXT_MATCH,
  PLAYERS,
  STANDINGS_ZONA_A,
  STANDINGS_ZONA_B,
  FIXTURE,
  NEWS,
  SOCIAL_EVENT,
  MATCH_IMAGES,
  CLASIFICADOS,
  MATCH_VIDEOS,
} from './data';
import { supabase } from './supabaseClient';

type Tab = 'inicio' | 'plantel' | 'tabla' | 'fixture' | 'galeria' | 'social';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('inicio');
  const [notifOpen, setNotifOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playersList, setPlayersList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fixtureList, setFixtureList] = useState<any[]>([]);
  const [loadingFixture, setLoadingFixture] = useState(true);

  // Traer los jugadores desde Supabase al arrancar la app
  useEffect(() => {
    async function fetchPlayers() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('players')
          .select('*');

        if (error) throw error;
        if (data) {
          // Ordenar por número de camiseta de menor a mayor
          const sorted = data.sort((a, b) => {
            const numA = a.number === 'DT' ? Infinity : parseInt(a.number);
            const numB = b.number === 'DT' ? Infinity : parseInt(b.number);
            return numA - numB;
          });
          setPlayersList(sorted);
        }
      } catch (error) {
        console.error('Error cargando el plantel:', error);
        // Fallback a datos locales si falla Supabase
        const sortedPlayers = [...PLAYERS].sort((a, b) => {
          const numA = a.number === 'DT' ? Infinity : parseInt(a.number);
          const numB = b.number === 'DT' ? Infinity : parseInt(b.number);
          return numA - numB;
        });
        setPlayersList(sortedPlayers);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayers();
  }, []);

  // Traer el fixture desde Supabase al arrancar la app
  useEffect(() => {
    async function fetchFixture() {
      try {
        setLoadingFixture(true);
        const { data, error } = await supabase
          .from('fixture')
          .select('*')
          .order('match_number', { ascending: true });

        if (error) throw error;
        if (data) setFixtureList(data);
      } catch (error) {
        console.error('Error cargando el fixture:', error);
      } finally {
        setLoadingFixture(false);
      }
    }

    fetchFixture();
  }, []);

  // ESTO ES LO QUE BLOQUEA EL SCROLL DEL CELULAR
  useEffect(() => {
    if (notifOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [notifOpen]);

  return (
    <div className="min-h-screen bg-surface flex flex-col max-w-md mx-auto relative shadow-2xl">

      {/* Header */}
      <header className="sticky top-4 bg-red-600/90 backdrop-blur-md border-b border-red-700 h-16 flex items-center px-4 z-50 relative overflow-visible">
        <div className="absolute left-[0px] w-48 h-48 bg-transparent flex items-center justify-center overflow-visible drop-shadow-lg mt-3">
          <img
            src={CLUB_INFO.logo}
            alt="Logo"
            className="h-44 w-44 object-contain"
          />
        </div>
        <h1 className="flex-1 text-right font-display font-extrabold text-sm text-zinc-100 leading-tight">
          UNIÓN <br /> San Martín de los Andes
        </h1>
        <button
          onClick={() => setNotifOpen(!notifOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-50 transition-colors relative"
        >
          <Bell className="w-5 h-5 text-zinc-500" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
        </button>
      </header>

      {/* Panel de Notificaciones */}
      <AnimatePresence>
        {notifOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30"
            onClick={() => setNotifOpen(false)}
          />
        )}
        {notifOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-0 w-full max-w-md bg-white border-b border-zinc-100 shadow-xl z-40"
          >
            <div className="p-4 border-b border-zinc-100 flex justify-between items-center">
            </div>
            <div className="divide-y divide-zinc-50">
              <div className="flex gap-3 p-4 hover:bg-zinc-50">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-600">Recordatorio</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Próximo partido — revisá el fixture</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 hover:bg-zinc-50">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600">¡Bien hecho!</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Excelente performance en el último partido</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 hover:bg-zinc-50">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">Importante</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Llevar medias negras</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 hover:bg-zinc-50">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Beer className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-600">Tercer Tiempo</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Asado después del partido de los máximos</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 pb-40 overflow-y-auto">
        <AnimatePresence mode="wait">

          {/* ── INICIO ── */}
          {activeTab === 'inicio' && (
            <motion.div
              key="inicio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 pt-4"
            >
              {/* Hero y Titular */}
              <section className="px-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg group mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img
                    src={CLUB_INFO.heroImage}
                    alt="Plantel Unión SMA"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 p-5 z-20">
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                      Senior Team
                    </span>
                    <h2 className="font-display font-bold text-2xl text-white leading-tight">
                      Bienvenidos a <br /> Unión S.M.A.
                    </h2>
                    <p className="text-white/80 text-sm mt-1">Pasión y tradición.</p>
                  </div>
                </div>
                {/* Titular Deportivo */}
                <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4 space-y-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Apertura 2026</p>
                  <h2 className="font-display font-bold text-lg text-zinc-900">
                    Unión completa un gran torneo en su debut
                  </h2>
                  <div className="space-y-2 text-xs text-zinc-600">
                    <p>
                      Con un equipo compuesto por jugadores de calidad y buena gente, el club sumó experiencia en su primer torneo en categoría senior.
                    </p>
                    <p className="pt-2 border-t border-primary/20">
                      Un especial agradecimiento a los jugadores de la máxi que a lo largo del torneo siempre nos han hecho el aguante. Gracias por su colaboración ¡vamos Unión!
                    </p>
                  </div>
                </div>
              </section>

              {/* Noticias */}
              <section className="px-4 pb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display font-bold text-lg text-zinc-900">Últimas Noticias</h3>
                </div>
                <div className="space-y-3">
                  {NEWS.map(({ category, title, time, image, isFeatured, location }, i) => (
                    // @ts-ignore - key es una propiedad especial de React, no se pasa en props
                    <NewsCard key={i} category={category} title={title} time={time} image={image} isFeatured={isFeatured} location={location} />
                  ))}
                </div>
              </section>

              {/* Clasificados */}
              <section className="px-4 pb-4">
                <h3 className="font-display font-bold text-lg text-zinc-900 mb-4">{CLASIFICADOS.title}</h3>
                <div className="space-y-3">
                  {CLASIFICADOS.matches.map((match, i) => (
                    <div key={i} className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1">
                          <p className="text-xs font-bold text-zinc-900">{match.team1}</p>
                        </div>
                        <span className="text-[10px] font-bold text-zinc-500 px-2">VS</span>
                        <div className="flex-1 text-right">
                          <p className="text-xs font-bold text-zinc-900">{match.team2}</p>
                        </div>
                      </div>
                      <div className="space-y-1 text-[10px] text-zinc-600 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {match.date} - {match.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {match.stadium}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Fotos Recientes - Carrusel */}
              <section className="pl-4">
                <div className="flex justify-between items-center mb-3 pr-4">
                  <h3 className="font-display font-bold text-lg text-zinc-900">Imágenes del Partido</h3>
                  <button 
                    onClick={() => setActiveTab('galeria')}
                    className="text-xs font-bold text-primary flex items-center gap-1"
                  >
                    Ver todas <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-4 snap-x pr-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {MATCH_IMAGES.slice(0, 4).map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImage(img)}
                      className="min-w-[200px] h-[150px] rounded-2xl overflow-hplayersList.length || idden shadow-sm flex-shrink-0 snap-center relative group cursor-pointer"
                    >
                      <img src={img} alt={`Partido ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                  <div 
                    onClick={() => setActiveTab('galeria')}
                    className="min-w-[120px] h-[150px] rounded-2xl bg-zinc-50 flex flex-col items-center justify-center flex-shrink-0 snap-center cursor-pointer border-2 border-dashed border-zinc-200 text-zinc-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <Camera className="w-6 h-6 mb-2" />
                    <span className="text-xs font-bold text-center">Subir /<br/>Ver más</span>
                  </div>
                </div>
              </section>

              {/* Bento */}
              <section className="px-4 grid grid-cols-2 gap-4">
                <div
                  onClick={() => setActiveTab('plantel')}
                  className="bg-zinc-900 rounded-2xl p-4 flex flex-col justify-between h-40 relative overflow-hidden group shadow-lg cursor-pointer"
                >
                  <div className="z-10">
                    <Users className="w-8 h-8 text-white mb-2" />
                    <h4 className="font-display font-bold text-lg text-white">Plantel</h4>
                    <p className="text-zinc-400 text-[10px] mt-1 font-medium">{PLAYERS.length} jugadores</p>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <Trophy className="w-24 h-24 text-white" />
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab('tabla')}
                  className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col justify-between h-40 shadow-sm cursor-pointer"
                >
                  <div>
                    <Trophy className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-display font-bold text-lg text-zinc-900">Posiciones</h4>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-4xl font-display font-black text-zinc-900">7º</span>
                    <span className="text-xs font-bold bg-zinc-100 text-zinc-50PLAYERS rounded-full">Zona A</span>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ── PLANTEL ── */}
          {activeTab === 'plantel' && (
            <motion.div
              key="plantel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4 space-y-6"
            >
              <h2 className="font-display font-black text-2xl text-zinc-900 text-right">Nuestro Plantel</h2>
              
              {loading ? (
                <p className="text-sm text-zinc-400 text-center py-10 font-medium">Cargando el plantel...</p>
              ) : (
                <div className="space-y-2">
                  {playersList.map((player, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-4 border rounded-xl p-3 shadow-sm transition-all hover:shadow-md ${
                        player.position === 'D.T.' || player.position === 'Director Técnico'
                          ? 'bg-gradient-to-r from-zinc-200 to-zinc-100 border-zinc-300'
                          : 'bg-white border-zinc-100 hover:bg-zinc-50'
                      }`}
                    >
                      {/* Avatar */}
                      <div className="w-16 h-16 flex-shrink-0 bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center">
                        {player.avatar ? (
                          <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                        ) : (
                          <Users className="w-8 h-8 text-zinc-300" />
                        )}
                      </div>

                      {/* Info del jugador */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {player.position !== 'D.T.' && player.position !== 'Director Técnico' && (
                            <span className="bg-primary text-white text-xs font-black px-2 py-0.5 rounded-md">{player.number}</span>
                          )}
                          <h3 className="font-display font-bold text-sm text-zinc-900 truncate">{player.name}</h3>
                        </div>
                        <p className="text-xs text-zinc-500 font-semibold uppercase mt-1 tracking-wide">{player.position}</p>
                      </div>

                      {/* Badge opcional */}
                      {player.position === 'D.T.' || player.position === 'Director Técnico' && (
                        <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                          D.T.
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ── TABLA ── */}
          {activeTab === 'tabla' && (
            <motion.div
              key="tabla"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-4 space-y-6"
            >
              <h2 className="font-display font-black text-2xl text-zinc-900 text-right">Tabla de Posiciones</h2>
              <p className="text-xs text-zinc-400 -mt-4 text-right">Apertura 2026 — Categoría Seniors</p>

              {/* Zona A */}
              <div>
                <div className="bg-yellow-400 text-zinc-900 font-black text-sm px-4 py-2 rounded-t-xl tracking-widest uppercase">
                  Zona A
                </div>
                <div className="bg-white border border-zinc-100 rounded-b-2xl overflow-hidden shadow-sm">
                  <StandingsTable rows={STANDINGS_ZONA_A} />
                </div>
              </div>

              {/* Zona B */}
              <div>
                <div className="bg-cyan-400 text-zinc-900 font-black text-sm px-4 py-2 rounded-t-xl tracking-widest uppercase">
                  Zona B
                </div>
                <div className="bg-white border border-zinc-100 rounded-b-2xl overflow-hidden shadow-sm">
                  <StandingsTable rows={STANDINGS_ZONA_B} />
                </div>
              </div>
            </motion.div>
          )}

          {/* ── FIXTURE ── */}
          {activeTab === 'fixture' && (
            <motion.div
              key="fixture"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4 space-y-4"
            >
              <h2 className="font-display font-black text-2xl text-zinc-900 text-right">Fixture y Resultados</h2>
              
              {loadingFixture ? (
                <p className="text-sm text-zinc-400 text-center py-10 font-medium">Cargando partidos desde Supabase...</p>
              ) : (() => {
                // Función para parsear fechas en español
                const parseDate = (dateStr: string): Date => {
                  const meses: { [key: string]: number } = {
                    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
                    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
                  };
                  
                  const parts = dateStr.toLowerCase().split(' de ');
                  if (parts.length >= 2) {
                    const dia = parseInt(parts[0].split(' ')[1]);
                    const mes = meses[parts[1].trim()];
                    return new Date(2026, mes, dia);
                  }
                  return new Date(0);
                };

                // Procesar y ordenar fixtures
                const processedFixtures = fixtureList.map(p => ({
                  ...p,
                  hasResult: p.resultado && p.resultado.trim() !== '' || p.result && p.result.trim() !== '',
                  resultadoFinal: p.resultado || p.result || '',
                  parsedDate: parseDate(p.date)
                }));

                // Separar jugados y no jugados
                const jugados = processedFixtures.filter(p => p.hasResult);
                const noJugados = processedFixtures.filter(p => !p.hasResult);

                // Ordenar cada grupo cronológicamente
                const sortByDate = (fixtures: typeof processedFixtures) => {
                  return fixtures.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
                };

                const jugadosOrdenados = sortByDate(jugados);
                const noJugadosOrdenados = sortByDate(noJugados);
                const todosOrdenados = [...jugadosOrdenados, ...noJugadosOrdenados];

                return (
                  <div className="space-y-3">
                    {todosOrdenados.map((partido, i) => (
                      <div key={i} className={`rounded-2xl p-4 shadow-sm flex justify-between items-center border transition-all ${
                        partido.hasResult 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-white border-zinc-100'
                      }`}>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 mb-1">
  <span className="bg-zinc-100 text-zinc-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
    Fecha {partido.match_number}
  </span>
  <span className="text-xs font-bold text-zinc-400">• {partido.date} - {partido.time}</span>
</div>
                          <h3 className={`font-display font-bold text-base ${partido.hasResult ? 'text-green-900' : 'text-zinc-900'}`}>
                            Unión <span className={`${partido.hasResult ? 'text-green-600' : 'text-zinc-400'} font-normal`}>vs</span> {partido.rival}
                          </h3>
                          <p className={`text-xs font-medium ${partido.hasResult ? 'text-green-600' : 'text-zinc-500'}`}>
                            📍 {partido.stadium}
                          </p>
                        </div>
                        
                        <div className={`px-3 py-2 rounded-xl border min-w-[60px] text-center ${
                          partido.hasResult
                            ? 'bg-green-200 border-green-300'
                            : 'bg-zinc-50 border-zinc-100'
                        }`}>
                          <span className={`font-display font-black text-sm ${
                            partido.hasResult ? 'text-green-900' : 'text-zinc-800'
                          }`}>
                            {partido.resultadoFinal || 'vs'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* ── GALERÍA ── */}
          {activeTab === 'galeria' && (
            <motion.div
              key="galeria"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-4 space-y-6"
            >
              <div className="flex justify-between items-end mb-2 w-full">
                {/* El texto va primero para que se posicione a la izquierda */}
                <p className="text-xs text-zinc-500 font-medium mt-8">
                  Algunos de los partidos
                </p>
                
                {/* El título va segundo para que justify-between lo empuje a la derecha */}
                <h2 className="font-display font-black text-2xl text-zinc-900 text-right">
                  Galería
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Imágenes */}
                {MATCH_IMAGES.map((img, i) => (
                  <div 
                    key={`img-${i}`} 
                    onClick={() => setSelectedImage(img)}
                    className={`rounded-2xl overflow-hidden shadow-sm aspect-square ${i === 0 ? 'col-span-2 aspect-[2/1]' : ''} cursor-pointer group`}
                  >
                    <img src={img} alt={`Partido ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}

                {/* Videos */}
                {MATCH_VIDEOS.map((video, i) => (
                  <div 
                    key={`video-${i}`} 
                    className="rounded-2xl overflow-hidden shadow-sm aspect-square cursor-pointer group relative"
                  >
                    <video 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      controls
                    >
                      <source src={video} type="video/mp4" />
                      Tu navegador no soporta videos.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">▶</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── SOCIAL ── */}
          {activeTab === 'social' && (
            <motion.div
              key="social"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="p-4 space-y-6 text-center"
            >
              <h2 className="font-display font-black text-2xl text-zinc-900 text-right">3er Tiempo</h2>
              <p className="text-zinc-500 text-sm max-w-[250px] mx-auto">{SOCIAL_EVENT.description}</p>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src="/tercerTiempo.png" alt="Asado" className="w-full h-auto object-cover" />
                <div className="bg-white p-4 text-center">
                  <p className="font-display font-bold text-sm text-zinc-900">Asado 24 de mayo '26</p>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Modal para imagen en grande */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          />
        )}
        {selectedImage && (
          <motion.div
            key="image-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Nav */}
      <nav className="fixed bottom-14 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-zinc-100 flex justify-around items-center py-3 z-50 px-2 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <NavItem active={activeTab === 'inicio'} icon={<Home />} label="Inicio" onClick={() => setActiveTab('inicio')} />
        <NavItem active={activeTab === 'plantel'} icon={<Users />} label="Plantel" onClick={() => setActiveTab('plantel')} />
        <NavItem active={activeTab === 'tabla'} icon={<Trophy />} label="Tabla" onClick={() => setActiveTab('tabla')} />
        <NavItem active={activeTab === 'fixture'} icon={<Calendar />} label="Fixture" onClick={() => setActiveTab('fixture')} />
        <NavItem active={activeTab === 'galeria'} icon={<Camera />} label="Galería" onClick={() => setActiveTab('galeria')} />
        <NavItem active={activeTab === 'social'} icon={<Beer />} label="3er Tiempo" onClick={() => setActiveTab('social')} />
      </nav>
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-zinc-50 border-t border-zinc-100 py-3 px-4 text-center z-50">
        <p className="text-[10px] text-zinc-500">Desarrollado por bRuno`s</p>
      </footer>
    </div>
  );
}

// ── Componentes auxiliares ──

function StandingsTable({ rows }: { rows: any[] }) {
  return (
    <table className="w-full text-left">
      <thead className="bg-zinc-50 text-[10px] font-black uppercase tracking-wider text-zinc-400">
        <tr>
          <th className="px-3 py-3">Pos</th>
          <th className="px-3 py-3">Equipo</th>
          <th className="px-3 py-3 text-center">Pts</th>
          <th className="px-3 py-3 text-center">PJ</th>
          <th className="px-3 py-3 text-center">G</th>
          <th className="px-3 py-3 text-center">E</th>
          <th className="px-3 py-3 text-center">P</th>
          <th className="px-3 py-3 text-center">Dif</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {rows.map((row, i) => (
          <tr 
            key={i} 
            className={`border-t border-zinc-50 ${
              row.pos <= 4 ? 'bg-emerald-100' : row.isUserTeam ? 'bg-primary/5' : ''
            }`}
          >
            <td className={`px-3 py-3 font-black ${
              row.hasPendingMatches ? 'text-red-600' : 'text-zinc-500'
            }`}>
              {row.pos}
            </td>
            <td className={`px-3 py-3 ${
              row.hasPendingMatches 
                ? 'text-red-600 font-bold' 
                : row.isUserTeam 
                ? 'text-zinc-900 font-black' 
                : 'text-zinc-700 font-bold'
            }`}>
              {row.name}
            </td>
            <td className={`px-3 py-3 font-black text-center ${
              row.hasPendingMatches ? 'text-red-600' : ''
            }`}>
              {row.pts}
            </td>
            <td className={`px-3 py-3 text-center ${
              row.hasPendingMatches ? 'text-red-600' : 'text-zinc-500'
            }`}>
              {row.pj}
            </td>
            <td className="px-3 py-3 text-center text-zinc-500">{row.g}</td>
            <td className="px-3 py-3 text-center text-zinc-500">{row.e}</td>
            <td className="px-3 py-3 text-center text-zinc-500">{row.p}</td>
            <td className={`px-3 py-3 text-center font-bold ${row.dif > 0 ? 'text-green-600' : row.dif < 0 ? 'text-red-500' : 'text-zinc-400'}`}>
              {row.dif > 0 ? `+${row.dif}` : row.dif}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function NewsCard({ category, title, time, image, isFeatured, location }: { category: string; title: string; time?: string; image: string; isFeatured?: boolean; location?: string }) {
  if (isFeatured) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md border border-red-100 bg-gradient-to-r from-red-600/10 via-red-500/5 to-white hover:shadow-lg transition-shadow">
        <div className="flex gap-0">
          {/* Imagen lateral con overlay */}
          <div className="w-28 h-28 flex-shrink-0 relative">
            <img src={image} alt="Refuerzo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
          </div>
          {/* Contenido */}
          <div className="flex flex-col justify-center px-3 py-3 flex-1 gap-1">
            {/* Badge */}
            <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest w-fit">
              <span>⚡</span> Refuerzo
            </span>
            <h5 className="font-display font-bold text-sm text-zinc-900 leading-snug line-clamp-3 mt-0.5">{title}</h5>
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 mt-1">
              <Calendar className="w-3 h-3" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-3 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <img src={image} alt="News" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">{category}</span>
        <h5 className="font-display font-bold text-sm text-zinc-900 line-clamp-2">{title}</h5>
        <div className="flex flex-col gap-1 mt-2">
          {time && (
            <div className="flex items-center gap-2 text-[10px] text-zinc-400">
              <Calendar className="w-3 h-3" />
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 text-[10px] text-zinc-400">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FixtureItem({ match, index }: { match: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const jugado = match.resultado && match.resultado !== '';

  return (
    <div className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${jugado ? 'bg-green-50 border-green-200' : 'bg-white border-zinc-100'}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div>
          <span className="text-[10px] font-black text-primary uppercase tracking-widest">Fecha {index}</span>
          <h3 className="font-display font-bold text-lg text-zinc-900">{match.rival}</h3>
          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
            <Calendar className="w-3 h-3" />
            <span>{match.date} — {match.time}hs</span>
          </div>
          {jugado && (
            <span className="inline-block mt-2 bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full">
              {match.resultado}
            </span>
          )}
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-zinc-300" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 pt-2 border-t border-zinc-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-zinc-400 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Estadio</span>
                  <span className="text-sm text-zinc-700 font-medium">{match.stadium}</span>
                </div>
              </div>
              {match.referee && (
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-zinc-400 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Árbitro</span>
                    <span className="text-sm text-zinc-700 font-medium">{match.referee}</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SocialButton({ icon, color, label }: { icon: ReactNode; color: string; label: string }) {
  return (
    <a
      href="#"
      className={`w-14 h-14 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 text-zinc-400 ${color} hover:border-transparent hover:shadow-lg active:scale-95`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function NavItem({ active, icon, label, onClick }: { active: boolean; icon: ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${active ? 'text-primary scale-110' : 'text-zinc-400 hover:text-zinc-600'}`}
    >
      <div className={`p-1.5 rounded-xl transition-colors ${active ? 'bg-primary/5' : ''}`}>
        {icon}
      </div>
      <span className="text-[10px] font-display font-medium">{label}</span>
    </button>
  );
}
