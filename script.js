document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        let percent = bar.style.width; 
        bar.style.width = "0%"; 

        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out"; 
            bar.style.width = percent; 
        }, 200); 
    });
});


    setTimeout(() => {
        document.querySelectorAll("section").forEach(sec => sec.style.opacity = "1");
    }, 500);
    function enviarCorreo() {
        let email = "dcatalana4@miumg.edu.gt";
        let asunto = "Consulta sobre tu servicio";
        let cuerpo = "Hola, me gustaría obtener más información sobre:  ";

        let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        window.location.href = mailtoLink;
    }
    