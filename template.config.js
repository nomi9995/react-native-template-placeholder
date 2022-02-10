module.exports = {
  // Directory with template
  templateDir: "./template",

  placeholders: {
    hermes_flag:true,

    slug:"my_project_name",
    
    // Placeholder name that will be replaced in package.json, index.json, android/, ios/ for a project name.
    name: 'MyProjectName',

    // title that will be replaced in values.xml and Info.plist with title provided by the user.
    // We default this value to 'Hello App Display Name', which is default placeholder in react-native template.
    title: 'Hello App Display Name'
  },
  // Path to script, which will be executed after init
  postInitScript: "./script.js"
};
