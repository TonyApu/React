import request from 'umi-request';

export async function getMenu() {
    return request('/api/products');
}