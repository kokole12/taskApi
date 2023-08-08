export const errorHandler = (err, req, res, next) => {
    return res.status(error.status).json({mgs: err.mgs})
}
