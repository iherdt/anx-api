var _ = require('lodash');
var axios = require('axios');

module.exports = function requestAdaptor(opts) {
	var url = opts.uri;

	var axiosOpts = {
		timeout: opts.timeout,
		method: opts.method.toLowerCase(),
		headers: opts.headers
	};

	if (!_.isUndefined(opts.body)) {
		axiosOpts.data = opts.body;
	}

	return axios(url, axiosOpts, opts.body).then(function requestSuccess(res) {
		return {
			statusCode: res.status,
			headers: res.headers,
			body: res.data
		};
	}).catch(function requestError(res) {
		if (!res.response) {
			throw res;
		}
		return {
			statusCode: res.response.status,
			headers: res.response.headers,
			body: res.response.data
		};
	});
};