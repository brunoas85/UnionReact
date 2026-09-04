import type React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  NEXT_MATCH,
  PLAYERS,
  STANDINGS,
  FIXTURE,
  MATCH_IMAGES,
  MATCH_VIDEOS,
  NEWS,
} from './data';
import { supabase } from './supabaseClient';

// ── Design tokens ──────────────────────────────────────────────
const C = {
  bg:      '#f3f2f2',
  dark:    '#201e1d',
  red:     '#ec3013',
  darkRed: '#ae1800',
  mid:     '#605d5d',
  light:   '#7d7979',
  vLight:  '#9b9797',
  border:  '#d7d3d3',
} as const;

const FONT = 'Archivo, system-ui, sans-serif';

// ── Types ──────────────────────────────────────────────────────
type Screen = 'index' | 'match' | 'tabla' | 'plantel' | 'fixture' | 'galeria' | 'tercer';

// ── Helpers ────────────────────────────────────────────────────
function posAbbr(pos: string) {
  const map: Record<string, string> = {
    'Delantero': 'DEL', 'Mediocampista': 'MED', 'Defensor': 'DEF',
    'Arquero': 'ARQ', 'Director Técnico': 'DT', 'D.T.': 'DT',
    'Ayudante de Campo': 'AC', 'Jugador': 'JUG',
  };
  return map[pos] ?? pos.slice(0, 3).toUpperCase();
}

function outcome(score: string): 'g' | 'e' | 'p' | 'none' {
  if (!score || score.trim() === '' || score === '—') return 'none';
  const parts = score.split(' - ');
  if (parts.length < 2) return 'none';
  const a = parseInt(parts[0]), b = parseInt(parts[1]);
  if (isNaN(a) || isNaN(b)) return 'none';
  return a > b ? 'g' : a === b ? 'e' : 'p';
}

function ScoreBox({ score }: { score: string }) {
  const kind = outcome(score);
  const base: React.CSSProperties = {
    flexShrink: 0, minWidth: 54, textAlign: 'center',
    padding: '6px 8px', fontWeight: 800, fontSize: 12, lineHeight: 1,
    border: `2px solid ${C.dark}`, fontFamily: FONT,
  };
  if (kind === 'p')    return <span style={{ ...base, borderColor: C.red, color: C.darkRed }}>{score}</span>;
  if (kind === 'none') return <span style={{ ...base, borderColor: C.border, color: C.vLight }}>—</span>;
  return <span style={base}>{score}</span>;
}

