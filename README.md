# nodejs_basic_to_up
nodejs from js basic theories 



1) npm init in console and do above things

                PS D:\2020_practicle\2020NODEJS\http> npm init
                This utility will walk you through creating a package.json file.
                It only covers the most common items, and tries to guess sensible defaults.

                See `npm help json` for definitive documentation on these fields
                and exactly what they do.

                Use `npm install <pkg>` afterwards to install a package and
                save it as a dependency in the package.json file.

                Press ^C at any time to quit.
                package name: (http) demo
                version: (1.0.0) 1.0.0
                description: demo app
                entry point: (http-form-submit.js) index.js
                test command:
                git repository:
                keywords:
                author: chathura deepana
                license: (ISC)
                About to write to D:\2020_practicle\2020NODEJS\http\package.json:

                {
                "name": "demo",
                "version": "1.0.0",
                "description": "demo app",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "node server.js"
                },
                "author": "chathura deepana",
                "license": "ISC"
                }


                Is this OK? (yes) yes

2) when yes entered [package.json file will be created in the folder].

3) after that we can install any package using npm i [package_name] also.
    all installed packages dependencies will be mentioned in package.json file.

4) And package-lock.json is include all dependency packages details.


5) install body parser using npm

6) npm install ws ===> this is for installing web socket through npm

7) in mongodb sample project [ (i)  first create configure node project usinng "npm init"
                               (ii) after that should install mongodb using "npm install mongodb 
                                    OR npm install mongodb --save to save] this for depency saving
                               (iii) npm install mongoose
    *after mongodb version 3.0 the another configuration can be use [v3.* this] for mongodb connection in node app