import React, { useState } from "react";
import "./background.css";
// import './hero2.css';
import bihar from "../assets/images/bihar.jpg";
import bihar2 from "../assets/images/bihar2.jpg";
import bihar3 from "../assets/images/bihar3.jpg";
import sutara from "../assets/images/sutara.jpg";
import jai from "../assets/images/jai.jpg";
import clg from "../assets/images/down.jpg";
import clg2 from "../assets/images/d.jpg";
import clg3 from "../assets/images/do.jpg";

const MyBackground = () => {
  const stateimages = [bihar, bihar2, bihar3];
  const [bigImage, setBigImage] = useState(stateimages[0]);

  const clgimages = [clg, clg2, clg3];
  const [clGImage, setClgImage] = useState(clgimages[0]);

  return (
    <div className="hero2">
      <div className="Background-container ">
        <div className=" absolute inset-0 top-[10px] left-[150px] h-[150px] w-[100px] border-l-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-bottom bg-[length:100%_2px] "></div>

        <div className="absolute inset-0 top-[100px] left-[260px] h-[100px] w-[500px] flex items-center justify-center text-center border-2 border-dotted border-primary rounded-[50px] animate-box">
          <h3
            className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
            bg-[length:200%_auto] animate-gradient "
          >
            I am from Bihar
          </h3>
        </div>

        <div className="absolute inset-0 top-[160px] left-[770px] h-[130px] w-[100px] border-r-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>

        <div className="absolute top-[300px] right-[100px] h-[400px] w-[1200px] flex items-center justify-center text-center border border-muted-foreground hover:border-none transition-all duration-300 ease-in hover:shadow-md hover:shadow-primary hover:scale-[1.01] rounded-[5px] animate-box">
          <div className="small-box">
            <img src={bigImage} alt="Big Display" />
          </div>

          <div className="small-box">
            <h3
              className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
            bg-[length:200%_auto] animate-gradient "
            >
              Bihar
            </h3>
            <p className="text-start">
              A state where history, culture, and nature blend beautifully,
              Bihar shines with ancient monuments like Nalanda and Bodh Gaya,
              lush green fields, and the holy Ganga. Its festivals, vibrant
              traditions, and warm hospitality make it unique. Rich heritage and
              natural beauty together create Bihar’s timeless charm.
            </p>

            <div className="photo">
              {stateimages.map((img, index) => (
                <div
                  key={index}
                  className="h-full w-1/2 p-[15px]"
                  onClick={() => setBigImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>

            <div className="para">
              <a
                href="https://en.wikipedia.org/wiki/Bihar"
                target="_blank"
                rel="noreferrer"
              >
                view more →
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 top-[500px] left-[40px] h-[450px] w-[100px] border-t-2 border-l-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-bottom bg-[length:100%_2px]"></div>

        <div className="absolute top-[900px] left-[150px] h-[100px] w-[600px] flex items-center justify-center border-2 border-dotted border-primary rounded-[50px] animate-slideS [animation-timeline:view()] [animation-range:entry_0%_cover_60%]">
          <h3
            className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
            bg-[length:200%_auto] animate-gradient "
          >
            I have completed my schooling from
          </h3>
        </div>

        <div className="absolute inset-0 top-[950px] left-[750px] h-[100px] w-[100px] border-r-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>
        <div className="absolute top-[1050px] left-[550px] h-[400px] w-[800px] flex items-center justify-center border border-muted-foreground hover:border-none transition-all duration-300 ease-in hover:shadow-md hover:shadow-primary hover:scale-[1.01] rounded-[5px] animate-box">
          <div className="school">
            <p>PRIMARY SCHOOL</p>
            <h3
              className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
            bg-[length:200%_auto] animate-gradient"
            >
              SUTARA MEHI MISSION SCHOOL
            </h3>
            <p>
              My primary school is one of the most memorable places of my
              childhood. It is located in a quiet area surrounded by trees, with
              a large playground where we used to play every day. The building
              was simple but colorful, with neatly arranged classrooms, a small
              library, and a garden full of flowers.
            </p>
            <div className="para">
              <a
                href="https://en.wikipedia.org/wiki/Bihar"
                target="_blank"
                rel="noreferrer"
              >
                view more →
              </a>
            </div>
          </div>
          <div className="school">
            <img src={sutara} alt="sutara school" />
          </div>
        </div>

        <div className="absolute inset-0 top-[1250px] left-[340px] h-[300px] w-[200px] border-l-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>
        <div className="absolute top-[1560px] left-[50px] h-[400px] w-[800px] flex items-center justify-center border border-muted-foreground hover:border-none transition-all duration-300 ease-in hover:shadow-md hover:shadow-primary hover:scale-[1.01] rounded-[5px] animate-box">
          <div className="school">
            <p>SECONDARY SCHOOL</p>
            <h3
              className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
            bg-[length:200%_auto] animate-gradient "
            >
              JAI MALA SIKSHA NIKETAN
            </h3>
            <p>
              My secondary school holds countless memories. It is located in a
              peaceful area surrounded by trees, with a large playground where
              we played every day. The building was simple but colorful, with
              neatly arranged classrooms, a small library, and a garden full of
              flowers.
            </p>
            <div className="para">
              <a
                href="https://en.wikipedia.org/wiki/Bihar"
                target="_blank"
                rel="noreferrer"
              >
                view more →
              </a>
            </div>
          </div>
          <div className="school">
            <img src={jai} alt="Jai Mala Siksha Niketan" />
          </div>
        </div>

        <div className="absolute inset-0 top-[1750px] left-[860px] h-[300px] w-[200px] border-r-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>

        <div className="absolute top-[2060px] left-[550px] h-[100px] w-[700px] flex items-center justify-center border-2 border-dotted border-primary rounded-[50px] animate-box">
          <h3
            className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
            bg-[length:200%_auto] animate-gradient "
          >
            Currently I am doing B.Tech in Computer Science from,
          </h3>
        </div>

        <div className="absolute inset-0 top-[2110px] left-[340px] h-[150px] w-[200px] bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px] border-l-2 border-primary animate-box"></div>
        <div className="absolute top-[2270px] left-[50px] h-[450px] w-[1200px] flex items-center justify-center border border-muted-foreground hover:border-none transition-all duration-300 ease-in hover:shadow-md hover:shadow-primary hover:scale-[1.01] rounded-[5px] animate-box">
          <div className="school">
            <h3
              className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
            bg-[length:200%_auto] animate-gradient "
            >
              ASSAM DOWN TOWN UNIVERSITY
            </h3>
            <p>
              Assam Down Town University (ADTU) was established in 2010 by the
              Down Town Charity Trust to fill a need for quality private higher
              education in the Northeast of India. The campus is located at
              Panikhaiti (Chandrapur), about 12 km from Dispur, Guwahati,
              overlooking the Brahmaputra River.
            </p>
            <div className="photo2">
              {clgimages.map((img, index) => (
                <div
                  key={index}
                  className="small-box"
                  onClick={() => setClgImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>
            <div className="para">
              <a href="https://adtu.in/" target="_blank" rel="noreferrer">
                view more →
              </a>
            </div>
          </div>
          <div className="school">
            <img src={clGImage} alt="Assam Down Town University" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBackground;
