
export function postAPI(url, data){
	let resultObject = {};
	return fetch(url,{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(
		(result) => {
			resultObject = {
				fetchStatus : "success",
				result : result
			}
			return resultObject;
		},
		(error) => {
			resultObject = {
				fetchStatus : "failure",
				data : error
			}
			return resultObject;
		}
	)
}
export function postWithFileAPI(url, data){
	let resultObject = {};
	return fetch(url,{
		method: "POST",
		body: data,
	})
	.then(response => response.json())
	.then(
		(result) => {
			resultObject = {
				fetchStatus : "success",
				result : result
			}
			return resultObject;
		},
		(error) => {
			resultObject = {
				fetchStatus : "failure",
				data : error
			}
			return resultObject;
		}
	)
}

export function getAPI(url){
	let resultObject = {};
	return fetch(url,{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
	.then(response => response.json())
	.then(
		(result) => {
			resultObject = {
				fetchStatus : "success",
				result : result
			}
			return resultObject;
		},
		(error) => {
			resultObject = {
				fetchStatus : "failure",
				data : error
			}
			return resultObject;
		}
	)
}

export function deleteAPI(url, data){
	let resultObject = {};
	return fetch(url,{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(
		(result) => {
			resultObject = {
				fetchStatus : "success",
				result : result
			}
			return resultObject;
		},
		(error) => {
			resultObject = {
				fetchStatus : "failure",
				data : error
			}
			return resultObject;
		}
	)
}
export function putAPI(url, data){
	let resultObject = {};
	return fetch(url,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(
		(result) => {
			resultObject = {
				fetchStatus : "success",
				result : result
			}
			return resultObject;
		},
		(error) => {
			resultObject = {
				fetchStatus : "failure",
				data : error
			}
			return resultObject;
		}
	)
}
export function putWithFileAPI(url, data){
	let resultObject = {};
	return fetch(url,{
		method: "PUT",
		body: data,
	})
	.then(response => response.json())
	.then(
		(result) => {
			resultObject = {
				fetchStatus : "success",
				result : result
			}
			return resultObject;
		},
		(error) => {
			resultObject = {
				fetchStatus : "failure",
				data : error
			}
			return resultObject;
		}
	)
}