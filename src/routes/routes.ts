import {lazy,LazyExoticComponent} from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    view: boolean;
}

const Home = lazy(() => import('../pages/Home'));
const Dentist = lazy(() => import('../pages/Dentist'));
const Favs = lazy(() => import('../pages/Favs'));
const ContactUs = lazy(() => import('../pages/ContactUs'));

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        Component: Home,
        name: 'Home',
        view: true
    },
    {
        to: '/dentist/:id',
        path: 'dentist/:id',
        Component: Dentist,
        name: 'Dentist',
        view: false
    },
    {
        to: '/fav',
        path: 'fav',
        Component: Favs,
        name: 'Favorite',
        view: true
    },
    {
        to: '/contact',
        path: 'contact',
        Component: ContactUs,
        name: 'Contact Us',
        view: true
    },
]