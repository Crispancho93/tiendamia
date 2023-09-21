const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "token not provided" });
  }

  const configSecurity = {
    algorithms: ["RS256"],
  };

  try {
    // const decoded = jwt.verify(token, PUBLIC_KEY, configSecurity);
    // req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid" });
  }
};

export default verifyToken;
