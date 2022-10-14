import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'nprogress/nprogress.css';
createApp(App).use(store).use(router).mount('#app');

/*  -- theme switching --  */

const toggleSwitch = document.getElementById('themeSwitch');
const currentTheme = localStorage.getItem('theme');

// This code assumes a Light Mode default
if (
    /* This condition checks whether the user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference */
    currentTheme === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches && !currentTheme)
) {
    // if true, set the site to Dark Mode
    document.documentElement.setAttribute('data-theme', 'dark');
}

toggleSwitch.addEventListener('click', function () {
    let current = document.documentElement.getAttribute('data-theme');
    if (current === '' || current === null) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', '');
        localStorage.setItem('theme', '');
    }
});
