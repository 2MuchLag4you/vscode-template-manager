# Templates for VSCode

This extension helps in creating files easily from defined templates.
<br/>

## Original Source

This extension is an altered version of the vscode-file-templates from Venkatesh Boddu (Extension id: `bam.vscode-file-templates`)

## Features

* Create new files from pre-defined templates.
* Create new File Templates either from a file or a blank template.
* Edit Templates.
* Add Author Name, File Name and Date of creation to the file. 
* For Students there is also the possibility to add a Student Number to the file.
* Change the default Template directory.

<br/>

Choose commands from Command Palette:</br>
![Command Palette](https://github.com/2MuchLag4you/vscode-template-manager/raw/master/images/Command-Pallete.png)

Create a new File from Template:</br>
![New File](https://github.com/2MuchLag4you/vscode-template-manager/raw/master/images/Create-New-File.png)
<br/>

## Usage

* Right-click on the VSCode Explorer where you want to create a new file, you will see an option 'Create New File from template'.
  Selecting this option shows a menu with existing templates. Select the desired template and enter the new file name. New file 
  will be created in the selected folder.

* You can also create a new File from template by Right-click on the editor. On Right-click in the editor, you will all also see 
  'Create Template from file' option. Select this option to create a new Template from the current active document.

* You can also do all these the other way by selecting the appropriate command from Command Palette. From Command Palette, select 
    'Files: New File from template'   -   to create a new file from template
    'Files: New File Template'        -   to create a new blank file template.
    'Files: New Template from file'   -   to create a new template from the current active file.
    'Files: Edit File Template'       -   to edit any existing template.
    'Files: Remove a File Template'   -   to remove a file template.

## Template Variables
* Configurable:
  * `${Author}` Add the author name to the file.
  * `${StudentNR}` Add a Student identifier to the file.
* Dynamic:
  * `${DATE}` Add the current date to the file.
  * `${FILE}` Add the filename ( including extension ) to the file.
  * `${FILENAME}` Add the filename ( excluding extension ) to the file.
* Static:
  * `${PRODUCT_NAME}` Add the name of the IDE (Visual Studio Code) to the file.

## Templates Location

* Depending on your OS, default templates are located at 
    * Windows : `%USERPROFILE%\.vscode\extensions\stefanovb.vscode-template-manager-{version}\templates`
    * Mac : `~/.vscode/extensions/stefanovb.vscode-template-manager-{version}/templates`
    * Linux : `~/.vscode/extensions/stefanovb.vscode-template-manager-{version}/templates`

* You can also create workspace specific templates. 
    Worspace templates are located at  `/%WORKSPACE_ROOT_FOLDER%/.vscode/templates`

* You are also able to change the extensions folder through the extension settings.

### Template Location
For Windows and MAC: 
Available environment variables:
- `%USERNAME%` username of the current user.
- `%HOMEPATH%` User homepath location.

For windows only:
Available environment variables:
- `%ONEDRIVE%` Onedrive location ( When business onedrive connected this will be the location of the business onedrive ).
- `%ONEDRIVECONSUMER%` Onedrive location ( Personal onedrive location ).


## Extension Settings

This extension contributes the following settings:

* `templates.Author`: Set the Author name.
* `templates.Student`: Set the student identifier.
* `templates.TemplateDirectory`: Set the default template directory. ( Only available for Windows )

## KeyBindings

* Create a New File from template
    Windows:  ` 'ctrl + n'`
    MAC: `'cmd + n'`

* Create a New Untitled File
    Windows: `'ctrl + alt + n'`
    MAC: `'cmd + alt + n'`

## Release Notes

### 1.0.0
- Initial release of the extension for VSCode

### 1.0.1
- Initial directory fix

### 1.1.0
- Fix the lowercase template file names.
- Add `${FILENAME}` as template variable. ( Filename without extension )
- Add the command option `Files: Remove a File Template`

### 1.1.2
- Update the readme and changelog file.
- Update template folder path.