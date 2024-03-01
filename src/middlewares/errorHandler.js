const errorHandler = (err,req,res,next) => {
    const statusCode = err.statusCode || 500

    const errorRes = {
        error: {
            message: err.message || "error interno de servidor",
            code: err.code || "internal_error"
        }
    }

    res.status(statusCode).json(errorRes)
}

module.exports = errorHandler