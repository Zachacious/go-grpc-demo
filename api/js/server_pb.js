// source: server.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var person_pb = require('./person_pb.js');
goog.object.extend(proto, person_pb);
goog.exportSymbol('proto.CreatePersonRequest', null, global);
goog.exportSymbol('proto.CreatePersonResponse', null, global);
goog.exportSymbol('proto.GetAllPeopleRequest', null, global);
goog.exportSymbol('proto.GetAllPeopleResponse', null, global);
goog.exportSymbol('proto.GetPersonByIdRequest', null, global);
goog.exportSymbol('proto.GetPersonByIdResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetPersonByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetPersonByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetPersonByIdRequest.displayName = 'proto.GetPersonByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetPersonByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetPersonByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetPersonByIdResponse.displayName = 'proto.GetPersonByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreatePersonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreatePersonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreatePersonRequest.displayName = 'proto.CreatePersonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreatePersonResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreatePersonResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreatePersonResponse.displayName = 'proto.CreatePersonResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAllPeopleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAllPeopleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAllPeopleRequest.displayName = 'proto.GetAllPeopleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAllPeopleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetAllPeopleResponse.repeatedFields_, null);
};
goog.inherits(proto.GetAllPeopleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAllPeopleResponse.displayName = 'proto.GetAllPeopleResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetPersonByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetPersonByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetPersonByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPersonByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetPersonByIdRequest}
 */
proto.GetPersonByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetPersonByIdRequest;
  return proto.GetPersonByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetPersonByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetPersonByIdRequest}
 */
proto.GetPersonByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetPersonByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetPersonByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetPersonByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPersonByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.GetPersonByIdRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetPersonByIdRequest} returns this
 */
proto.GetPersonByIdRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetPersonByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetPersonByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetPersonByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPersonByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    person: (f = msg.getPerson()) && person_pb.Person.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetPersonByIdResponse}
 */
proto.GetPersonByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetPersonByIdResponse;
  return proto.GetPersonByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetPersonByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetPersonByIdResponse}
 */
proto.GetPersonByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new person_pb.Person;
      reader.readMessage(value,person_pb.Person.deserializeBinaryFromReader);
      msg.setPerson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetPersonByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetPersonByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetPersonByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPersonByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerson();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      person_pb.Person.serializeBinaryToWriter
    );
  }
};


/**
 * optional Person person = 1;
 * @return {?proto.Person}
 */
proto.GetPersonByIdResponse.prototype.getPerson = function() {
  return /** @type{?proto.Person} */ (
    jspb.Message.getWrapperField(this, person_pb.Person, 1));
};


/**
 * @param {?proto.Person|undefined} value
 * @return {!proto.GetPersonByIdResponse} returns this
*/
proto.GetPersonByIdResponse.prototype.setPerson = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetPersonByIdResponse} returns this
 */
proto.GetPersonByIdResponse.prototype.clearPerson = function() {
  return this.setPerson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetPersonByIdResponse.prototype.hasPerson = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreatePersonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CreatePersonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreatePersonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreatePersonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    person: (f = msg.getPerson()) && person_pb.Person.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreatePersonRequest}
 */
proto.CreatePersonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreatePersonRequest;
  return proto.CreatePersonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreatePersonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreatePersonRequest}
 */
proto.CreatePersonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new person_pb.Person;
      reader.readMessage(value,person_pb.Person.deserializeBinaryFromReader);
      msg.setPerson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreatePersonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreatePersonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreatePersonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreatePersonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerson();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      person_pb.Person.serializeBinaryToWriter
    );
  }
};


/**
 * optional Person person = 1;
 * @return {?proto.Person}
 */
proto.CreatePersonRequest.prototype.getPerson = function() {
  return /** @type{?proto.Person} */ (
    jspb.Message.getWrapperField(this, person_pb.Person, 1));
};


/**
 * @param {?proto.Person|undefined} value
 * @return {!proto.CreatePersonRequest} returns this
*/
proto.CreatePersonRequest.prototype.setPerson = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CreatePersonRequest} returns this
 */
proto.CreatePersonRequest.prototype.clearPerson = function() {
  return this.setPerson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CreatePersonRequest.prototype.hasPerson = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreatePersonResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CreatePersonResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreatePersonResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreatePersonResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    person: (f = msg.getPerson()) && person_pb.Person.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreatePersonResponse}
 */
proto.CreatePersonResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreatePersonResponse;
  return proto.CreatePersonResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreatePersonResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreatePersonResponse}
 */
proto.CreatePersonResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new person_pb.Person;
      reader.readMessage(value,person_pb.Person.deserializeBinaryFromReader);
      msg.setPerson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreatePersonResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreatePersonResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreatePersonResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreatePersonResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerson();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      person_pb.Person.serializeBinaryToWriter
    );
  }
};


/**
 * optional Person person = 1;
 * @return {?proto.Person}
 */
proto.CreatePersonResponse.prototype.getPerson = function() {
  return /** @type{?proto.Person} */ (
    jspb.Message.getWrapperField(this, person_pb.Person, 1));
};


/**
 * @param {?proto.Person|undefined} value
 * @return {!proto.CreatePersonResponse} returns this
*/
proto.CreatePersonResponse.prototype.setPerson = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CreatePersonResponse} returns this
 */
proto.CreatePersonResponse.prototype.clearPerson = function() {
  return this.setPerson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CreatePersonResponse.prototype.hasPerson = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAllPeopleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAllPeopleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAllPeopleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAllPeopleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAllPeopleRequest}
 */
proto.GetAllPeopleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAllPeopleRequest;
  return proto.GetAllPeopleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAllPeopleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAllPeopleRequest}
 */
proto.GetAllPeopleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAllPeopleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAllPeopleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAllPeopleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAllPeopleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetAllPeopleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAllPeopleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAllPeopleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAllPeopleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAllPeopleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peopleList: jspb.Message.toObjectList(msg.getPeopleList(),
    person_pb.Person.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAllPeopleResponse}
 */
proto.GetAllPeopleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAllPeopleResponse;
  return proto.GetAllPeopleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAllPeopleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAllPeopleResponse}
 */
proto.GetAllPeopleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new person_pb.Person;
      reader.readMessage(value,person_pb.Person.deserializeBinaryFromReader);
      msg.addPeople(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAllPeopleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAllPeopleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAllPeopleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAllPeopleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeopleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      person_pb.Person.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Person people = 1;
 * @return {!Array<!proto.Person>}
 */
proto.GetAllPeopleResponse.prototype.getPeopleList = function() {
  return /** @type{!Array<!proto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, person_pb.Person, 1));
};


/**
 * @param {!Array<!proto.Person>} value
 * @return {!proto.GetAllPeopleResponse} returns this
*/
proto.GetAllPeopleResponse.prototype.setPeopleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Person}
 */
proto.GetAllPeopleResponse.prototype.addPeople = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetAllPeopleResponse} returns this
 */
proto.GetAllPeopleResponse.prototype.clearPeopleList = function() {
  return this.setPeopleList([]);
};


goog.object.extend(exports, proto);
