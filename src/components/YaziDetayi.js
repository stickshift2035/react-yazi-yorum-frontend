import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const YaziDetayi = (props) => {
  const [yaziDetayi, setYaziDetayi] = useState({});

  useEffect(() => {
    axios
      .get(`https://yeni-backend-projesi.herokuapp.com/posts/${id}`)
      .then((response) => setYaziDetayi(response.data))
      .catch((error) => console.log(error));
  }, []);
  const { id } = useParams();
  console.log(id);
  // React fragment yapalım ki başka bir element görünmesin
  return (
    <React.Fragment> 
      <h2 className="ui header">{yaziDetayi.title}</h2>
      <p>{yaziDetayi.created_at}</p>
      <p>{yaziDetayi.content}</p>
    </React.Fragment>
  );
};

export default YaziDetayi;
