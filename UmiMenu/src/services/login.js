export function accountLogin(params) {
    const {username, password} = params;
    if (username === 'tony' && params === '1234') {
        return {
            status: 200,
            role: 'admin'
        }
    } else if (username === 'tamnxl' && params === '1234') {
        return {
            status: 200,
            role: 'member'
        }
    } else {
        return {
            status: 401,
            role: ''
        }
    }
}