function errorHandler (err, _req, res, next) {
    if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error en el servidor." });    
    }
  
    next();
  }
  
module.exports = errorHandler;
