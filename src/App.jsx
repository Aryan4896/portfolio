import "./App.css";
import Porfile from "./assets/photo.png";
import profile from "./photo.png";
import Card from "./Card";
import weather from "./weather.png";
import projectmarketing from "./marketing3.png";
import university from "./university.png";
import typing from "./typing.png";
import chess from "./chess.png";
import notes from "./notely.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down-green.svg";
import DownloadButton from "./DownloadButton";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Aryan Singh</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Aryan,</h2>
              <div>
                <h2 className="font-bold mt-2 text-2xl">I'm a</h2>
                <h2 className="font-bold text-4xl mt-2 gradiant-text">
                  Frontend developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  Seeking to apply competent development skills with focus on
                  collaboration, communication, and passion
                </p>
                {/* <button className="px-6 shadow-black-600 shadow-md py-5 mt-5 bg-gradient-to-t from-green-500 via-green-500 to-green-500 rounded-lg hover:from-green-900 hover:to-black-500 ">
                  Download resume
                </button> */}
                <DownloadButton />
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./green.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small-green.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  style={{ borderRadius: "65px" }}
                  src={profile}
                  className="relative z-10 w-[200px] m-auto sm:w-[600px] profile-1"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <h2
            className="text-2xl font-semibold"
            style={{
              marginTop: "100px",
              marginBottom: "40px",
              marginLeft: "17px",
            }}
          >
            Projects
          </h2>
          <div className="wrapper m-xl px-4 sm:py-12">
            <div className=" flex flex-col sm:flex-row gap-10 mt-8">
              <div>
                <Card
                  livehref="https://aryan4896.github.io/University-Website.github.io/"
                  image={university}
                  title="Eduford University"
                  description=" Responsive HTML/CSS/JS layout for University"
                  githref={
                    "https://github.com/Aryan4896/University-Website.github.io.git"
                  }
                />

                <Card
                  livehref="https://d1swos-3000.csb.app/"
                  image={projectmarketing}
                  title="Digital-Marketing Website"
                  description="Responsive HTML/CSS/React.js Digital Marketing Website"
                  githref={
                    "https://github.com/Aryan4896/Digital-marketing-website.git"
                  }
                />
                <Card
                  livehref="https://xuqo80-3000.csb.app/"
                  image={weather}
                  title="Weather App"
                  description=" Responsive HTML/CSS/React.js Live Weather App using
                OpenWeather API"
                  githref={"https://github.com/Aryan4896/weather-app.git"}
                />
              </div>
              <div>
                <Card
                  livehref="https://aryan4896.github.io/Typing-and-Tap/"
                  image={typing}
                  title="Typing and Tap"
                  description="Responsive HTML/CSS/JS to test the wpm and accuracy of the user's typing."
                  githref={"https://github.com/Aryan4896/Typing-and-Tap.git"}
                />
                <Card
                  livehref="https://chessgame-tau.vercel.app/"
                  image={chess}
                  title="Chess-game"
                  description="A multiplayer chess platform built with JavaScript, Tailwind CSS, Node.js, Express.js, and Socket.IO."
                  githref={"https://github.com/Aryan4896/chess_game.git"}
                />
                <Card
                  livehref="https://notelyyy.vercel.app/"
                  image={notes}
                  title="Notely"
                  description="Notely is a web app for creating and sharing notes and blogs. Built with  Node.js, Express.js, and MongoDB"
                  githref={"https://github.com/Aryan4896/notelyyy.git"}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-green-500 to-green-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-green-500 to-green-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-green-500 to-green-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-green-500 to-green-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node.js, Express.js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-green-500 to-green-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MongoDB</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-green-500 to-green-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-500 before:to-green-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-500 before:to-green-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-500 before:to-green-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Firebase
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-500 before:to-green-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Socket.IO
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-500 before:to-green-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Graduate of Shri Ram Swaroop Memorial University (SRMU), where
                  I earned my Bachelor of Technology (B.Tech) degree in
                  Biotechnology.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-500 before:to-green-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development and gained valuable
                  experience as a Frontend Intern at DataXtech Infosystem
                  Private Limited.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
