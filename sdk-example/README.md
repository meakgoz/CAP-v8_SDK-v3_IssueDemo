# How to reproduce the issue

## Steps You dont have to repeat, just for reference

1. In terminal, `cd` to the `sdk-example` folder. Then get the bookshop admin service edmx: `cds ../bookshop/srv/admin-service.cds -2 edmx > ./resources/bookshop.edmx` 
2. Generate the OData client: `generate-odata-client --input resources/ --outputDir src/odata-clients/ --overwrite --clearOutputDir --optionsPerService resources/service-mapping.json` (Need to install the generator package globally: `npm install -g @sap-cloud-sdk/generator`)


## Steps to reproduce

1. Install the dependencies: run `npm install` command in both folders: root and the `sdk-example`.
2. Run the CAP server: `cds watch bookshop` in the root folder.  
3. Run the example app: `npm start` in the `sdk-example` folder.
4. Make the get request to `http://localhost:8000/post-books` (you can run `curl -X GET http://localhost:8000/post-books` or use browser simply.)


## Output

Node app crashes with the following error:

```bash
[nodemon] starting `ts-node src/main.ts`
Server is Fire at http://localhost:8000
created by: emin
[2024-11-21T15:05:26.665Z] ERROR    ErrorWithCause: Create request failed!
    at /Users/path/to/project/node_modules/@sap-cloud-sdk/odata-common/src/request-builder/create-request-builder-base.ts:113:15
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
Caused by:
ErrorWithCause: post request to http://localhost:4004/admin failed! 
{"message":"Value 2022-12-15T18:00:31.139Z is not a valid DateTime","target":"testField","code":"400","@Common.numericSeverity":4}
    at constructError (/Users/path/to/project/node_modules/@sap-cloud-sdk/odata-common/src/request/odata-request.ts:291:12)
    at /Users/path/to/project/node_modules/@sap-cloud-sdk/odata-common/src/request/odata-request.ts:237:13
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
Caused by:
HTTP Response: Request failed with status code 400 - [object Object]
[nodemon] app crashed - waiting for file changes before starting...
```

and the CAP server logs: 

```bash
[odata] - POST /admin/Books 
[cds] - [Value 2022-12-15T18:00:31.139Z is not a valid DateTime] {
  target: 'testField',
  args: [ '2022-12-15T18:00:31.139Z', DateTime { type: 'cds.DateTime' } ]
}
[error] - 400 > {
  message: 'Value 2022-12-15T18:00:31.139Z is not a valid DateTime',
  target: 'testField',
  code: '400',
  '@Common.numericSeverity': 4
}
```