import * as Request from "request-promise-native";

class ExtractionWrapper {
	private BASE_URL: string = "https://ex.traction.one";
	private OPTIONS: Request.RequestPromiseOptions = {
		json: true,
	};

	constructor(options?: Request.RequestPromiseOptions) {
		if (options && typeof options === "object") {
			Object.assign(this.OPTIONS, options);
		}
	}

	public async request(path: string, options?: Request.RequestPromiseOptions) {
		let url: string = this.BASE_URL + path;
		let requestOptions = Object.assign({}, this.OPTIONS);

		if (options && typeof options === "object") {
			Object.assign(requestOptions, options);
		}

		return await Request(url, requestOptions);
	}
}

export = ExtractionWrapper;
