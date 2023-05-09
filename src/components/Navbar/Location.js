import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setLocation(`${data.region}, ${data.city}`);
    };
    getLocation();
  }, []);

  return (
    <div>
      <p>{location}</p>
    </div>
  );
};

export default Location;
