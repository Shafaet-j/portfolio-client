import { useEffect, useState } from "react";

const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://portfolio-server-rosy.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
        setLoading(false);
      });
  }, []);
  return [portfolio, loading];
};

export default usePortfolio;
