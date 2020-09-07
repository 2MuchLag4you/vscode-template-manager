# Change Log

## [1.0.0] - 2020-09-06

* Template variables
    * `${AUTHOR}` Add the author name to the file. ( Configureable through extension settings )
    * `${StudentNR}` Add a Student identifier to the file. ( Configurable through extension settings )
    * `${DATE}` Add the current date to the file.
    * `${FILE}` Add the filename wit extension to the file.
    * `${PRODUCT_NAME}` Add the name of the IDE ( Visual Studio Code ) to the file.
* Extension Settings
    * `templates.Author` Set the Author name.
    * `templates.Student` Set the student identifier.
    * `templates.TemplateDirectory` Set the default template directory. ( Some functionalities only available on windows )
* Template Directory Variables
    * Windows and MAC
        * `%username%` username of the current user.
        * `%HOMEPATH%` User homepath location.
        * `%USERPROFILE%` User homepath location.
    * Windows only
        * `%ONEDRIVE%` Onedrive location ( When business onedrive connected this will be the location of the business onedrive ).
        * `%ONEDRIVECONSUMER%` Onedrive location ( Personal onedrive location ).
* Custom Template Directory, in project folders you can create the folder templates and create custom templates for the project.
* Custom Keybindings
    * Create new file from template
        * Windows: `ctrl + n`
        * Mac: `cmd + n`
    * Create new untitled file
        * Windows: `ctrl + alt + n`
        * Mac: `cmd + alt + n`
* Command options
    * `Files: New File from template` Create a new file from a pre-defined template.
    * `Files: New File Template` Create a new blank template.
    * `Files: Edit File Template` Edit an existing file template.
    * `Files: New Template from file` Create a new template from an existing file. 

## [1.0.1] - 2020-09-06
* Predefined template directory fix.
    * Directory did not include current version number.

## [1.1.0] - 2020-09-07
* Support lower case file names. 
* Add `${FILENAME}` as template variable. ( Filename without extension )
* Add the command option `Files: Remove a File Template`

## [1.1.4] - 2020-09-07
* Fix markdown files
* Fix template directory
* Fix launch issue