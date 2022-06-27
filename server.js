const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./ops.proto', {});
const tangeloPackage = grpc.loadPackageDefinition(packageDefinition).tangelogames.api.ops;


function getServer() {
    var server = new grpc.Server();
    server.addService(tangeloPackage.Ops.service, {
        Status: Status
    });
    return server;
}

var routeServer = getServer();

routeServer.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    routeServer.start();
});

function Status(call, callback) {
    callback(null, {
        ts: new Date(),
        version: 'v1.0.9',
        commit: 'Ok'
    });
}   