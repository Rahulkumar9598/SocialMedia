export const errorHandling = (error, req, res, next) => {
    return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false
    })
}


