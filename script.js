document.addEventListener("DOMContentLoaded", function () {
    // Activar modo oscuro
    document.getElementById("modoOscuroBtn").addEventListener("click", function () {
        document.body.classList.toggle("modo-oscuro");
    });

    // Mostrar alerta al hacer clic en "Contactar"
    document.getElementById("contactarBtn").addEventListener("click", function () {
        alert("Gracias por tu interés. ¡Pronto me pondré en contacto contigo!");
    });

    // Mostrar detalles del proyecto al hacer clic en "Ver más"
    const verMasBtns = document.querySelectorAll(".ver-mas-btn");
    verMasBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const proyectoId = this.getAttribute("data-proyecto");
            const detallesDiv = document.getElementById(proyectoId);

            if (detallesDiv) {
                detallesDiv.style.display = detallesDiv.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Mostrar/Ocultar respuesta a preguntas frecuentes
    const preguntaBtns = document.querySelectorAll(".pregunta-btn");
    preguntaBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const respuestaDiv = this.nextElementSibling;
            if (respuestaDiv) {
                respuestaDiv.style.display = respuestaDiv.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Funcionalidad del Slider
    const sliderBtns = document.querySelectorAll(".slider-btn");
    sliderBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const proyectoId = this.getAttribute("data-proyecto");
            const sliderImages = this.parentNode.querySelector(".slider-images");
            const imageWidth = sliderImages.offsetWidth;
            const direction = this.classList.contains("prev") ? -1 : 1;

            sliderImages.style.transition = "transform 0.3s ease";
            sliderImages.style.transform = `translateX(${direction * imageWidth}px)`;

            setTimeout(() => {
                if (direction === 1) {
                    sliderImages.appendChild(sliderImages.firstElementChild);
                } else {
                    sliderImages.insertBefore(sliderImages.lastElementChild, sliderImages.firstElementChild);
                }
                sliderImages.style.transition = "none";
                sliderImages.style.transform = "translateX(0)";
            }, 300);
        });
    });

    // Estilos adicionales para modo oscuro
    const estiloModoOscuro = document.createElement("style");
    estiloModoOscuro.textContent = `
    .modo-oscuro {
      background-color: #121212 !important;
      color: white !important;
    }
    .modo-oscuro header,
    .modo-oscuro footer,
    .modo-oscuro .barra-de-navegacion {
      background-color: #222222 !important;
    }
    `;
    document.head.appendChild(estiloModoOscuro);
});
