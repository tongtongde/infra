// const {getZhuRongRepo} = require('../api');
// const inquirer = require('inquirer');
const download = require("download-git-repo")
let name, target;
// const getTemplate = async  ()=>{
//   // 获取模板信息及用户最终选择的模板
//     // 获取组织下的仓库信息
//     let repoList = await getZhuRongRepo();
//     // 提取仓库名
//     const repos = repoList.map((item) => item.name);
//     // 选取模板信息
//     let { repo } = await new inquirer.prompt([
//       {
//         name: "repo",
//         type: "list",
//         message: "Please choose a template",
//         choices: repos,
//       },
//     ]);
//     console.log(repo)
//     return repo;
// }
const create=()=> {
  console.log(name, target);
  // getTemplate();

  download('github:tongtongde/react-template',target,(error)=>{
    console.log(error)
  })

}

module.exports = (name1, target1)=>{
  name = name1;
  target = target1;
  create();
};

