const conf = document.getElementById('span-conf')
const view = document.getElementById('span-view')
const btn_title = document.getElementById('btn-title')
const btn_subtitle = document.getElementById('btn-subtitle')
const btn_text = document.getElementById('btn-text')
const btn_list = document.getElementById('btn-list')
const btn_link = document.getElementById('btn-link')
const btn_image = document.getElementById('btn-image')
const modal_alert_state = document.getElementById('modal-alert-state')

const span_title = document.createElement('span')
const span_subtitle = document.createElement('span')
const span_text = document.createElement('span')
const span_list = document.createElement('span')
const span_link = document.createElement('span')
const span_image = document.createElement('span')

const dropdown_title = document.getElementById("dropdown-title");
const dropdown_subtitle = document.getElementById("dropdown-subtitle");
const dropdown_list = document.getElementById("dropdown-list");
const dropdown_link = document.getElementById("dropdown-link");
const dropdown_image = document.getElementById("dropdown-image");
const dropdown_text = document.getElementById("dropdown-text");


var dropdownStates = {
  title: false,
  subtitle: false,
  text: false,
  list: false,
  link: false,
  image: false
};

var currentDropdown = null;

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(`dropdown-${dropdownId}`);
  var modal = document.getElementById("confirmation-modal");

  if (currentDropdown === dropdown) {
      // Si el mismo desplegable está abierto, ciérralo
      dropdown.style.display = "none";
      currentDropdown = null;
  } else if (currentDropdown) {
      // Si otro desplegable está abierto, muestra el modal de confirmación
      modal.style.display = "block";
  } else {
      // Si no hay desplegables abiertos, abre el actual
      dropdown.style.display = "block";
      currentDropdown = dropdown;
  }
}

function confirmAction() {
  var modal = document.getElementById("confirmation-modal");
  modal.style.display = "none";
  // Restablece el estado del desplegable anterior
  if (currentDropdown) {
      dropdownStates[currentDropdown.id.replace("dropdown-", "")] = false;
  }
  // Abre el desplegable actual
  toggleDropdown(currentDropdown.id.replace("dropdown-", ""));
  dropdownStates[currentDropdown.id.replace("dropdown-", "")] = true;
}

function cancelAction() {
  var modal = document.getElementById("confirmation-modal");
  modal.style.display = "none";
  // Puedes realizar otras acciones de cancelación aquí si es necesario
}
