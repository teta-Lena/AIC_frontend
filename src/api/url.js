const apiUrl = import.meta.env.DEV
    ? "https://aic-backend.onrender.com/api/v1"
    : "http://localhost:5000/api/v1";

export {
    apiUrl
};