import request from "@/request/";


export function get(params) {
	return request.get(``, params);
}

export function post(data) {
	return request.post(``, data);
}