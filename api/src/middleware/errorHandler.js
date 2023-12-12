function errorHandler (err, _req, res, next) {
    if (err) {
        console.error("Error en el servidor");
        return res.status(500).json({ error: "Error en el servidor." });    
    }
  
    next();
  }
  
module.exports = errorHandler;
