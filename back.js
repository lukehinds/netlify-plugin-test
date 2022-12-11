// import fetch from 'node-fetch';
// import fs from 'fs';

// export const onPostBuild = async function ({
//   utils: {
//     build: { failBuild },
//   },
// }) {
//   try {
//     const response = await fetch('https://api.netlify.com/api/v1/sites');
//     const json = await response.json();
//     console.log(json);
//     // write json to a file called sites.json
//     const sites = JSON.stringify(json);
//     fs.writeFile('sites.json', sites, (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');
//     });
//   } catch (error) {
//     failBuild('Error message', { error });
//   }
// };