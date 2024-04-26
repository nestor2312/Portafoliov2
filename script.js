const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
let inicio = document.getElementById('inicio');
let closeBtn = document.querySelector('#close');
let Sobre_mi = document.getElementById('Sobre_mi');
let Skills = document.getElementById('Skills');
let Formación = document.getElementById('Formación');
let Proyectos = document.getElementById('Proyectos');

let skillsBox = document.querySelectorAll('.skills__box');

if (skillsBox.length > 7) {
  
    let SkillsBox7 = skillsBox[6];
    let imgResponsive7 = SkillsBox7.querySelector('#responsive');

    // octavo elemento 
    let SkillsBox8 = skillsBox[7];
    let imgUX8 = SkillsBox8.querySelector('#ux');

    // eventos septimo elemento
    SkillsBox7.addEventListener('mouseenter', () => {
        if (imgResponsive7) imgResponsive7.setAttribute("src", "./assets/responsiveColor.svg");
    });
    SkillsBox7.addEventListener('mouseleave', () => {
        if (imgResponsive7) imgResponsive7.setAttribute("src", "./assets/responsive.svg");
    });

    // Eventos octavo elemento
    SkillsBox8.addEventListener('mouseenter', () => {
        if (imgUX8) imgUX8.setAttribute("src", "./assets/uxColor.svg");
      
    });
    SkillsBox8.addEventListener('mouseleave', () => {
        if (imgUX8) imgUX8.setAttribute("src", "./assets/ux.svg");
    });

} else {
    console.log("No hay suficientes elementos");
}

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Sobre_mi.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Skills.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Formación.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Proyectos.addEventListener('click', () => {
    nav.classList.remove('visible');
});
inicio.addEventListener('click', () => {
    nav.classList.remove('visible');
});