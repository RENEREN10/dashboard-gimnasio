// ---------- Constantes ----------
const PLAN_PRICES_COP = { basic: 80000, intermediate: 110000, vip: 150000 };
const DEFAULT_SETTINGS = { gymName: 'BogoFITNESS', maxCapacity: 80, copPerUsd: 4000 };
const LANG_KEY = 'bogofitness-lang';
const SETTINGS_KEY = 'bogofitness-settings';
const VIEWS = ['home', 'members', 'payments', 'reports', 'settings'];

const INITIAL_MEMBERS = [
  { id: '#BF-101', name: 'Carlos Mendoza', plan: 'vip', status: 'active', date: '2026-09-01' },
  { id: '#BF-102', name: 'Mariana Gómez', plan: 'basic', status: 'pending', date: '2026-08-28' },
  { id: '#BF-103', name: 'Andrés Rocha', plan: 'vip', status: 'active', date: '2026-09-02' },
  { id: '#BF-104', name: 'Laura Jiménez', plan: 'basic', status: 'active', date: '2026-09-03' },
  { id: '#BF-105', name: 'Felipe Torres', plan: 'intermediate', status: 'pending', date: '2026-08-25' },
  { id: '#BF-106', name: 'Johan Cuitiva', plan: 'basic', status: 'active', date: '2026-09-03' },
];

