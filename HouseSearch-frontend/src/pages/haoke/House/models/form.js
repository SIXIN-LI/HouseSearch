import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { addHouseResources } from '@/services/haoke';

export default {
  namespace: 'house',

  state: {

  },

  effects: {
    *submitHouseForm({ payload }, { call }) {
      yield call(addHouseResources, payload);
      message.success('ζδΊ€ζε');
    }
  },

  reducers: {
    saveStepFormData(state, { payload }) {
      return {
        ...state
      };
    },
  },
};
