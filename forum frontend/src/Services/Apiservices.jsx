import React from "react";
import * as qs from 'qs';
import axios from "axios";

const BASEURL = 'https://dark-phab.onrender.com/api/';

class Apiservices  {
    register(data) {
        return axios.post(BASEURL + 'user/add', data)
    }

    login(data) {
        return axios.post(BASEURL + 'user/login', qs.stringify(data))
    }
}

export default new Apiservices;