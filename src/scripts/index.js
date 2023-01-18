import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import dataJSON from '../DATA.json';
console.log('Hello Coders! :)');

// function show/hide menu
const btnCloseMenu = document.getElementById('btn_close_menu');
const btnOpenMenu = document.getElementById('btn_open_menu');
const menu = document.getElementById('menu');

function hideMenu(){
    /** hapus class show di elemen menu */
    menu.classList.remove('show');

    /** hapus elemen backdrop */
    document.getElementById('back_drop').remove();
}

function showMenu(){
    /** tambahkan class show di elemen menu */
    menu.classList.add('show');

    /** tambahkan elemen backdrop di dalam body tag */
    var backDropEl = document.createElement("div");
    backDropEl.setAttribute("id", "back_drop");
    document.querySelector('body').prepend(backDropEl);

    /** tutup menu ketika backdrop di klik */
    backDropEl?.addEventListener('click', () => {
        hideMenu()
    })
}

btnCloseMenu.addEventListener('click', () => {
    hideMenu()
})

btnOpenMenu.addEventListener('click', () => {
    showMenu()
})


// function show json data
if(dataJSON){
    let content = ``;
    dataJSON.restaurants.forEach(data => {
        content += `
        <article class="card-restaurant">
            <a href="/" class="card-hidden-link-restaurant"></a>
            <div class="card-header-restaurant">
                <span class="card-label-restaurant">Kota ${data.city}</span>
                <img src="${data.pictureId}" alt="${data.name}" class="card-img-restaurant">
            </div>
            <div class="card-body-restaurant">
                <div class="card-rating-restaurant">
                    <svg width="14" height="14" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9185 12.32C15.6595 12.571 15.5405 12.934 15.5995 13.29L16.4885 18.21C16.5635 18.627 16.3875 19.049 16.0385 19.29C15.6965 19.54 15.2415 19.57 14.8685 19.37L10.4395 17.06C10.2855 16.978 10.1145 16.934 9.93949 16.929H9.66849C9.57449 16.943 9.48249 16.973 9.39849 17.019L4.96849 19.34C4.74949 19.45 4.50149 19.489 4.25849 19.45C3.66649 19.338 3.27149 18.774 3.36849 18.179L4.25849 13.259C4.31749 12.9 4.19849 12.535 3.93949 12.28L0.328494 8.78C0.0264944 8.487 -0.0785057 8.047 0.0594943 7.65C0.193494 7.254 0.535494 6.965 0.948494 6.9L5.91849 6.179C6.29649 6.14 6.62849 5.91 6.79849 5.57L8.98849 1.08C9.04049 0.98 9.10749 0.888 9.18849 0.81L9.27849 0.74C9.32549 0.688 9.37949 0.645 9.43949 0.61L9.54849 0.57L9.71849 0.5H10.1395C10.5155 0.539 10.8465 0.764 11.0195 1.1L13.2385 5.57C13.3985 5.897 13.7095 6.124 14.0685 6.179L19.0385 6.9C19.4585 6.96 19.8095 7.25 19.9485 7.65C20.0795 8.051 19.9665 8.491 19.6585 8.78L15.9185 12.32Z" fill="#FF7400"/>
                    </svg> ${data.rating}
                </div>
                <h3 class="card-title-restaurant">${data.name}</h3>
                <p class="card-desc-restaurant">${data.description}</p>
            </div>
        </article>
        `
    });

    document.getElementById('list_restaurant').innerHTML = content;
}