 const grpc = require("@grpc/grpc-js");
 const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./ops.proto', {});

 const bookStorePackage = grpc.loadPackageDefinition(packageDefinition).tangelogames.api.ops;

 const client = new bookStorePackage.Ops('gw.a9e.services:443', grpc.credentials.createInsecure());


client.Status({}, (err, response) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`From server`, JSON.stringify(response));
	}
});