// ---------- i18n ----------
const translations = {
  es: {
    'document.title': 'BogoFITNESS - Panel de Administración',
    'brand.sub': 'Panel Admin',
    'nav.home': '📊 Inicio',
    'nav.members': '🏋️‍♂️ Miembros',
    'nav.payments': '💳 Pagos',
    'nav.reports': '📈 Reportes',
    'nav.settings': '⚙️ Configuración',
    'search.placeholder': 'Buscar miembro por nombre o ID...',
    'user.name': 'Administrador',
    'kpi.active.title': 'Miembros Activos',
    'kpi.active.change': '+12% este mes',
    'kpi.income.title': 'Ingresos Mensuales',
    'kpi.income.change': '+8% vs mes anterior',
    'kpi.capacity.title': 'Aforo Actual',
    'kpi.expiring.title': 'Por Vencer (7 días)',
    'kpi.expiring.change': 'Atención requerida',
    'section.add': '+ Nuevo Miembro',
    'home.recent.title': 'Miembros Recientes',
    'home.viewAll': 'Ver todos',
    'members.title': 'Todos los Miembros',
    'members.filterPlanLabel': 'Plan',
    'members.filterStatusLabel': 'Estado',
    'members.filterAllPlans': 'Todos los planes',
    'members.filterAllStatus': 'Todos los estados',
    'members.empty': 'No se encontraron miembros con esos filtros.',
    'payments.title': 'Historial de Pagos',
    'payments.subtitle': 'Montos calculados según el plan contratado.',
    'table.id': 'ID',
    'table.name': 'Nombre',
    'table.plan': 'Plan',
    'table.status': 'Estado',
    'table.payment': 'Último Pago',
    'table.actions': 'Acciones',
    'table.amount': 'Monto',
    'action.view': 'Ver',
    'modal.register.title': 'Registrar Nuevo Miembro',
    'modal.name.label': 'Nombre Completo',
    'modal.name.placeholder': 'Ej. Ana Martínez',
    'modal.plan.label': 'Plan',
    'modal.status.label': 'Estado Inicial',
    'modal.save': 'Guardar Miembro',
    'plan.basic': 'Plan Básico',
    'plan.intermediate': 'Plan Intermedio',
    'plan.vip': 'Plan VIP',
    'status.active': 'Activo',
    'status.pending': 'Por Vencer',
    'status.inactive': 'Inactivo',
    'pay.paid': 'Pagado',
    'pay.pending': 'Pendiente',
    'reports.totalMembers': 'Total Miembros',
    'reports.totalIncome': 'Ingreso Total Estimado',
    'reports.incomeByPlan': 'Ingresos por Plan',
    'reports.membersByStatus': 'Miembros por Estado',
    'settings.title': 'Configuración',
    'settings.hint': 'Estos valores se usan en aforo, moneda y cabecera.',
    'settings.gymName': 'Nombre del gimnasio',
    'settings.capacity': 'Capacidad máxima (aforo)',
    'settings.rate': 'Tasa COP por 1 USD',
    'settings.save': 'Guardar Cambios',
    'settings.reset': 'Restablecer',
    'settings.saved': '✅ Cambios guardados',
    'detail.title': 'Detalles del Miembro',
    'detail.id': 'ID:',
    'detail.name': 'Nombre:',
    'detail.plan': 'Plan:',
    'detail.status': 'Estado:',
    'detail.payment': 'Último Pago:',
    'detail.close': 'Cerrar',
  },
  en: {
    'document.title': 'BogoFITNESS - Admin Dashboard',
    'brand.sub': 'Admin Panel',
    'nav.home': '📊 Home',
    'nav.members': '🏋️‍♂️ Members',
    'nav.payments': '💳 Payments',
    'nav.reports': '📈 Reports',
    'nav.settings': '⚙️ Settings',
    'search.placeholder': 'Search member by name or ID...',
    'user.name': 'Administrator',
    'kpi.active.title': 'Active Members',
    'kpi.active.change': '+12% this month',
    'kpi.income.title': 'Monthly Revenue',
    'kpi.income.change': '+8% vs last month',
    'kpi.capacity.title': 'Current Occupancy',
    'kpi.expiring.title': 'Expiring (7 days)',
    'kpi.expiring.change': 'Attention required',
    'section.add': '+ New Member',
    'home.recent.title': 'Recent Members',
    'home.viewAll': 'View all',
    'members.title': 'All Members',
    'members.filterPlanLabel': 'Plan',
    'members.filterStatusLabel': 'Status',
    'members.filterAllPlans': 'All plans',
    'members.filterAllStatus': 'All statuses',
    'members.empty': 'No members match those filters.',
    'payments.title': 'Payment History',
    'payments.subtitle': 'Amounts calculated from the member plan.',
    'table.id': 'ID',
    'table.name': 'Name',
    'table.plan': 'Plan',
    'table.status': 'Status',
    'table.payment': 'Last Payment',
    'table.actions': 'Actions',
    'table.amount': 'Amount',
    'action.view': 'View',
    'modal.register.title': 'Register New Member',
    'modal.name.label': 'Full Name',
    'modal.name.placeholder': 'E.g. Jane Smith',
    'modal.plan.label': 'Plan',
    'modal.status.label': 'Initial Status',
    'modal.save': 'Save Member',
    'plan.basic': 'Basic Plan',
    'plan.intermediate': 'Intermediate Plan',
    'plan.vip': 'VIP Plan',
    'status.active': 'Active',
    'status.pending': 'Expiring',
    'status.inactive': 'Inactive',
    'pay.paid': 'Paid',
    'pay.pending': 'Pending',
    'reports.totalMembers': 'Total Members',
    'reports.totalIncome': 'Estimated Total Revenue',
    'reports.incomeByPlan': 'Revenue by Plan',
    'reports.membersByStatus': 'Members by Status',
    'settings.title': 'Settings',
    'settings.hint': 'These values drive capacity, currency and header.',
    'settings.gymName': 'Gym name',
    'settings.capacity': 'Max capacity',
    'settings.rate': 'COP per 1 USD rate',
    'settings.save': 'Save Changes',
    'settings.reset': 'Reset',
    'settings.saved': '✅ Changes saved',
    'detail.title': 'Member Details',
    'detail.id': 'ID:',
    'detail.name': 'Name:',
    'detail.plan': 'Plan:',
    'detail.status': 'Status:',
    'detail.payment': 'Last Payment:',
    'detail.close': 'Close',
  },
};

