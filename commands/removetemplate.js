const TM = require("../templatemanager");
const vscode = require("vscode");
const fs = require("fs");

function removeTemplate() {
	TM.getTemplates().then((templatesInfo) => {
		let select = vscode.window.showQuickPick(Object.keys(templatesInfo), {
			placeHolder: "Select a template to edit",
		});

		select.then((templateName) => {
			if (!templateName) {
				vscode.window.showInformationMessage("No template selected");
				return;
			} else {
				console.info(templatesInfo[templateName]);
				const confirmedDeletion = vscode.window.showQuickPick(["Yes", "No"], {
					canPickMany: false,
					placeHolder: "Confirm",
				});
				confirmedDeletion.then((option) => {
					if (!option) {
						console.info("Template deletion canceled by user");
						return;
					}

					if (option == "Yes") {
						fs.unlinkSync(templatesInfo[templateName]);
						vscode.window.showInformationMessage(
							`Template "${templateName}" deleted`
						);
					} else {
						vscode.window.showInformationMessage(
							"Template deletion canceled by user"
						);
					}
					console.info(option);
				});
			}
		});
	});
}

module.exports = removeTemplate;
