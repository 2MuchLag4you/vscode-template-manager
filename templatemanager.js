const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const PROFILE_ENV = "%USERPROFILE%";
const USERNAME_ENV = "%USERNAME%";
const ONEDRIVE_ENV = "%ONEDRIVE%";
const ONEDRIVECONSUMER_ENV = "%ONEDRIVECONSUMER%";
const COMPUTERNAME_ENV = "%COMPUTERNAME%";
const HOMEPATH_ENV = "%HOMEPATH%";

if (process.platform === "win32") {
	let config = vscode.workspace.getConfiguration("templates");
	var templatesDir = config.TemplateDirectory;
	templatesDir = templatesDir.replace(PROFILE_ENV, process.env.USERPROFILE);
	templatesDir = templatesDir.replace(USERNAME_ENV, process.env.USERNAME);
	templatesDir = templatesDir.replace(ONEDRIVE_ENV, process.env.ONEDRIVE);
	templatesDir = templatesDir.replace(
		ONEDRIVECONSUMER_ENV,
		process.env.ONEDRIVECONSUMER
	);
	templatesDir = templatesDir.replace(
		COMPUTERNAME_ENV,
		process.env.COMPUTERNAME
	);
	templatesDir = templatesDir.replace(HOMEPATH_ENV, process.env.HOMEPATH);
} else {
	templatesDir = templatesDir.replace(PROFILE_ENV, process.env.HOME);
	templatesDir = templatesDir.replace(USERNAME_ENV, process.env.USER);
	templatesDir = templatesDir.replace(USERNAME_ENV, process.env.HOME);
	var templatesDir = path.join(__dirname, "templates");
}

// vscode.window.showInformationMessage(templatesDir);
const workspaceTemplatesDir = vscode.workspace.rootPath
	? path.join(vscode.workspace.rootPath, ".vscode", "templates")
	: "";

function createTemplatesDirIfNotExists() {
	return new Promise((resolve, reject) => {
		fs.stat(templatesDir, (err, stats) => {
			if (err || !stats.isDirectory())
				fs.mkdir(templatesDir, () => {
					resolve();
				});
			else resolve();
		});
	});
}

class TemplateManager {
	getTemplates() {
		return new Promise((resolve, reject) => {
			createTemplatesDirIfNotExists().then(() => {
				fs.readdir(templatesDir, (err, files) => {
					if (err) {
						reject(err);
						return;
					}

					let templates = {};
					files.forEach((file) => {
						let baseName = file.substring(0, file.lastIndexOf("."));
						if (baseName) templates[baseName] = path.join(templatesDir, file);
					});

					if (workspaceTemplatesDir) {
						fs.readdir(workspaceTemplatesDir, (err, files) => {
							if (!err) {
								files.forEach((file) => {
									let baseName = file.substring(0, file.lastIndexOf("."));
									if (baseName)
										templates[baseName] = path.join(
											workspaceTemplatesDir,
											file
										);
								});
							}

							resolve(templates);
						});
					}
				});
			});
		});
	}

	getTemplatePath(templateName) {
		return path.join(templatesDir, templateName);
	}

	getTemplateURI(templatePath) {
		return vscode.Uri.parse("file:///" + templatePath);
	}
}

module.exports = new TemplateManager();
