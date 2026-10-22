import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

// SETTINGS
const app = express();
app.set("port", 3000);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());

const batters = [
  { id: 1, name: "Aaron Judge", team: "NYY", hits: 180, atBats: 560, homeRuns: 58, salaryMillions: 40, contractEnd: "2031-11-01" },
  { id: 2, name: "Shohei Ohtani", team: "LAD", hits: 195, atBats: 630, homeRuns: 54, salaryMillions: 70, contractEnd: "2033-11-01" },
  { id: 3, name: "Ronald Acuña Jr.", team: "ATL", hits: 140, atBats: 490, homeRuns: 25, salaryMillions: 17, contractEnd: "2028-11-01" },
  { id: 4, name: "Jose Altuve", team: "HOU", hits: 185, atBats: 620, homeRuns: 20, salaryMillions: 30, contractEnd: "2029-11-01" },
  { id: 5, name: "Juan Soto", team: "NYM", hits: 165, atBats: 570, homeRuns: 41, salaryMillions: 45, contractEnd: "2038-11-01" },
  { id: 6, name: "Gunnar Henderson", team: "BAL", hits: 175, atBats: 610, homeRuns: 37, salaryMillions: 1.2, contractEnd: "2028-11-01" },
  { id: 7, name: "Bobby Witt Jr.", team: "KC", hits: 210, atBats: 640, homeRuns: 32, salaryMillions: 28, contractEnd: "2035-11-01" },
  { id: 8, name: "Jackson Chourio", team: "MIL", hits: 145, atBats: 530, homeRuns: 21, salaryMillions: 2.5, contractEnd: "2032-11-01" }
];

const uclClubs = [
  { id: "RMA", name: "Real Madrid", country: "ESP", goalsFor: 22, goalsAgainst: 9, titlesWon: 15, lastTitleYear: 2024, status: "QUALIFIED" },
  { id: "MCI", name: "Manchester City", country: "ENG", goalsFor: 24, goalsAgainst: 8, titlesWon: 1, lastTitleYear: 2023, status: "QUALIFIED" },
  { id: "BAY", name: "Bayern Munich", country: "GER", goalsFor: 19, goalsAgainst: 12, titlesWon: 6, lastTitleYear: 2020, status: "QUALIFIED" },
  { id: "PSG", name: "Paris Saint-Germain", country: "FRA", goalsFor: 12, goalsAgainst: 11, titlesWon: 0, lastTitleYear: null, status: "PLAYOFFS" },
  { id: "ARS", name: "Arsenal", country: "ENG", goalsFor: 15, goalsAgainst: 6, titlesWon: 0, lastTitleYear: null, status: "QUALIFIED" },
  { id: "BAR", name: "Barcelona", country: "ESP", goalsFor: 20, goalsAgainst: 10, titlesWon: 5, lastTitleYear: 2015, status: "QUALIFIED" },
  { id: "JUV", name: "Juventus", country: "ITA", goalsFor: 9, goalsAgainst: 13, titlesWon: 2, lastTitleYear: 1996, status: "ELIMINATED" },
  { id: "ATM", name: "Atletico Madrid", country: "ESP", goalsFor: 13, goalsAgainst: 14, titlesWon: 0, lastTitleYear: null, status: "PLAYOFFS" },
  { id: "MIL", name: "AC Milan", country: "ITA", goalsFor: 11, goalsAgainst: 15, titlesWon: 7, lastTitleYear: 2007, status: "ELIMINATED" }
];

