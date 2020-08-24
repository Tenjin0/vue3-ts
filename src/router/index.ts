
import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Users from "../views/Users.vue";

const history = createWebHistory();

const router = createRouter({
    history,
    routes : [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/users",
            name: "Users",
            component: Users
        },
        {
            path: "/user:id",
            name: "User",
            component: About
        },
    
    ]
});

export default router;