// ── App ────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>('index');
  const [playersList, setPlayersList] = useState<any[]>([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [fixtureList, setFixtureList] = useState<any[]>([]);
  const [loadingFixture, setLoadingFixture] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const { data, error } = await supabase.from('players').select('*');
        if (error) throw error;
        if (data) {
          setPlayersList(data.sort((a: any, b: any) => {
            const nA = a.number === 'DT' ? Infinity : parseInt(a.number);
            const nB = b.number === 'DT' ? Infinity : parseInt(b.number);
            return nA - nB;
          }));
        }
      } catch {
        setPlayersList([...PLAYERS].sort((a, b) => {
          const nA = a.number === 'DT' ? Infinity : parseInt(a.number);
          const nB = b.number === 'DT' ? Infinity : parseInt(b.number);
          return nA - nB;
        }));
      } finally {
        setLoadingPlayers(false);
      }
    }
    fetchPlayers();
  }, []);

  useEffect(() => {
    async function fetchFixture() {
      try {
        const { data, error } = await supabase
          .from('fixture').select('*').order('match_number', { ascending: true });
        if (error) throw error;
        if (data) setFixtureList(data);
      } catch {
        setFixtureList(FIXTURE);
      } finally {
        setLoadingFixture(false);
      }
    }
    fetchFixture();
  }, []);

  const go = (s: Screen) => setScreen(s);

  const TITLES: Record<string, string> = {
    match: 'PRÓXIMO PARTIDO', tabla: 'POSICIONES',
    plantel: 'PLANTEL SENIOR', fixture: 'FIXTURE',
    galeria: 'GALERÍA', tercer: 'TERCER TIEMPO',
  };

  return (
    <div style={{ maxWidth: 430, margin: '0 auto', minHeight: '100dvh', background: C.bg, fontFamily: FONT, color: C.dark }}>
      <AnimatePresence mode="wait">
        {screen === 'index' ? (
          <motion.div
            key="index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -26 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
          >
            <IndexScreen go={go} />
          </motion.div>
        ) : (
          <motion.div
            key={screen}
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 26 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
            style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}
          >
            {/* Sticky back header */}
            <div style={{ position: 'sticky', top: 0, background: C.bg, borderBottom: `2px solid ${C.dark}`, zIndex: 10 }}>
              <button
                onClick={() => go('index')}
                style={{
                  appearance: 'none', border: 'none', background: 'none',
                  padding: '14px 16px 10px', fontWeight: 800, fontSize: 10,
                  letterSpacing: '.16em', color: C.darkRed, cursor: 'pointer',
                  display: 'block', fontFamily: FONT,
                }}
              >← ÍNDICE</button>
              <div style={{ padding: '0 16px 14px', fontWeight: 900, fontSize: 26, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase' }}>
                {TITLES[screen]}
              </div>
            </div>

            {/* Screen content */}
            {screen === 'match'   && <MatchScreen />}
            {screen === 'tabla'   && <TablaScreen />}
            {screen === 'plantel' && <PlantelScreen players={playersList} loading={loadingPlayers} />}
            {screen === 'fixture' && <FixtureScreen fixture={fixtureList} loading={loadingFixture} />}
            {screen === 'galeria' && <GaleriaScreen />}
            {screen === 'tercer'  && <TercerScreen />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Index screen ───────────────────────────────────────────────
function IndexScreen({ go }: { go: (s: Screen) => void }) {
  const rows: { n: string; label: string; s: Screen }[] = [
    { n: '01', label: 'PRÓXIMO PARTIDO',      s: 'match'   },
    { n: '02', label: 'TABLA DE POSICIONES',  s: 'tabla'   },
    { n: '03', label: 'PLANTEL SENIOR',        s: 'plantel' },
    { n: '04', label: 'FIXTURE Y RESULTADOS', s: 'fixture' },
    { n: '05', label: 'GALERÍA',              s: 'galeria' },
    { n: '06', label: 'TERCER TIEMPO',        s: 'tercer'  },
  ];

  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', height: 330, background: C.dark, overflow: 'hidden' }}>
        <img
          src="/UnionPlantel-9.png"
          alt="Plantel Unión"
          style={{ width: '100%', height: 330, objectFit: 'cover', display: 'block', filter: 'grayscale(1) contrast(1.12) brightness(.82)' }}
        />
        <img
          src="/UnionEscudo.png"
          alt="Escudo Unión"
          style={{ position: 'absolute', top: 18, left: 16, height: 66, width: 'auto' }}
        />
        <div style={{ position: 'absolute', left: 16, bottom: 18, right: 16, display: 'flex', flexDirection: 'column', gap: 6, color: '#fff' }}>
          <span style={{ fontWeight: 800, fontSize: 9, letterSpacing: '.2em', background: C.red, padding: '5px 7px', alignSelf: 'flex-start' }}>
            CLAUSURA 2026 · SENIOR
          </span>
          <span style={{ fontWeight: 900, fontSize: 42, lineHeight: .92, letterSpacing: '-.02em' }}>
            UNIÓN<br />S.M.A.
          </span>
        </div>
      </div>

      {/* Next match teaser */}
      <div
        onClick={() => go('match')}
        style={{
          background: C.red, color: '#fff', padding: '12px 16px',
          display: 'flex', alignItems: 'center', gap: 12,
          borderBottom: `2px solid ${C.dark}`, cursor: 'pointer',
        }}
      >
        <span style={{ fontWeight: 800, fontSize: 9, letterSpacing: '.16em', flexShrink: 0 }}>
          {NEXT_MATCH.round}
        </span>
        <span style={{ fontWeight: 800, fontSize: 15 }}>
          {NEXT_MATCH.opponent.toUpperCase()} · {NEXT_MATCH.date.split(' ')[0].toUpperCase()} {NEXT_MATCH.time}
        </span>
        <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: 14 }}>→</span>
      </div>

      {/* Numbered index rows */}
      {rows.map(r => (
        <button
          key={r.n}
          onClick={() => go(r.s)}
          style={{
            appearance: 'none', border: 'none', borderBottom: `2px solid ${C.dark}`,
            background: 'none', width: '100%', display: 'flex', alignItems: 'center',
            gap: 14, padding: '20px 16px', textAlign: 'left', cursor: 'pointer',
            fontFamily: FONT,
          }}
        >
          <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: '.06em', color: C.red, width: 22, flexShrink: 0 }}>{r.n}</span>
          <span style={{ fontWeight: 800, fontSize: 19, lineHeight: 1, letterSpacing: '.01em', textTransform: 'uppercase', flex: 1, color: C.dark }}>{r.label}</span>
          <span style={{ fontWeight: 700, fontSize: 15, color: C.light }}>→</span>
        </button>
      ))}

      {/* Footer */}
      <div style={{ padding: '18px 16px 30px', fontWeight: 600, fontSize: 9, lineHeight: 1.6, letterSpacing: '.14em', color: C.vLight }}>
        UNIÓN SAN MARTÍN DE LOS ANDES<br />
        LIGA DE VETERANOS · SENIOR · MAXI · SÚPER MAXI · MASTER<br />
        <span style={{ fontWeight: 400, letterSpacing: '.06em' }}>Desarrollado por bRuno´s</span>
      </div>
    </div>
  );
}