const digitalPayments = [
  { ref: "TX101", gateway: "PAGOMOVIL", amountUsd: 45.0, status: "COMPLETED", date: "2026-10-10", feePercent: 0.01 },
  { ref: "TX102", gateway: "PAYPAL", amountUsd: 120.0, status: "COMPLETED", date: "2026-10-11", feePercent: 0.054 },
  { ref: "TX103", gateway: "ZINLI", amountUsd: 80.0, status: "PENDING", date: "2026-10-12", feePercent: 0.02 },
  { ref: "TX104", gateway: "PAGOMOVIL", amountUsd: 15.5, status: "REJECTED", date: "2026-10-14", feePercent: 0.01 },
  { ref: "TX105", gateway: "PAYPAL", amountUsd: 350.0, status: "COMPLETED", date: "2026-10-15", feePercent: 0.054 },
  { ref: "TX106", gateway: "ZINLI", amountUsd: 210.0, status: "COMPLETED", date: "2026-10-16", feePercent: 0.02 },
  { ref: "TX107", gateway: "CRYPTO", amountUsd: 500.0, status: "PENDING", date: "2026-10-18", feePercent: 0.015 },
  { ref: "TX108", gateway: "PAYPAL", amountUsd: 65.0, status: "REJECTED", date: "2026-10-19", feePercent: 0.054 }
];

const studentSubmissions = [
  { submissionId: 201, studentName: "Carlos Gómez", course: "PROGRAMACION_WEB", score: 18, submittedDate: "2026-10-02", isLate: false },
  { submissionId: 202, studentName: "Ana López", course: "ESTRUCTURAS_DATOS", score: 14, submittedDate: "2026-10-05", isLate: true },
  { submissionId: 203, studentName: "Luis Silva", course: "TOPICOS_PROGRAMACION", score: 20, submittedDate: "2026-10-01", isLate: false },
  { submissionId: 204, studentName: "María Medina", course: "PROGRAMACION_WEB", score: 11, submittedDate: "2026-10-06", isLate: true },
  { submissionId: 205, studentName: "Javier Vargas", course: "TOPICOS_PROGRAMACION", score: 16, submittedDate: "2026-10-03", isLate: false },
  { submissionId: 206, studentName: "Sofía Mendoza", course: "ESTRUCTURAS_DATOS", score: 9, submittedDate: "2026-10-07", isLate: false },
  { submissionId: 207, studentName: "Diego Paredes", course: "TOPICOS_PROGRAMACION", score: 12, submittedDate: "2026-10-08", isLate: true },
  { submissionId: 208, studentName: "Elena Toro", course: "PROGRAMACION_WEB", score: 19, submittedDate: "2026-10-01", isLate: false }
];

const proxyMetrics = [
  { route: "/api/v1/auth", backendHost: "auth-srv-1", requestCount: 8400, avgLatencyMs: 45, errorRate: 0.005, protocol: "HTTPS", status: "HEALTHY" },
  { route: "/api/v1/users", backendHost: "users-srv-1", requestCount: 12500, avgLatencyMs: 120, errorRate: 0.02, protocol: "HTTPS", status: "HEALTHY" },
  { route: "/api/v1/payments", backendHost: "pay-srv-1", requestCount: 4200, avgLatencyMs: 480, errorRate: 0.08, protocol: "HTTPS", status: "DEGRADED" },
  { route: "/api/v1/reports", backendHost: "report-srv-1", requestCount: 950, avgLatencyMs: 1400, errorRate: 0.15, protocol: "HTTP", status: "CRITICAL" },
  { route: "/api/v1/orders", backendHost: "orders-srv-1", requestCount: 6300, avgLatencyMs: 210, errorRate: 0.01, protocol: "HTTPS", status: "HEALTHY" },
  { route: "/api/v1/catalog", backendHost: "cat-srv-1", requestCount: 11000, avgLatencyMs: 85, errorRate: 0.04, protocol: "HTTP", status: "DEGRADED" },
  { route: "/api/v1/notifications", backendHost: "notif-srv-1", requestCount: 3100, avgLatencyMs: 950, errorRate: 0.12, protocol: "HTTPS", status: "CRITICAL" }
];

const podcasts = [
  { id: "P1", title: "Code & Coffee", host: "DevStudio", category: "TECH", isMonetized: true },
  { id: "P2", title: "Global Sports Weekly", host: "Futboleros", category: "SPORTS", isMonetized: true },
  { id: "P3", title: "Historia sin Filtro", host: "MundoPasado", category: "HISTORY", isMonetized: false },
  { id: "P4", title: "Startup Grindcast", host: "VentureLab", category: "BUSINESS", isMonetized: true }
];

