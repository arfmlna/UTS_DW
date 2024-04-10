const navlinkmobile = document.getElementById('nav-link-mobile')
const navbtn = document.getElementsByClassName('nav-btn')[0]
const aweseomeBar = document.getElementsByClassName('icon-bars')[0]
const audio = document.getElementById('audio')
const loading = document.getElementById('loading')
const btnMore = document.getElementById('btn-more')
const btnClose = document.getElementById('btn-close')
const dialog = document.getElementById('dialog')


setTimeout(() => {
    loading.style.display = 'none'
}, 5000)

navbtn.addEventListener('click', () => {
    const nlm = window.getComputedStyle(navlinkmobile).getPropertyValue('display')
    aweseomeBar.classList.replace('fa-bars', 'fa-xmark')
    navlinkmobile.style.display = 'block'
    if (nlm == 'block') {
        aweseomeBar.classList.replace('fa-xmark', 'fa-bars')
        navlinkmobile.style.display = 'none'
    }
})

btnMore.addEventListener('click', () => {
    dialog.show()
})

btnClose.addEventListener('click', () => {
    dialog.close()
})

function typewriter(selector, texts, speed, loop) {
    new TypeIt(selector, {
        strings: texts,
        speed: speed,
        loop: loop,
    }).go();
}

typewriter(".load", "Loading...", 100, true)

typewriter(".typewriter", "Hi nama saya Arif Maulana saya adalah seorang mahasiswa dari Universitas Muhammadiyah Tasikmalaya. Saya berada dalam naungan Fakultas Keguruan dan Ilmu Pendidikan(FKIP) dan juga jurusan prodi saya adalah Pendidikan Teknologi Informasi(PTI) yang targetnya untuk menjadi guru dalam bidang teknologi informasi di sekolah.", 75, true)

