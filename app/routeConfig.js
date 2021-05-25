import NotFound from '@containers/NotFoundPage/Loadable';
import HomeContainer from '@containers/HomeContainer/Loadable';
import VehicleCategories from '@containers/VehicleCategories/Loadable';
import routeConstants from '@utils/routeConstants';

export const routeConfig = {
  repos: {
    component: HomeContainer,
    ...routeConstants.repos
  },
  categories: {
    component: VehicleCategories,
    ...routeConstants.categories
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};
