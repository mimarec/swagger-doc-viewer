# Swagger Doc Viewer

Viewer documentation for a [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) ([fka The Swagger Specification](http://swagger.io/specification/)).

##Note

This project is still a work in progress.

## Features

* Displays documentation API specification in a browser *(http://localhost:9000)* using [SwaggerEditor](https://github.com/swagger-api/swagger-editor).
* The browser automatically **refresh** with changes in *Visual Studio Code* through socket communication [SocketIO](http://socket.io/).
* Used a [Express](http://expressjs.com/) server for a correct working to $ref. The base path is used to indicate the static folder containing references to the main *Swagger file*.
* Routes used in the $ref are relative to the main *Swagger file*.

![alt tag](https://raw.githubusercontent.com/mimarec/swagger-doc-viewer/master/images/example1.png)
![alt tag](https://raw.githubusercontent.com/mimarec/swagger-doc-viewer/master/images/example2.png)
![alt tag](https://raw.githubusercontent.com/mimarec/swagger-doc-viewer/master/images/example3.png)

## Requirements

[Visual Studio Code](https://code.visualstudio.com)

## Usage

* Open the main *Swagger file*.
* Run the Command `⇧⌘P` **Swagger Doc Viewer**.

## 3rd Party Libraries/Frameworks

* [SwaggerEditor](https://github.com/swagger-api/swagger-editor)
* [SocketIO](http://socket.io/)
* [Express](http://expressjs.com/)
