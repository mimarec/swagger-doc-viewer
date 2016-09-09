// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode'),
      opn = require('opn'),
      path = require('path'),
      express = require('express'),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io')(server);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Swagger-documentation is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.swaggerDocViewer', function () {
        // The code you place here will be executed every time your command is executed
        let editor = vscode.window.activeTextEditor,
            doc = editor.document,
            regex = /(?:.(?![\/\\]))+$/g,
            baseFile = doc.fileName,
            swaggerStatic = doc.fileName.replace(doc.fileName.match(regex)[0], '');

        app.use(express.static(path.join(__dirname, 'swagger-editor')));
        app.use(express.static(path.join(swaggerStatic)));

        vscode.workspace.onDidSaveTextDocument(function(event) {
            if (baseFile === event.fileName) {
                io.sockets.emit('SWAGGER_UPDATE', {
                    "yaml": doc.getText()
                });
            } else {
                io.sockets.emit('SWAGGER_UPDATE_RESOURCES', {});
            }
        });

        io.on('connection', function(socket) {
            socket.emit('SWAGGER_UPDATE', {
                "yaml": doc.getText()
            });
        });
        server.listen(9000);
        opn('http://localhost:9000');
        // Display a message box to the user
        vscode.window.showInformationMessage('Swagger Documentation is running in http://localhost:9000');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;