const fs = require('fs');
const path = require('path');
const util = require('util');

const FINAL_JSON = path.join(__dirname,'..','src','data','project-info.json');
const DIR = path.join(__dirname,'..','src','raw_data','project-info'); 
const readdir = util.promisify(fs.readdir); 
const readFile = util.promisify(fs.readFile); 
const writeFile = util.promisify(fs.writeFile); 

async function storeData() {
	let data = {};
	return new Promise(async (resolve, reject) => {
		try {
			const filenames = await readdir(DIR);

			for (let name of filenames) {
				// very crude

				let contents = await readFile(path.join(DIR, name));
				data[name.split('.')[0]] = contents.toString().replace(/\r/gi,'');
			}
		} catch (e) {
			reject(e);
		}
		resolve(data);
	});
}

async function writeData(data) {
	// very crude

	await writeFile(FINAL_JSON, JSON.stringify(data)+'\n', err => {
		if (err) throw(err);
	});
}

storeData().then(data => writeData(data)).catch(e => console.log(e));