const episodes = [
  { episodeId: 501, podcastId: "P1", title: "Arquitectura Hexagonal", plays: 12000, durationMin: 55, tags: ["backend", "node", "clean-code"] },
  { episodeId: 502, podcastId: "P1", title: "Patrones Funcionales", plays: 8500, durationMin: 42, tags: ["javascript", "functional", "backend"] },
  { episodeId: 503, podcastId: "P2", title: "Análisis Post-Champions", plays: 25000, durationMin: 90, tags: ["ucl", "futbol", "europa"] },
  { episodeId: 504, podcastId: "P2", title: "Especial Serie Mundial", plays: 18000, durationMin: 80, tags: ["mlb", "baseball", "postseason"] },
  { episodeId: 505, podcastId: "P3", title: "Imperio Romano Parte 1", plays: 4200, durationMin: 125, tags: ["roma", "antiguedad"] },
  { episodeId: 506, podcastId: "P4", title: "Cómo Levantar Capital", plays: 15400, durationMin: 65, tags: ["startups", "venture-capital", "fintech"] },
  { episodeId: 507, podcastId: "P4", title: "Pitch Decks que Venden", plays: 9800, durationMin: 45, tags: ["startups", "pitch"] }
];

const teams = [
  { id: "T1", tag: "FNC", teamName: "Fnatic", game: "LOL", isPartner: true },
  { id: "T2", tag: "SEN", teamName: "Sentinels", game: "VALORANT", isPartner: true },
  { id: "T3", tag: "NAV", teamName: "Natus Vincere", game: "CS2", isPartner: false },
  { id: "T4", tag: "G2E", teamName: "G2 Esports", game: "LOL", isPartner: true },
  { id: "T5", tag: "KRU", teamName: "KRÜ Esports", game: "VALORANT", isPartner: false }
];

const matches = [
  { matchId: 801, teamId: "T1", opponent: "G2 Esports", viewPeak: 450000, durationMin: 38, mapsPlayed: ["bind", "ascent"], won: true },
  { matchId: 802, teamId: "T1", opponent: "Mad Lions", viewPeak: 280000, durationMin: 44, mapsPlayed: ["haven"], won: true },
  { matchId: 803, teamId: "T2", opponent: "KRÜ Esports", viewPeak: 520000, durationMin: 65, mapsPlayed: ["ascent", "split", "lotus"], won: true },
  { matchId: 804, teamId: "T3", opponent: "FaZe Clan", viewPeak: 310000, durationMin: 52, mapsPlayed: ["mirage", "inferno"], won: false },
  { matchId: 805, teamId: "T4", opponent: "T1", viewPeak: 610000, durationMin: 32, mapsPlayed: ["bind"], won: false },
  { matchId: 806, teamId: "T5", opponent: "Sentinels", viewPeak: 490000, durationMin: 70, mapsPlayed: ["sunset", "split"], won: false },
  { matchId: 807, teamId: "T2", opponent: "Cloud9", viewPeak: 390000, durationMin: 41, mapsPlayed: ["haven", "bind"], won: true }
];

app.get('/batters', (req, res) => {
  res.status(200).json(batters);
});

app.get('/ucl-clubs', (req, res) => {
  res.status(200).json(uclClubs);
});

app.get('/payments', (req, res) => {
  res.status(200).json(digitalPayments);
});

app.get('/submissions', (req, res) => {
  res.status(200).json(studentSubmissions);
});

app.get('/proxy-metrics', (req, res) => {
  res.status(200).json(proxyMetrics);
});

app.get('/podcasts', (req, res) => {
  res.status(200).json(podcasts);
});

app.get('/episodes', (req, res) => {
  res.status(200).json(episodes);
});

app.get('/teams', (req, res) => {
  res.status(200).json(teams);
});

app.get('/matches', (req, res) => {
  res.status(200).json(matches);
});

// Ruta raíz para verificación
app.get('/', (req, res) => {
  res.json({
    message: "Servidor de Taller - Tópicos Especiales de Programación",
    endpoints: [
      "/batters",
      "/ucl-clubs",
      "/payments",
      "/submissions",
      "/proxy-metrics",
      "/podcasts",
      "/episodes",
      "/teams",
      "/matches"
    ]
  });
});

export default app;
