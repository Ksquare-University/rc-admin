import "./SeeYou.css";
import italianFood from "../../assets/slide/italianFood.png";
import ramen from "../../assets/slide/ramen.png";
import burger from "../../assets/slide/burger.png";

export const SeeYou = () => {
  
  
  const imgs = [italianFood, ramen, burger];
  let i = 1;
  const slideShow = () => {
    const img1: HTMLImageElement = document.querySelector(
      "#img1"
    ) as HTMLImageElement;
    const img2: HTMLImageElement = document.querySelector(
      "#img2"
    ) as HTMLImageElement;

    img2.src = imgs[i];
    img2.classList.add("active");

    i++;
    if (i === imgs.length) {
      i = 0;
    }

    setTimeout(() => {
      img1.src = img2.src;
      img2.classList.remove("active");
    }, 1100);
  };

  setInterval(slideShow, 5000);

  return (
    <div className="Container">
      <div className="Slide-imgs">
        <img src={italianFood} alt="" id="img1" />
        <img src={italianFood} alt="" id="img2" />
      </div>
      <h1> See You Soon!</h1>
      <button> Login Again! </button>
    </div>
  );
};
