import React from 'react';
import Home from './components/Home';
import Category from './components/CategoryPage';
import Detail from './components/Detail'
const routes = [
  {
    to: '/',
    exact: true,
    main: ({history}) => <Home history={history}/>
  },
  {
    to: '/:media_type/:id',
    exact: false,
    main: ({match}) => <Detail match={match}/>
  },
  {
    to: '/movie',
    exact: false,
    main: () => <Category />
  },
 
  {
    to: '/tv',
    exact: false,
    main: () => <Category />
  },
  
]
export default routes;