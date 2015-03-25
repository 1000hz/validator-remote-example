# Remote Validation Example
## For Bootstrap Validator

See http://github.com/1000hz/bootstrap-validator for the library to which this example refers.

Here's a simple little express server that implements a server-side validation endpoint for the remote validator to use.
The validator expects a `200 OK` response to mean the input is valid. Anything else is considered to be invalid, and the *status text* is used as the error message shown to the user.

**NOTE:** It seems like the better thing for the validator to do is to use the *response text* instead of the *status text*. This change will be made in a future version of the validator.

### Running the example
Assuming you have node installed,
```
npm install
npm start
```