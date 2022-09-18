import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const YaziListesi = (props) => {
  const [yaziListesi, setYaziListesi] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://yeni-backend-projesi.herokuapp.com/posts"
    );
    setYaziListesi(response.data);
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="ui relaxed divided list">
      {yaziListesi.map((yazi) => {
        return (
          <div className="item" key={yazi.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${yazi.id}`} className="header">{yazi.title}</Link>
              <div className="description">{yazi.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YaziListesi;
