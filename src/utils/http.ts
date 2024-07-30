import axios from "axios";

const initConfig = {
    baseURL: 'https://polsoft2000api.azurewebsites.net',

    withCredentials: false,
    handleError(error: any) {
        return Promise.reject(error);
    },
    handleSuccess(succ: any) {
        return Promise.resolve(succ.data)
    }
}


class Http {
    private service;

    constructor(init: any) {
        const service = axios.create({
            headers: init.customHeaders,
            baseURL: init.baseURL,
            withCredentials: init.withCredentials,
        });
        service.interceptors.request.use(config => {
            config.headers.Authorization = `Basic ${localStorage.getItem('token')}`;
            return config;
        });
        service.interceptors.response.use(init.handleSuccess, init.handleError);
        this.service = service;
    }


    public get(path: string) {
        return this.service.request({
            method: "GET",
            url: path,
            responseType: "json"
        });
    }

    public patch(path: string, payload: any) {
        return this.service.request({
            method: "PATCH",
            url: path,
            responseType: "json",
            data: payload
        });
    }

    public post(path: string, bodyPayload: any = false) {
        return this.service.request({
            method: "POST",
            url: path,
            responseType: "json",
            data: bodyPayload
        });
    }

    public delete(path: string, bodyPayload: any = false) {
        return this.service.request({
            method: "DELETE",
            url: path,
            responseType: "json",
            data: bodyPayload
        });
    }
}

export default new Http(initConfig);