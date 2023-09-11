const apiUrl = import.meta.env.DEV
    ? "http://localhost:5000/api/v1"
    : "https://aic-backend.onrender.com/api/v1";

export {
    apiUrl
};