// ── Próximo partido ────────────────────────────────────────────
function MatchScreen() {
  return (
    <div>
      <div style={{ background: C.red, color: '#fff', padding: '24px 16px 26px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span style={{ fontWeight: 800, fontSize: 9, letterSpacing: '.2em' }}>{NEXT_MATCH.round} · LOCAL</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontWeight: 900, fontSize: 46, lineHeight: .9, letterSpacing: '-.03em' }}>UNIÓN</span>
          <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: '.14em', opacity: .8 }}>VS</span>
          <span style={{ fontWeight: 900, fontSize: 46, lineHeight: .9, letterSpacing: '-.03em' }}>{NEXT_MATCH.opponent.toUpperCase()}</span>
        </div>
        <div style={{ borderTop: '2px solid #fff', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 14 }}>{NEXT_MATCH.date.toUpperCase()} · {NEXT_MATCH.time}</span>
          <span style={{ fontWeight: 400, fontSize: 12, opacity: .85 }}>{NEXT_MATCH.stadium} · San Martín de los Andes</span>
        </div>
      </div>

      <div style={{ padding: '16px 16px', fontWeight: 400, fontSize: 12, lineHeight: 1.6, color: C.mid }}>
        Arranca el Clausura 2026: primer partido de Unión en la fase regular.
      </div>

      {/* Noticias */}
      <div style={{ borderTop: `2px solid ${C.dark}`, paddingTop: 4 }}>
        <div style={{ padding: '12px 16px 8px', fontWeight: 800, fontSize: 13, letterSpacing: '.12em' }}>NOTICIAS</div>
        {NEWS.map((n, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 16px', borderTop: `1px solid ${C.border}`, alignItems: 'flex-start' }}>
            <img src={n.image} alt="" style={{ width: 76, height: 76, objectFit: 'cover', flexShrink: 0, display: 'block', filter: 'grayscale(1) contrast(1.06)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, minWidth: 0 }}>
              <span style={{ fontWeight: 800, fontSize: 8, lineHeight: 1.2, letterSpacing: '.14em', color: C.darkRed, textTransform: 'uppercase' }}>{n.category}</span>
              <span style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.3 }}>{n.title}</span>
              {n.location && <span style={{ fontWeight: 400, fontSize: 10, color: C.light }}>{n.location}</span>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── Tabla de posiciones ────────────────────────────────────────
function TablaScreen() {
  return (
    <div>
      <div style={{ borderBottom: `2px solid ${C.dark}` }}>
        <div style={{ padding: '16px 16px 10px' }}>
          <span style={{ fontWeight: 400, fontSize: 10, color: C.light }}>Clausura 2026 · Senior · Fecha 1</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '30px 1fr 40px 40px', padding: '8px 16px', borderTop: `2px solid ${C.dark}`, borderBottom: `2px solid ${C.dark}`, fontWeight: 800, fontSize: 8, letterSpacing: '.12em', color: C.mid }}>
          <span>POS</span><span>EQUIPO</span>
          <span style={{ textAlign: 'center' }}>DIF</span>
          <span style={{ textAlign: 'right' }}>PTS</span>
        </div>
        {STANDINGS.map((row, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '30px 1fr 40px 40px', alignItems: 'center',
            padding: '12px 16px', borderBottom: `1px solid ${C.border}`,
            background: (row as any).isUserTeam ? '#ffe0d9' : 'transparent',
          }}>
            <span style={{ fontWeight: 800, fontSize: 12, color: C.light }}>{row.pos}</span>
            <span style={{ fontWeight: 700, fontSize: 13, lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.name}</span>
            <span style={{ fontWeight: 400, fontSize: 12, textAlign: 'center', color: C.mid }}>{row.dif > 0 ? `+${row.dif}` : row.dif}</span>
            <span style={{ fontWeight: 800, fontSize: 14, textAlign: 'right' }}>{row.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Plantel Senior ─────────────────────────────────────────────
function PlantelScreen({ players, loading }: { players: any[]; loading: boolean }) {
  if (loading) {
    return <div style={{ padding: '40px 16px', fontWeight: 400, fontSize: 12, color: C.light, textAlign: 'center' }}>Cargando plantel...</div>;
  }
  return (
    <div>
      <div style={{ padding: '12px 16px', fontWeight: 600, fontSize: 9, letterSpacing: '.14em', color: C.light }}>
        {players.length} INTEGRANTES
      </div>
      {players.map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '13px 16px', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ flexShrink: 0, width: 28, fontWeight: 800, fontSize: 15, color: C.red }}>{p.number}</span>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 14, lineHeight: 1.2, minWidth: 0 }}>{p.name}</span>
          <span style={{ fontWeight: 600, fontSize: 8, letterSpacing: '.14em', color: C.light }}>{posAbbr(p.position)}</span>
        </div>
      ))}
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── Fixture ────────────────────────────────────────────────────
function FixtureScreen({ fixture, loading }: { fixture: any[]; loading: boolean }) {
  const [torneo, setTorneo] = useState<'Clausura 2026' | 'Apertura 2026'>('Clausura 2026');
  if (loading) {
    return <div style={{ padding: '40px 16px', fontWeight: 400, fontSize: 12, color: C.light, textAlign: 'center' }}>Cargando fixture...</div>;
  }
  const all = fixture.length > 0 ? fixture : FIXTURE;
  const list = all.filter((f: any) => (f.torneo ?? 'Apertura 2026') === torneo);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 14px' }}>
        <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: '.1em', color: C.mid }}>{torneo.toUpperCase()}</span>
        <button
          onClick={() => setTorneo(t => t === 'Clausura 2026' ? 'Apertura 2026' : 'Clausura 2026')}
          style={{
            appearance: 'none', border: `2px solid ${C.dark}`, background: 'none',
            padding: '7px 10px', fontWeight: 800, fontSize: 9, letterSpacing: '.08em',
            cursor: 'pointer', fontFamily: FONT, color: C.dark,
          }}
        >
          {torneo === 'Clausura 2026' ? 'VER APERTURA 2026 →' : '← VOLVER A CLAUSURA 2026'}
        </button>
      </div>
      {list.map((f: any, i: number) => {
        const score = f.resultado || f.result || '';
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderBottom: `1px solid ${C.border}` }}>
            <span style={{ flexShrink: 0, width: 34, fontWeight: 600, fontSize: 8, letterSpacing: '.1em', color: C.vLight }}>F{f.match_number}</span>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
              <span style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>Unión — {f.rival}</span>
              <span style={{ fontWeight: 400, fontSize: 10, color: C.light }}>{f.date}</span>
            </div>
            <ScoreBox score={score} />
          </div>
        );
      })}
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── Galería ────────────────────────────────────────────────────
function GaleriaScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: 24 }}>
        {MATCH_IMAGES.map((img, i) => (
          <img
            key={`img-${i}`}
            src={img}
            alt=""
            onClick={() => setSelected(img)}
            style={{ width: '100%', height: 230, objectFit: 'cover', display: 'block', filter: 'grayscale(1) contrast(1.08)', cursor: 'pointer' }}
          />
        ))}
        {MATCH_VIDEOS.map((v, i) => (
          <video key={`vid-${i}`} controls style={{ width: '100%', display: 'block' }}>
            <source src={v} type="video/mp4" />
          </video>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(32,30,29,.92)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
        >
          <img src={selected} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

// ── Tercer Tiempo ──────────────────────────────────────────────
function TercerScreen() {
  return (
    <div>
      <img
        src="/Entrenamiento.png"
        alt="Entrenamiento"
        style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'grayscale(1) contrast(1.06)' }}
      />
      <div style={{ background: C.red, color: '#fff', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontWeight: 800, fontSize: 9, letterSpacing: '.18em' }}>TERCER TIEMPO · SÁBADO</span>
        <span style={{ fontWeight: 800, fontSize: 19, lineHeight: 1.15 }}>Asado después del partido de los máximos</span>
        <span style={{ fontWeight: 400, fontSize: 11, lineHeight: 1.4, opacity: .85 }}>Todos invitados a compartir.</span>
      </div>
      <div style={{ borderTop: `2px solid ${C.dark}`, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontWeight: 600, fontSize: 8, letterSpacing: '.14em', color: C.light }}>ENTRENAMIENTOS</span>
        <span style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>Viernes 21 a 22 HS · Cancha Nº 2</span>
        <span style={{ fontWeight: 400, fontSize: 11, lineHeight: 1.4, color: C.mid }}>Todas las categorías de Unión.</span>
      </div>
      <div style={{ borderTop: `2px solid ${C.dark}` }}>
        {['INSTAGRAM', 'GRUPO DE WHATSAPP', 'FACEBOOK'].map(l => (
          <button key={l} style={{
            appearance: 'none', border: 'none', borderBottom: `1px solid ${C.border}`,
            background: 'none', width: '100%', textAlign: 'left', padding: '15px 16px',
            fontWeight: 800, fontSize: 11, letterSpacing: '.12em', cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between', fontFamily: FONT, color: C.dark,
          }}>
            {l}<span>→</span>
          </button>
        ))}
      </div>
      <div style={{ padding: '16px 16px 24px', fontWeight: 400, fontSize: 9, color: C.vLight }}>
        Desarrollado por bRuno´s
      </div>
    </div>
  );
}
