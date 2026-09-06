// 1. Seleccionar los elementos del DOM que vamos a escuchar y manipular
const searchInput = document.getElementById('searchInput');
const tableRows = document.querySelectorAll('#membersTable tr');

// 2. Agregar un evento al campo de texto que detecte cada vez que el usuario escribe
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase(); // Convertir texto a minúsculas para ignorar mayúsculas

  // 3. Recorrer cada fila de la tabla para verificar si coincide con la búsqueda
  tableRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();

    // 4. Si el texto de la fila incluye lo que buscamos, se muestra; si no, se oculta
    if (rowText.includes(searchTerm)) {
      row.style.display = ''; // Muestra la fila
    } else {
      row.style.display = 'none'; // Oculta la fila
    }
  });
});

// ==========================================
// LÓGICA DEL MODAL DE REGISTRO
// ==========================================

// 1. Seleccionar los elementos del modal en el DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModal');
const memberModal = document.getElementById('memberModal');
const memberForm = document.getElementById('memberForm');
const membersTable = document.getElementById('membersTable');

// 2. Abrir el modal al hacer clic en "+ Nuevo Miembro"
openModalBtn.addEventListener('click', () => {
  memberModal.classList.add('active');
});

// 3. Cerrar el modal al hacer clic en la "X"
closeModalBtn.addEventListener('click', () => {
  memberModal.classList.remove('active');
});

// 4. Capturar el envío del formulario y agregar el miembro a la tabla
memberForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // Leer los valores ingresados por el usuario
  const name = document.getElementById('memberName').value;
  const plan = document.getElementById('memberPlan').value;
  const status = document.getElementById('memberStatus').value;

  // Generar un ID aleatorio sencillo
  const randomId = `#BF-${Math.floor(100 + Math.random() * 900)}`;

  // Determinar la etiqueta (badge) según el estado seleccionado
  let badgeClass = 'active';
  let statusText = 'Activo';

  if (status === 'pending') {
    badgeClass = 'pending';
    statusText = 'Por Vencer';
  } else if (status === 'inactive') {
    badgeClass = 'inactive';
    statusText = 'Inactivo';
  }

  // Obtener la fecha de hoy formateada (DD/MM/AAAA)
  const today = new Date().toLocaleDateString('es-CO');

  // Crear la nueva fila HTML
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${randomId}</td>
    <td>${name}</td>
    <td>${plan}</td>
    <td><span class="badge ${badgeClass}">${statusText}</span></td>
    <td>${today}</td>
    <td><button class="btn-action">Ver</button></td>
  `;

  // Insertar la nueva fila al inicio de la tabla
  membersTable.prepend(newRow);

  // Limpiar el formulario y cerrar el modal
  memberForm.reset();
  memberModal.classList.remove('active');

    // Actualizar las métricas después de agregar un nuevo miembro
    updateMetrics();
});

// ==========================================
// ACTUALIZACIÓN DE MÉTRICAS DINÁMICAS
// ==========================================

function updateMetrics() {
  // 1. Contar miembros por estado
  const activeCount = document.querySelectorAll('#membersTable .badge.active').length;
  const pendingCount = document.querySelectorAll('#membersTable .badge.pending').length;

  // 2. Definir lista de precios por plan
  const planPrices = {
    'Plan Básico': 80000,
    'Plan Intermedio': 110000,
    'Plan VIP': 150000
  };

  // 3. Sumar ingresos de todas las filas en la tabla
  let totalIncome = 0;
  const rows = document.querySelectorAll('#membersTable tr');

  rows.forEach(row => {
    // Leemos el texto de las celdas de Plan y Estado en cada fila
    const planText = row.children[2]?.textContent.trim();
    const statusText = row.children[3]?.textContent.trim();

    // Solo sumamos si el usuario está Activo o Por Vencer
    if (statusText === 'Activo' || statusText === 'Por Vencer') {
      if (planPrices[planText]) {
        totalIncome += planPrices[planText];
      }
    }
  });

  // 4. Capturar elementos en el HTML
  const activeCard = document.getElementById('activeMembersCard');
  const pendingCard = document.getElementById('pendingMembersCard');
  const incomeCard = document.getElementById('monthlyIncomeCard');

  // 5. Inyectar datos formateados en la pantalla
  if (activeCard) activeCard.textContent = activeCount;
  if (pendingCard) pendingCard.textContent = pendingCount;
  if (incomeCard) {
    // Formatear el número a moneda colombiana (Ej: $ 340.000 COP)
    incomeCard.textContent = `$ ${totalIncome.toLocaleString('es-CO')} COP`;

  // 6. CÁLCULO DE AFORO ACTUAL
  const maxCapacity = 80; // Capacidad máxima del gimnasio
  
  // Por ahora, usamos el total de miembros activos como personas dentro del gimnasio
  const currentPeople = activeCount + pendingCount;
  const percentage = Math.round((currentPeople / maxCapacity) * 100);

  const capacityCard = document.getElementById('capacityCard');
  const capacityPercentage = document.getElementById('capacityPercentage');

  if (capacityCard) capacityCard.textContent = `${currentPeople} / ${maxCapacity}`;
  if (capacityPercentage) capacityPercentage.textContent = `${percentage}% de capacidad`;  
  }
}

// ==========================================
// ACCIÓN DEL BOTÓN "VER" (DELEGACIÓN DE EVENTOS)
// ==========================================

if (membersTable) {
  membersTable.addEventListener('click', (e) => {
    // Verificar si el elemento cliqueado tiene la clase del botón
    if (e.target.classList.contains('btn-action')) {
      // Obtener la fila <tr> correspondiente al botón presionado
      const row = e.target.closest('tr');

      // Extraer los datos de las celdas (td)
      const id = row.children[0].textContent;
      const name = row.children[1].textContent;
      const plan = row.children[2].textContent;
      const status = row.children[3].textContent;
      const lastPayment = row.children[4].textContent;

      // Mostrar los datos capturados (puedes reemplazar esto por un modal)
      alert(`Detalles del Miembro:\n\nID: ${id}\nNombre: ${name}\nPlan: ${plan}\nEstado: ${status}\nÚltimo Pago: ${lastPayment}`);
    }
  });
}

// AGREGA ESTA LÍNEA AQUÍ:

  document.addEventListener('DOMContentLoaded', () => {
    updateMetrics();
    });