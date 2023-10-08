import React, { Component } from 'react'
import axios from 'axios'

function GetRequest(uri) {
    try { return axios.get(uri); }
    catch (error) {console.log(error);}
}

export default GetRequest

