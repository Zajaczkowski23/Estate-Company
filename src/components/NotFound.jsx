import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Estate-Company");
  }, [navigate]);
  return null;
};

export default NotFound;
