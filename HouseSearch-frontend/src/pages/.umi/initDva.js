import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/models/global.js').default) });
app.model({ namespace: 'houseResource', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/models/houseResource.js').default) });
app.model({ namespace: 'list', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/User/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'profile', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('F:/code/itcast-haoke/itcast-haoke-manage-web/src/pages/Account/Settings/models/geographic.js').default) });
