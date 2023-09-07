import {lazy,LazyExoticComponent} from "react";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
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
        name: 'Home'
    },
    {
        to: '/dentist/:id',
        path: 'dentist/:id',
        Component: Dentist,
        name: 'Dentist'
    },
    {
        to: '/fav',
        path: 'fav',
        Component: Favs,
        name: 'Favs'
    },
    {
        to: '/contact',
        path: 'contact',
        Component: ContactUs,
        name: 'Contact Us'
    },
]