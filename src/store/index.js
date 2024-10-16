import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
	state: {
		link_output: null,
		error: null,
		isFetching: false
	},
	mutations: {
		SET_LINK_OUTPUT(state, link) {
			state.link_output = link;
		},
		SET_ERROR(state, error) {
			state.error = error;
		},
		SET_FETCHING(state, isFetching) {
			state.isFetching = isFetching;
		}
	},
	actions: {
		async fetchLink_output({ commit, state }) {
			if (!state.link_output && !state.isFetching) {
				// 防止重复调用
				commit('SET_FETCHING', true);  // 设置正在获取数据的状态
				try {
					const response = await axios.get(
						'https://seo.mobileapplab.online/api/winbox?fields[0]=winboxv2_com',
						{
							headers: {
								Authorization: 'Bearer e2e085a70abb572e2ad3118cf0c3749024fc7342f873874a3cfc95f6520e4f561a3656113097ce0fea85186a91a42c56799bd153626b51f36c83bcf5c02e9996cc56106cb88a85ea4c4d58b4e1713dcc2c5006c666d09110e741081c80562cc29b6490fa8125037afdf61b783ebfd01e41152c0f61803009ad98eded56aa6568'
							}
						}
					);
					commit('SET_LINK_OUTPUT', response.data.data.attributes.winboxv2_com);
				} catch (error) {
					console.error(error);
				} finally {
					commit('SET_FETCHING', false);  // 恢复状态
				}
			}
		}
	},
	getters: {
		link_output: state => state.link_output,
		error: state => state.error
	}
});

export default store;