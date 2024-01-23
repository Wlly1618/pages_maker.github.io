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

/**
 * Dropdown Functions
 */
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

/**
 * Range Functions 
 */
function color_control_range(context)
{
  var output = document.getElementById(`span-${context}`)

  var r = document.getElementById(`range-${context}-red`)
  var g = document.getElementById(`range-${context}-green`)
  var b = document.getElementById(`range-${context}-blue`)
  
  r.addEventListener("input", (f) => {
    changeColor(r.value,g.value,b.value, output)
  });
  b.addEventListener("input", (f) => {
    changeColor(r.value,g.value,b.value, output)
  });
  g.addEventListener("input", (f) => {
    changeColor(r.value,g.value,b.value, output)
  });
}

function changeColor(r, g, b, context) {
  context.style.color = `rgb(${r},${g},${b})`;
}

function bc_color_control_range(context)
{
  var output = document.getElementById(`span-${context}`)

  var r = document.getElementById(`range-bg-${context}-red`)
  var g = document.getElementById(`range-bg-${context}-green`)
  var b = document.getElementById(`range-bg-${context}-blue`)
  
  r.addEventListener("input", (f) => {
    change_bg_Color(r.value,g.value,b.value, output)
  });
  b.addEventListener("input", (f) => {
    change_bg_Color(r.value,g.value,b.value, output)
  });
  g.addEventListener("input", (f) => {
    change_bg_Color(r.value,g.value,b.value, output)
  });
}

function change_bg_Color(r, g, b, context) {
  context.style.backgroundColor = `rgb(${r},${g},${b})`;
}

/**
 * Input Functions
 */
function load_output(context)
{
  document.addEventListener("DOMContentLoaded", function () {
    var inputElement = document.getElementById(context);
    var outputSpan = document.getElementById(`span-${context}`);
  
    inputElement.addEventListener("input", function () {
        outputSpan.textContent = inputElement.value;
    });
  });
}

/**
 * Font Functions
 */

function select_font(context)
{
  const fontSelector = document.getElementById(`fontSelector-${context}`);
  var output = document.getElementById(`span-${context}`);

  // Obtiene el valor seleccionado en el selector de fuentes
  const selectedFont = fontSelector.value;

  // Actualiza el estilo de la fuente en el span
  output.style.fontFamily = selectedFont;
}

/**
 * Title Calls
 */
load_output('title')
color_control_range('title')
bc_color_control_range('title')



