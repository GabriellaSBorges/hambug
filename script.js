const morte_lenta = document.getElementById('morte_lenta');
const morte_rapida = document.getElementById('morte_rapida');
const morte_subita = document.getElementById('morte_subita');

const lenta_description = document.getElementById('morte_lenta_desc');
const subita_description = document.getElementById('morte_subita_desc');
const rapida_description = document.getElementById('morte_rapida_desc');

const content = document.getElementById('elements_blur');

let changesApplied = false;

morte_subita.addEventListener('click', function(event) {
    if (!changesApplied) {
        content.classList.add('blur');
        morte_rapida.classList.add('blur');
        morte_lenta.classList.add('blur');
        morte_subita.classList.add('blur');

        subita_description.style.display = 'flex';
        lenta_description.style.display = 'none';
        rapida_description.style.display = 'none';

        window.scrollTo(0, 0);
        changesApplied = true;
    }
    
    event.stopPropagation();
});

morte_lenta.addEventListener('click', function(event) {
    if (!changesApplied) {
        content.classList.add('blur');
        morte_rapida.classList.add('blur');
        morte_subita.classList.add('blur');
        morte_lenta.classList.add('blur');

        lenta_description.style.display = 'flex';
        subita_description.style.display = 'none';
        rapida_description.style.display = 'none';

        window.scrollTo(0, 0);
        changesApplied = true;
    }
    
    event.stopPropagation();
});

morte_rapida.addEventListener('click', function(event) {
    if (!changesApplied) {
        content.classList.add('blur');
        morte_rapida.classList.add('blur');
        morte_lenta.classList.add('blur');
        morte_subita.classList.add('blur');

        rapida_description.style.display = 'flex';
        subita_description.style.display = 'none';
        lenta_description.style.display = 'none';

        window.scrollTo(0, 0);
        changesApplied = true;
    }
    
    event.stopPropagation();
});

document.addEventListener('click', function() {
    if (changesApplied) {
        content.classList.remove('blur');
        morte_rapida.classList.remove('blur');
        morte_subita.classList.remove('blur');
        morte_lenta.classList.remove('blur');

        lenta_description.style.display = 'none';
        subita_description.style.display = 'none';
        rapida_description.style.display = 'none';
        changesApplied = false;
    }
});

