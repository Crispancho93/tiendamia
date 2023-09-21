const verifyToken = (req, res, next) => {
  const API_KEY = req.headers.api_key;

  if (!API_KEY) {
    return res.status(401).json({ error: "Access denied" });
  }

  try {
    if (API_KEY != "123") {
      return res.status(401).json({ error: "Access denied" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ error: "Access denied" });
  }
};

export default verifyToken;
