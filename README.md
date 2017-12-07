# Readable
A Reddit like web forum, built with React/Redux.

## Readable API Server
* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `npm start`

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Readable Frontend
* In another terminal window, use Create React App to scaffold out the front-end
    - `cd frontend`
    - `npm install`
    - `npm start`

## Notes
This application is anonymous, with no authentication or authorization. There are no user objects, and comments and posts accept any username for creation and editing.

The server performs zero data validation to enforce the above data types. Make sure you are using the correct types when sending requests to the server.

## Contributing
Pull requests and ideas welcome!

## Credits
[API Server](https://github.com/udacity/reactnd-project-readable-starter) provided by [Udacity](https://www.udacity.com/).

## License
The MIT License

Copyright (c) 2017 Tony Luo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