// ---------- Estado ----------
let currentLang = localStorage.getItem(LANG_KEY) || 'es';
let settings = { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') };
let members = [...INITIAL_MEMBERS];
let currentView = 'home';

// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);
const t = (key) => translations[currentLang][key] ?? translations.es[key] ?? key;
const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const formatCurrency = (totalCop) => {
  if (currentLang === 'en') {
    const usd = totalCop / settings.copPerUsd;
    return `$${usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }
  return `$ ${totalCop.toLocaleString('es-CO')} COP`;
};

const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'es-CO');
};

const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const isPaying = (m) => m.status === 'active' || m.status === 'pending';
const countByStatus = (status) => members.filter((m) => m.status === status).length;
const calcIncomeCOP = () => members.filter(isPaying).reduce((sum, m) => sum + (PLAN_PRICES_COP[m.plan] ?? 0), 0);

// ---------- Router SPA ----------
function showView(name) {
  if (!VIEWS.includes(name)) return;
  currentView = name;
  document.querySelectorAll('#sidebarNav li').forEach((li) => {
    li.classList.toggle('active', li.dataset.view === name);
  });
  document.querySelectorAll('[data-panel]').forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.panel === name);
  });
  if (name === 'payments') renderPayments();
  if (name === 'reports') renderReports();
}

// ---------- Renders (una sola fuente: members[]) ----------
function memberRowHtml(m) {
  return `
    <td>${escapeHtml(m.id)}</td>
    <td>${escapeHtml(m.name)}</td>
    <td>${escapeHtml(t(`plan.${m.plan}`))}</td>
    <td><span class="badge ${escapeHtml(m.status)}">${escapeHtml(t(`status.${m.status}`))}</span></td>
    <td>${escapeHtml(formatDate(m.date))}</td>
    <td><button class="btn-action" type="button" data-view-id="${escapeHtml(m.id)}">${escapeHtml(t('action.view'))}</button></td>`;
}

function renderTables() {
  const term = $('searchInput').value.toLowerCase();

  // Home: últimos 5 que coincidan con búsqueda
  const recent = members.filter((m) => `${m.id} ${m.name}`.toLowerCase().includes(term)).slice(0, 5);
  $('membersTable').innerHTML = recent.map((m) => `<tr>${memberRowHtml(m)}</tr>`).join('');

  // Miembros: búsqueda + filtros de plan/estado
  const planFilter = $('filterPlan').value;
  const statusFilter = $('filterStatus').value;
  const filtered = members.filter((m) => {
    const okSearch = `${m.id} ${m.name}`.toLowerCase().includes(term);
    const okPlan = planFilter === 'all' || m.plan === planFilter;
    const okStatus = statusFilter === 'all' || m.status === statusFilter;
    return okSearch && okPlan && okStatus;
  });
  $('allMembersTable').innerHTML = filtered.map((m) => `<tr>${memberRowHtml(m)}</tr>`).join('');
  $('membersEmpty').classList.toggle('hidden', filtered.length > 0);
}

function renderPayments() {
  $('paymentsTable').innerHTML = members.map((m) => {
    const amount = PLAN_PRICES_COP[m.plan] ?? 0;
    const paid = isPaying(m);
    return `<tr>
      <td>${escapeHtml(m.id)}</td>
      <td>${escapeHtml(m.name)}</td>
      <td>${escapeHtml(t(`plan.${m.plan}`))}</td>
      <td>${escapeHtml(formatCurrency(amount))}</td>
      <td>${escapeHtml(formatDate(m.date))}</td>
      <td><span class="badge ${paid ? 'active' : 'inactive'}">${escapeHtml(t(paid ? 'pay.paid' : 'pay.pending'))}</span></td>
    </tr>`;
  }).join('');
}

function barRow(label, value, max, display) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return `<div class="bar-row">
    <span class="bar-label">${escapeHtml(label)}</span>
    <div class="bar"><span style="width:${pct}%"></span></div>
    <span class="bar-value">${escapeHtml(display)}</span>
  </div>`;
}

function renderReports() {
  const income = calcIncomeCOP();
  $('reportTotalMembers').textContent = members.length;
  $('reportTotalIncome').textContent = formatCurrency(income);

  const incomeByPlan = Object.keys(PLAN_PRICES_COP).map((plan) => ({
    plan,
    total: members.filter((m) => m.plan === plan && isPaying(m)).length * PLAN_PRICES_COP[plan],
  }));
  const maxIncome = Math.max(1, ...incomeByPlan.map((x) => x.total));
  $('chartPlans').innerHTML = incomeByPlan
    .map((x) => barRow(t(`plan.${x.plan}`), x.total, maxIncome, formatCurrency(x.total)))
    .join('');

  const statuses = ['active', 'pending', 'inactive'];
  const maxCount = Math.max(1, ...statuses.map(countByStatus));
  $('chartStatus').innerHTML = statuses
    .map((s) => barRow(t(`status.${s}`), countByStatus(s), maxCount, String(countByStatus(s))))
    .join('');
}

function updateMetrics() {
  const activeCount = countByStatus('active');
  const pendingCount = countByStatus('pending');
  $('activeMembersCard').textContent = activeCount;
  $('pendingMembersCard').textContent = pendingCount;
  $('monthlyIncomeCard').textContent = formatCurrency(calcIncomeCOP());

  const currentPeople = activeCount + pendingCount;
  const percentage = Math.round((currentPeople / settings.maxCapacity) * 100);
  $('capacityCard').textContent = `${currentPeople} / ${settings.maxCapacity}`;
  $('capacityPercentage').textContent =
    currentLang === 'en' ? `${percentage}% capacity` : `${percentage}% de capacidad`;
}

function renderAll() {
  renderTables();
  updateMetrics();
  if (currentView === 'payments') renderPayments();
  if (currentView === 'reports') renderReports();
}

function renderBrand() {
  const parts = settings.gymName.trim().split(/\s+/);
  $('brandName').innerHTML =
    parts.length > 1
      ? `${escapeHtml(parts.slice(0, -1).join(' '))} <span>${escapeHtml(parts[parts.length - 1])}</span>`
      : escapeHtml(settings.gymName);
}

// ---------- Idioma ----------
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.title = t('document.title');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  $('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';
  renderBrand();
  renderAll();
}

// ---------- Settings ----------
function fillSettingsForm() {
  $('settingGymName').value = settings.gymName;
  $('settingCapacity').value = settings.maxCapacity;
  $('settingRate').value = settings.copPerUsd;
}

function saveSettings(newValues) {
  settings = { ...settings, ...newValues };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  renderBrand();
  renderAll();
}

// ---------- Modales ----------
const openOverlay = (el) => el.classList.add('active');
const closeOverlay = (el) => el.classList.remove('active');

function showMemberDetail(id) {
  const m = members.find((x) => x.id === id);
  if (!m) return;
  $('detailId').textContent = m.id;
  $('detailName').textContent = m.name;
  $('detailPlan').textContent = t(`plan.${m.plan}`);
  $('detailStatus').textContent = t(`status.${m.status}`);
  $('detailPayment').textContent = formatDate(m.date);
  openOverlay($('viewMemberModal'));
}

// ---------- Eventos ----------
function bindEvents() {
  $('sidebarNav').addEventListener('click', (e) => {
    const li = e.target.closest('li[data-view]');
    if (!li) return;
    e.preventDefault();
    showView(li.dataset.view);
  });

  document.querySelectorAll('[data-goto]').forEach((btn) => {
    btn.addEventListener('click', () => showView(btn.dataset.goto));
  });

  $('searchInput').addEventListener('input', renderTables);
  $('filterPlan').addEventListener('change', renderTables);
  $('filterStatus').addEventListener('change', renderTables);
  $('langToggle').addEventListener('click', () => applyLanguage(currentLang === 'es' ? 'en' : 'es'));

  document.querySelectorAll('.js-open-modal').forEach((btn) => {
    btn.addEventListener('click', () => openOverlay($('memberModal')));
  });
  $('closeModal').addEventListener('click', () => closeOverlay($('memberModal')));
  $('closeDetailModal').addEventListener('click', () => closeOverlay($('viewMemberModal')));
  $('closeDetailBtn').addEventListener('click', () => closeOverlay($('viewMemberModal')));

  [$('memberModal'), $('viewMemberModal')].forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeOverlay(modal);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeOverlay($('memberModal'));
      closeOverlay($('viewMemberModal'));
    }
  });

  $('memberForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('memberName').value.trim();
    if (!name) return;
    members.unshift({
      id: `#BF-${Math.floor(100 + Math.random() * 900)}`,
      name,
      plan: $('memberPlan').value,
      status: $('memberStatus').value,
      date: todayISO(),
    });
    e.target.reset();
    closeOverlay($('memberModal'));
    renderAll();
  });

  document.querySelector('.dashboard-view').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-view-id]');
    if (btn) showMemberDetail(btn.dataset.viewId);
  });

  $('settingsForm').addEventListener('submit', (e) => {
    e.preventDefault();
    saveSettings({
      gymName: $('settingGymName').value.trim() || DEFAULT_SETTINGS.gymName,
      maxCapacity: Math.max(10, Number($('settingCapacity').value) || DEFAULT_SETTINGS.maxCapacity),
      copPerUsd: Math.max(1000, Number($('settingRate').value) || DEFAULT_SETTINGS.copPerUsd),
    });
    $('settingsSaved').classList.remove('hidden');
    setTimeout(() => $('settingsSaved').classList.add('hidden'), 2000);
  });

  $('resetSettingsBtn').addEventListener('click', () => {
    localStorage.removeItem(SETTINGS_KEY);
    settings = { ...DEFAULT_SETTINGS };
    fillSettingsForm();
    renderBrand();
    renderAll();
  });
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  fillSettingsForm();
  applyLanguage(currentLang);
  showView('home');
});
