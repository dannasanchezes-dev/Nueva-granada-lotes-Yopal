const pasos = document.querySelectorAll(".paso");
const btnSiguiente = document.getElementById("siguiente");
const btnAnterior = document.getElementById("anterior");
const barra = document.getElementById("progreso");
const numeroPaso = document.getElementById("numeroPaso");

let pasoActual = 0;

mostrarPaso();

function mostrarPaso() {

    pasos.forEach((paso) => {
        paso.classList.remove("activo");
    });

    pasos[pasoActual].classList.add("activo");

    numeroPaso.textContent = pasoActual + 1;

    let porcentaje = ((pasoActual + 1) / pasos.length) * 100;
    barra.style.width = porcentaje + "%";

    if (pasoActual === 0) {
        btnAnterior.style.visibility = "hidden";
    } else {
        btnAnterior.style.visibility = "visible";
    }

    if (pasoActual === pasos.length - 1) {
        btnSiguiente.textContent = "Finalizar";
    } else {
        btnSiguiente.innerHTML = 'Siguiente <i class="fa-solid fa-arrow-right"></i>';
    }
}

btnSiguiente.addEventListener("click", function () {

    if (pasoActual < pasos.length - 1) {
        pasoActual++;
        mostrarPaso();

    } else {

        alert("¡Gracias por responder la encuesta! Muy pronto un asesor se comunicará contigo.");
        document.getElementById("formulario").reset();
        pasoActual = 0;
        mostrarPaso();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

btnAnterior.addEventListener("click", function () {

    if (pasoActual > 0) {
        pasoActual--;
        mostrarPaso();
    }

});