# AppNexus Api Wrapper

## Installation

	npm install anx-api

## Usage Example

	var Api = require('anx-api');

	# Create a new instance with api target
	var api = new Api({
		target: 'https://api.appnexus.com'
		token: 'SESSION_TOKEN' // (optional) see also api.login(...)
	});

	api.getJson(<serviceName>).then(function (res) {
		...
	}).catch(function (err) {
		...
	})

## Constructor

	var api = new Api(config);

#### Parameters

* config
	* target - (string) base api url
	* token - (string) optional session token
	* request - (object) optional request object
	* userAgent - (string) optional user agent

## Instance Methods

### #get

Issues a GET request

	api.get('service url')
	api.get(opts) // see Request Options

#### Parameters

* service uri - (string|object)

#### Result

Returns a promise that fulfills with the response from the api.

### #getJson

Usage and parameters are the same as #get. Response body is parsed as json.

### #post

Issues a POST request with a payload

	api.post('service url', 'payload')
	api.post(opts, { /* payload obj */ })
	api.post(opts) // see Request Options

#### Parameters

* service uri - (string|object)
* payload - (string|object)

#### Result

Returns a promise that fulfills with the response from the api.

### #postJson

Posts a json encoded object payload to the service url. Usage and parameters are
the same as #post. Response body is parsed as json.

### #put

Issues a PUT request with a payload

	api.put('service url', 'payload')
	api.put(opts, { /* payload obj */ })
	api.put(opts) // see Request Options

#### Parameters

* service uri - (string|object)
* payload - (string|object)

#### Result

Returns a promise that fulfills with the response from the api.

### #putJson

Puts a json encoded object payload to the service url. Usage and parameters are
the same as #put. Response body is parsed as json.

### #delete

Issues a DELETE request

	api.delete('service url')
	api.delete(opts) // see Request Options

#### Parameters

* service uri - (string|object)

#### Result

Returns a promise that fulfills with the response from the api.

### #deleteJson

Usage and parameters are the same as #delete. Response body is parsed as json.

## Request Options

The get, post, put, and delete methods can be called with an opts object. The
opts allows the configuration for the following request options.

* uri - (string) service uri
* startElement - (string) optional start index
* numElements - (integer) optional number of records to return
* params - (object) optional query string parameters

### Example

	// Fetch the third page of 25 creatives
	api.get({
		uri: 'creative',
		startElement: 50,
		numElements: 25
	})

### #login

Coming soon

## Tests

### Running unit tests

Install mocha globally:

	npm install mocha -g

Run this projects unit tests suite from project root:

	mocha

### Mocking

Coming soon

## Todo

* Add mocking examples to readme
* Add Service Wrapper
