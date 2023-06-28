import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404");
  }, [navigate]);

  return null;
};

export default RedirectToNotFound;
