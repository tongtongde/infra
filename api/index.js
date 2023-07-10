const axios = require("axios");

// 拦截全局请求响应
axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板
 * @returns Promise 仓库信息
 */
async function getZhuRongRepo() {
  return axios.get("https://api.github.com/orgs/tongtongde/repos");
}


module.exports = {
  getZhuRongRepo,
};
