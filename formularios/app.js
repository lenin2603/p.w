console.log('funcionando');

const formulario = document.querySelector('#formulario');
const btnembiar = document.querySelector('#btnembiar');
const btnEmbiar = document.querySelector('#btnEnbiar');
const toast = document.querySelector('.toast');

formulario.addEventListener('submit', (e) => {
    //console.log('me diste click');
    e.preventDefault();

    const datos = new FormData(formulario);

    console.log('email', datos.get('email'));
    console.log('contraseña', datos.get('email'));
    console.log('checkbox', datos.get('checkbox'));

    btnembiar.classList.add('d-none');
    btnEmbiar.classList.remove('d-none');

    window.setTimeout(() => {
        btnembiar.classList.remove('d-none');
        btnEmbiar.classList.add('d-none');

        const eventoToast = new bootstrap.Toast(toast);
        eventoToast.show();
    }), 3000

    formulario.reset();
});