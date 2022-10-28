/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.7
// source: server.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var person_pb = require('./person_pb.js')
const proto = require('./server_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.LiveScoreServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.LiveScoreServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetPersonByIdRequest,
 *   !proto.GetPersonByIdResponse>}
 */
const methodDescriptor_LiveScoreService_GetPersonById = new grpc.web.MethodDescriptor(
  '/LiveScoreService/GetPersonById',
  grpc.web.MethodType.UNARY,
  proto.GetPersonByIdRequest,
  proto.GetPersonByIdResponse,
  /**
   * @param {!proto.GetPersonByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetPersonByIdResponse.deserializeBinary
);


/**
 * @param {!proto.GetPersonByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetPersonByIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetPersonByIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LiveScoreServiceClient.prototype.getPersonById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/LiveScoreService/GetPersonById',
      request,
      metadata || {},
      methodDescriptor_LiveScoreService_GetPersonById,
      callback);
};


/**
 * @param {!proto.GetPersonByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetPersonByIdResponse>}
 *     Promise that resolves to the response
 */
proto.LiveScoreServicePromiseClient.prototype.getPersonById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/LiveScoreService/GetPersonById',
      request,
      metadata || {},
      methodDescriptor_LiveScoreService_GetPersonById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreatePersonRequest,
 *   !proto.CreatePersonResponse>}
 */
const methodDescriptor_LiveScoreService_CreatePerson = new grpc.web.MethodDescriptor(
  '/LiveScoreService/CreatePerson',
  grpc.web.MethodType.UNARY,
  proto.CreatePersonRequest,
  proto.CreatePersonResponse,
  /**
   * @param {!proto.CreatePersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreatePersonResponse.deserializeBinary
);


/**
 * @param {!proto.CreatePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreatePersonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreatePersonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LiveScoreServiceClient.prototype.createPerson =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/LiveScoreService/CreatePerson',
      request,
      metadata || {},
      methodDescriptor_LiveScoreService_CreatePerson,
      callback);
};


/**
 * @param {!proto.CreatePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreatePersonResponse>}
 *     Promise that resolves to the response
 */
proto.LiveScoreServicePromiseClient.prototype.createPerson =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/LiveScoreService/CreatePerson',
      request,
      metadata || {},
      methodDescriptor_LiveScoreService_CreatePerson);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetAllPeopleRequest,
 *   !proto.GetAllPeopleResponse>}
 */
const methodDescriptor_LiveScoreService_GetAllPeople = new grpc.web.MethodDescriptor(
  '/LiveScoreService/GetAllPeople',
  grpc.web.MethodType.UNARY,
  proto.GetAllPeopleRequest,
  proto.GetAllPeopleResponse,
  /**
   * @param {!proto.GetAllPeopleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllPeopleResponse.deserializeBinary
);


/**
 * @param {!proto.GetAllPeopleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetAllPeopleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAllPeopleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LiveScoreServiceClient.prototype.getAllPeople =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/LiveScoreService/GetAllPeople',
      request,
      metadata || {},
      methodDescriptor_LiveScoreService_GetAllPeople,
      callback);
};


/**
 * @param {!proto.GetAllPeopleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAllPeopleResponse>}
 *     Promise that resolves to the response
 */
proto.LiveScoreServicePromiseClient.prototype.getAllPeople =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/LiveScoreService/GetAllPeople',
      request,
      metadata || {},
      methodDescriptor_LiveScoreService_GetAllPeople);
};


module.exports = proto;
