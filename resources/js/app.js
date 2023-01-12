import "./bootstrap";

import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";

import "admin-lte/dist/js/adminlte.min.js";

import Alpine from "alpinejs";
import { create } from "lodash";
import { createApp } from 'vue'
/* import { createApp } from "vue/dist/vue.esm-bundler.js"; */
import { createRouter , createWebHistory } from "vue-router";

import routes from "./routes";

window.Alpine = Alpine;

Alpine.start();

const app = createApp({

  });

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

app.use(router);
console.log('to aqui ' + app.mount('#app'))
app.mount('#app');






