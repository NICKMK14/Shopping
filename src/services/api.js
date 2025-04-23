/** @format */

import axios from "axios";

const BASE_URL = import.meta.env.VITE_FAKE_API;

export const getAllProducts = () => axios.get(`${BASE_URL}/products`);
export const getProduct = (id) => axios.get(`${BASE_URL}/products/${id}`);
export const getCategories = () => axios.get(`${BASE_URL}/categories`);
