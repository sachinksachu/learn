const apiCall = async (method, url, data = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("API failed")
        }
        return await response.json();
    }
    catch(error) {
        throw error;
     }
}

export default apiCall;