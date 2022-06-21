//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Footer = ({ fan }) => {
  return (
    <footer>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <div>
        <h1 className="footer_text">My name is Tourist</h1>
        <div className="ssylka">
        <a href="https://codeforces.com/" style={{paddingRight: '30px', color: 'white', textDecoration:'none'}}>Codeforces.com</a>
        <a href="https://leetcode.com/" style={{paddingRight: '30px', color: 'white', textDecoration:'none'}}>LeetCode.com</a>
        <a href="https://codingcompetitions.withgoogle.com/" style={{paddingRight: '30px', color: 'white', textDecoration:'none'}}>Google Contest</a>
        </div>
      </div>
    </footer>
  );
};
