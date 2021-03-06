import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/UserLayout'),
          LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
        exact: true,
      },
      {
        path: '/user/login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () => import('../User/Login'),
              LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Login').default,
        exact: true,
      },
      {
        path: '/user/register',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () => import('../User/Register'),
              LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Register').default,
        exact: true,
      },
      {
        path: '/user/register-result',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () => import('../User/RegisterResult'),
              LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                .default,
            })
          : require('../User/RegisterResult').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/BasicLayout'),
          LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        redirect: '/dashboard/analysis',
        exact: true,
      },
      {
        path: '/house',
        name: 'house',
        icon: 'home',
        routes: [
          {
            path: '/house/resource',
            name: 'resource',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/haoke/House/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../haoke/House/Resource'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/House/Resource').default,
            exact: true,
          },
          {
            path: '/house/addResource',
            name: 'addResource',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/haoke/House/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../haoke/House/AddResource'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/House/AddResource').default,
            exact: true,
          },
          {
            path: '/house/kanfang',
            name: 'kanfang',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/haoke/House/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../haoke/House/KanFang'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/House/KanFang').default,
            exact: true,
          },
          {
            path: '/house/zufang',
            name: 'zufang',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/haoke/House/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../haoke/House/ZuFang'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/House/ZuFang').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/fangdong',
        name: 'fangdong',
        icon: 'key',
        routes: [
          {
            path: '/fangdong/list',
            name: 'list',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../haoke/FangDong/List'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/FangDong/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/users',
        name: 'users',
        icon: 'user',
        routes: [
          {
            path: '/users/list',
            name: 'list',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../haoke/Users/List'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/Users/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/news',
        name: 'news',
        icon: 'message',
        routes: [
          {
            path: '/news/list',
            name: 'list',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../haoke/News/List'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/News/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/qa',
        name: 'qa',
        icon: 'question-circle',
        routes: [
          {
            path: '/news/list',
            name: 'list',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../haoke/News/List'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/News/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/system',
        name: 'system',
        icon: 'laptop',
        routes: [
          {
            path: '/system/interface',
            name: 'interface',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../haoke/System/Interface'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/System/Interface').default,
            exact: true,
          },
          {
            path: '/system/dict',
            name: 'dict',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../haoke/System/Dict'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/System/Dict').default,
            exact: true,
          },
          {
            path: '/system/contract',
            name: 'contract',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../haoke/System/Contract'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../haoke/System/Contract').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
        exact: true,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        hideChildrenInMenu: false,
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Dashboard/Analysis'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/Analysis').default,
            exact: true,
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Dashboard/Monitor'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/Monitor').default,
            exact: true,
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Dashboard/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Dashboard/Workplace'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/Workplace').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Forms/BasicForm'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/BasicForm').default,
            exact: true,
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Forms/StepForm'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/StepForm').default,
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                name: 'stepform',
                redirect: '/form/step-form/info',
                exact: true,
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () => import('../Forms/StepForm/Step1'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step1').default,
                exact: true,
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () => import('../Forms/StepForm/Step2'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step2').default,
                exact: true,
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () => import('../Forms/StepForm/Step3'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step3').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Forms/AdvancedForm'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/AdvancedForm').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../List/TableList'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/TableList').default,
            exact: true,
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../List/BasicList'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/BasicList').default,
            exact: true,
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../List/CardList'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/CardList').default,
            exact: true,
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../List/List'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/List').default,
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
                exact: true,
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/List/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () => import('../List/Articles'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../List/Articles').default,
                exact: true,
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/List/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () => import('../List/Projects'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../List/Projects').default,
                exact: true,
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/List/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () => import('../List/Applications'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../List/Applications').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          {
            path: '/profile/basic',
            name: 'basic',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Profile/models/profile.js').then(
                      m => {
                        return { namespace: 'profile', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Profile/BasicProfile'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Profile/BasicProfile').default,
            exact: true,
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Profile/models/profile.js').then(
                      m => {
                        return { namespace: 'profile', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Profile/AdvancedProfile'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Profile/AdvancedProfile').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          {
            path: '/result/success',
            name: 'success',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Result/Success'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Result/Success').default,
            exact: true,
          },
          {
            path: '/result/fail',
            name: 'fail',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Result/Error'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Result/Error').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          {
            path: '/exception/403',
            name: 'not-permission',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/403'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/403').default,
            exact: true,
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/404'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/404').default,
            exact: true,
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/500'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/500').default,
            exact: true,
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/TriggerException'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/TriggerException').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Account/Center/Center'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Center/Center').default,
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
                exact: true,
              },
              {
                path: '/account/center/articles',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () => import('../Account/Center/Articles'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Articles').default,
                exact: true,
              },
              {
                path: '/account/center/applications',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () => import('../Account/Center/Applications'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Applications').default,
                exact: true,
              },
              {
                path: '/account/center/projects',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () => import('../Account/Center/Projects'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Projects').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Account/Settings/models/geographic.js').then(
                      m => {
                        return { namespace: 'geographic', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Account/Settings/Info'),
                  LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Settings/Info').default,
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
                exact: true,
              },
              {
                path: '/account/settings/base',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () => import('../Account/Settings/BaseView'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/BaseView').default,
                exact: true,
              },
              {
                path: '/account/settings/security',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import('../Account/Settings/SecurityView'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/SecurityView').default,
                exact: true,
              },
              {
                path: '/account/settings/binding',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import('../Account/Settings/BindingView'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/BindingView').default,
                exact: true,
              },
              {
                path: '/account/settings/notification',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import('../Account/Settings/NotificationView'),
                      LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/NotificationView').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../404'),
              LoadingComponent: require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/sixinli/Desktop/SideProjects/HouseSearch-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva ??? history.listen ?????????????????????
    // ??????????????? dva ???????????????????????? onRouteChange ????????? dva ???????????????????????????????????????
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
