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
import { useState, useEffect } from 'react';
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
} from './data';

type Tab = 'inicio' | 'plantel' | 'tabla' | 'fixture' | 'galeria' | 'social';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('inicio');
  const [notifOpen, setNotifOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      <header className="sticky top-4 bg-red-600/90 backdrop-blur-md border-b border-red-700 h-16 flex items-center justify-between px-4 z-50">
        <div className="w-30 h-30 bg-transparent flex items-center justify-center overflow-hidden drop-shadow-lg">
          <img
            src={CLUB_INFO.logo}
            alt="Logo"
            /*className="w-full h-full object-cover*/
            className="h-45 w-45 object-contain transform translate-y-3"
          />
        </div>
        <h1 className="font-display font-extrabold text-sm text-zinc-100 leading-tight">
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
                <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-600">Recordatorio</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Próximo partido — revisá el fixture</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 hover:bg-zinc-50">
                <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600">¡Bien hecho!</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Excelente performance en el último partido</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 hover:bg-zinc-50">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">Importante</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Llevar medias negras</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 pb-24 overflow-y-auto">
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
              {/* Hero */}
              <section className="px-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg group">
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
              </section>

              {/* Próximo Encuentro */}
              <section className="px-4">
                <div className="mb-2 flex justify-between items-end">
                  <h3 className="font-display font-bold text-lg text-zinc-900">Próximo Encuentro</h3>
                  <span className="text-[10px] text-primary font-black tracking-widest">{NEXT_MATCH.round}</span>
                </div>
                <div className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    {/* Unión */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-[104px] h-[104px] mb-2 flex items-center justify-center p-2 bg-zinc-50 rounded-xl">
                        <img src={CLUB_INFO.logo} alt="Unión" className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs font-bold text-zinc-900">UNCIÓN</span>
                    </div>

                    <div className="flex flex-col items-center justify-center px-4">
                      <div className="font-display font-black text-3xl text-primary italic">VS</div>
                      <div className="bg-zinc-100 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-600 mt-2">
                        {NEXT_MATCH.time}
                      </div>
                    </div>

                    {/* Rival */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 mb-2 flex items-center justify-center p-2 bg-zinc-50 rounded-xl">
                        {NEXT_MATCH.opponentLogo
                          ? <img src={NEXT_MATCH.opponentLogo} alt={NEXT_MATCH.opponent} className="w-full h-full object-contain" />
                          : <Trophy className="w-8 h-8 text-zinc-300" />
                        }
                      </div>
                      <span className="text-xs font-bold text-zinc-900">{NEXT_MATCH.opponent}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-zinc-50">
                    <div className="flex items-center gap-3 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>{NEXT_MATCH.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-500">
                      <MapPin className="w-4 h-4" />
                      <span>{NEXT_MATCH.stadium}</span>
                    </div>
                  </div>
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
                      className="min-w-[200px] h-[150px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0 snap-center relative group cursor-pointer"
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
                    <span className="text-xs font-bold bg-zinc-100 text-zinc-500 px-2 py-1 rounded-full">Zona A</span>
                  </div>
                </div>

                <div className="col-span-2 bg-primary/5 border border-primary/10 rounded-2xl p-4 flex items-center gap-4 group cursor-pointer"
                  onClick={() => setActiveTab('social')}
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Beer className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-zinc-900">Tercer Tiempo</h4>
                    <p className="text-zinc-500 text-xs mt-0.5">{SOCIAL_EVENT.title} — {SOCIAL_EVENT.date} {SOCIAL_EVENT.time}</p>
                  </div>
                  <ChevronRight className="ml-auto w-5 h-5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </section>

              {/* Noticias */}
              <section className="px-4 pb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display font-bold text-lg text-zinc-900">Últimas Noticias</h3>
                </div>
                <div className="space-y-3">
                  {NEWS.map((item, i) => (
                    <NewsCard key={i} {...item} />
                  ))}
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
              <div className="grid grid-cols-2 gap-4">
                {PLAYERS.map((player, i) => (
                  <div key={i} className="bg-white border border-zinc-100 rounded-2xl p-4 shadow-sm flex flex-col items-center">
                    <div className="w-20 h-20 bg-zinc-100 rounded-full mb-3 flex items-center justify-center text-zinc-300 overflow-hidden shadow-inner">
                      {player.avatar ? (
                        <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="w-10 h-10" />
                      )}
                    </div>
                    <span className="text-xs font-black text-primary mb-1">#{player.number}</span>
                    <h3 className="font-display font-bold text-sm text-zinc-900 text-center">{player.name}</h3>
                    <p className="text-[10px] text-zinc-500 font-medium">{player.position}</p>
                  </div>
                ))}
              </div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 space-y-4"
            >
              <h2 className="font-display font-black text-2xl text-zinc-900 mb-2 text-right">Fixture</h2>
              {FIXTURE.map((match, i) => (
                <FixtureItem key={i} match={match} index={i + 1} />
              ))}
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
              <div className="flex justify-between items-end mb-2">
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all">
                  <Camera className="w-4 h-4" />
                  Subir Foto
                </button>
                <div className="text-right">
                  <h2 className="font-display font-black text-2xl text-zinc-900">Galería</h2>
                  <p className="text-xs text-zinc-500 mt-1">Imágenes de los partidos</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {MATCH_IMAGES.map((img, i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden shadow-sm aspect-square ${i === 0 ? 'col-span-2 aspect-[2/1]' : ''}`}>
                    <img src={img} alt={`Partido ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Beer className="w-12 h-12 text-primary" />
              </div>
              <h2 className="font-display font-black text-2xl text-zinc-900 text-right">Vida Social</h2>
              <p className="text-zinc-500 text-sm max-w-[250px] mx-auto">{SOCIAL_EVENT.description}</p>
              <div className="bg-primary text-white p-6 rounded-3xl shadow-xl shadow-primary/20 text-left relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-display font-black text-xl mb-1">{SOCIAL_EVENT.title}</h4>
                  <p className="text-white/80 text-xs mb-4">{SOCIAL_EVENT.date} — {SOCIAL_EVENT.time}</p>
                  <button className="bg-white text-primary px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider">
                    Confirmar Asistencia
                  </button>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-20">
                  <Beer className="w-32 h-32" />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-display font-bold text-xs text-zinc-400 mb-4 uppercase tracking-[0.2em]">Nuestra Comunidad</h3>
                <div className="flex justify-center gap-4">
                  <SocialButton icon={<Facebook className="w-6 h-6" />} color="hover:text-[#1877F2] hover:bg-[#1877F2]/5" label="Facebook" />
                  <SocialButton icon={<Instagram className="w-6 h-6" />} color="hover:text-[#E4405F] hover:bg-[#E4405F]/5" label="Instagram" />
                  <SocialButton icon={<Twitter className="w-6 h-6" />} color="hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/5" label="Twitter" />
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
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-zinc-100 flex justify-around items-center py-3 z-50 px-2 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <NavItem active={activeTab === 'inicio'} icon={<Home />} label="Inicio" onClick={() => setActiveTab('inicio')} />
        <NavItem active={activeTab === 'plantel'} icon={<Users />} label="Plantel" onClick={() => setActiveTab('plantel')} />
        <NavItem active={activeTab === 'tabla'} icon={<Trophy />} label="Tabla" onClick={() => setActiveTab('tabla')} />
        <NavItem active={activeTab === 'fixture'} icon={<Calendar />} label="Fixture" onClick={() => setActiveTab('fixture')} />
        <NavItem active={activeTab === 'galeria'} icon={<Camera />} label="Fotos" onClick={() => setActiveTab('galeria')} />
        <NavItem active={activeTab === 'social'} icon={<Beer />} label="Social" onClick={() => setActiveTab('social')} />
      </nav>
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
          <tr key={i} className={`border-t border-zinc-50 ${row.isUserTeam ? 'bg-primary/5' : ''}`}>
            <td className="px-3 py-3 font-black text-zinc-500">{row.pos}</td>
            <td className={`px-3 py-3 font-bold ${row.isUserTeam ? 'text-primary' : 'text-zinc-700'}`}>{row.name}</td>
            <td className="px-3 py-3 font-black text-center">{row.pts}</td>
            <td className="px-3 py-3 text-center text-zinc-500">{row.pj}</td>
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

function NewsCard({ category, title, time, image }: { category: string; title: string; time: string; image: string }) {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-3 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <img src={image} alt="News" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">{category}</span>
        <h5 className="font-display font-bold text-sm text-zinc-900 line-clamp-2">{title}</h5>
        <div className="flex items-center gap-2 mt-2 text-[10px] text-zinc-400">
          <Clock className="w-3 h-3" />
          <span>{time}</span>
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

function SocialButton({ icon, color, label }: { icon: React.ReactNode; color: string; label: string }) {
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

function NavItem({ active, icon, label, onClick }: { active: boolean; icon: React.ReactNode; label: string; onClick: () => void }) {
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
