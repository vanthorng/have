import { createRouter, createWebHistory } from "vue-router";
import PersonalDemo from './components/PersonalDemo.vue';
    import SeatDemo from './components/SeatDemo.vue';
    import PaymentDemo from './components/PaymentDemo.vue';
    import ConfirmationDemo from './components/ConfirmationDemo.vue';
    
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "/",
        component: PersonalDemo
    },{
        path: "/seat",
        component: SeatDemo
    },{
        path: "/payment",
        component: PaymentDemo
    },{
        path: "/confirmation",
        component: ConfirmationDemo
    }
    ]
});
