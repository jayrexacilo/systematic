import Today from './Today';
import Calendar from './Calendar';

const routes = [
  {
    path: "/today",
    name: "Today",
    icon: "fas fa-tasks text-success",
    component: Today,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "fas fa-calendar-alt text-orange",
    component: Calendar,
    layout: "/admin"
  }
];

export default routes;
