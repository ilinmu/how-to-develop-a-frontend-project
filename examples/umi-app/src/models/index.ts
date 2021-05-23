import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
  count: number;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    add: Effect;
  };
  reducers: {
    addSuccess: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'index',

  state: {
    name: 'dva',
    count: 0,
  },

  effects: {
    *add({ payload }, { call, put }) {
      yield put({
        type: 'addSuccess',
        payload,
      });
    },
  },
  reducers: {
    addSuccess(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {},
  },
};

export default IndexModel;