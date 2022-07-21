import { useState } from "react";
import { useEffect } from "react";
import "./Slider.css";

export const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [newsList, setNewsList] = useState([
    {
      img: "https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiaGVyby1iYW5uZXJcL3BpY3R1cmVzXC9jcm9wcGVkXC9kZXNrdG9wXC8xX2Rlc2t0b3BfaG9tZS1oZXJvLWRlc2t0b3AtZWxldmF0ZS15b3VyLXdvcmxkLTM0NDAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwfSwidG9Gb3JtYXQiOiJ3ZWJwIn19?signature=52e49c9bdc7b593e0681f68f66327570294d3d7d2748576ab371b86882313734",
    },
    {
      img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/design_banner_desk_search1920.1a7baf6b.jpg",
    },
    {
      img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/collections/desktop/themes-1600x423.51294e1d.jpg",
    },
  ]);

  const length = newsList.length;

  useEffect(() => {
    setNewsList([
      {
        img: "https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiaGVyby1iYW5uZXJcL3BpY3R1cmVzXC9jcm9wcGVkXC9kZXNrdG9wXC8xX2Rlc2t0b3BfaG9tZS1oZXJvLWRlc2t0b3AtZWxldmF0ZS15b3VyLXdvcmxkLTM0NDAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwfSwidG9Gb3JtYXQiOiJ3ZWJwIn19?signature=52e49c9bdc7b593e0681f68f66327570294d3d7d2748576ab371b86882313734",
      },
      {
        img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/design_banner_desk_search1920.1a7baf6b.jpg",
      },
      {
        img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/collections/desktop/themes-1600x423.51294e1d.jpg",
      },
    ]);
  }, []);

  useEffect(() => {
    let milisecs = 100000;
    let intervalChange = setInterval(nextSlide, milisecs);
    return () => clearInterval(intervalChange);
    // eslint-disable-next-line
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const changeCurrent = (i) => {
    setCurrent(i);
  };

  return (
    <div>
      {length !== 0 ? (
        <div className="trendingNews">
          {newsList.map((noticia, index) => (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <div className="sliderCont">
                  <img
                    id="imgTrendingCont"
                    alt="fotoTrending"
                    src={noticia.img}
                  />
                </div>
              )}
            </div>
          ))}
          <button className="butLeft" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left fa-2xl"></i>
          </button>
          <button className="butRight" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right fa-2xl   "></i>
          </button>
          <div className="dots-container">
            {newsList
              ? newsList.map((noticia, index) => (
                  <button
                    key={index}
                    onClick={() => changeCurrent(index)}
                    className="dot"
                  >
                    <i
                      className={
                        index === current
                          ? "fa-solid fa-circle selected-dot"
                          : "fa-solid fa-circle"
                      }
                    ></i>
                  </button>
                ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
