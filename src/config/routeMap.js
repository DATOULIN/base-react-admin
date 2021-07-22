import Loadable from 'react-loadable';
import Loading from '../components/Loading/index'

const Dashboard = Loadable({
    loader: () => import(/*webpackChunkName:'Dashboard'*/'../views/dashboard'),
    loading: Loading
});
const Document = Loadable({
    loader: () => import(/*webpackChunkName:'Document'*/'../views/document'),
    loading: Loading
})

export default [
    {path: "/dashboard", component: Dashboard, roles: ["admin", "editor", "guest"]},
    {path: "/doc", component: Document, roles: ["admin", "editor", "guest"]},
];
