import React, { useState } from "react";
import "./background.css";
import bihar from "../assets/images/bihar.jpg";
import bihar2 from "../assets/images/bihar2.jpg";
import bihar3 from "../assets/images/bihar3.jpg";
import sutara from "../assets/images/sutara.jpg";
import jai from "../assets/images/jai.jpg";
import clg from "../assets/images/down.jpg";
import clg2 from "../assets/images/d.jpg";
import clg3 from "../assets/images/do.jpg";
import { GraduationCap, MapPin, Calendar, BookOpen, ArrowRight } from "lucide-react";

const MyBackground = () => {
  const stateimages = [bihar, bihar2, bihar3];
  const [bigImage, setBigImage] = useState(stateimages[0]);

  const clgimages = [clg, clg2, clg3];
  const [clGImage, setClgImage] = useState(clgimages[0]);

  return (
    <div className="hero2 relative select-none justify-center items-center ">
      <div className="Background-container relative max-w-[1600px] mx-auto">
        {/* PATH 1 */}
        <div className="absolute inset-0 top-[10px] left-[150px] h-[150px] w-[100px] border-l-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-bottom bg-[length:100%_2px]"></div>

        {/* HEADER Capsule 1: Bihar Hometown */}
        <div className="absolute inset-0 top-[100px] left-[260px] h-[100px] w-[500px] flex items-center justify-center text-center border-2 border-dashed border-primary/60 bg-card/30 backdrop-blur-md rounded-[4px] shadow-sm animate-box">
          <h3 className="text-xl font-mono font-black tracking-wider uppercase text-foreground">
            I am from Bihar
          </h3>
        </div>

        {/* PATH 2 */}
        <div className="absolute inset-0 top-[160px] left-[770px] h-[180px] w-[100px] border-r-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>

        {/* CARD 1: Bihar Hometown */}
        <div className="absolute top-[350px] left-[400px] h-[400px] max-w-[1100px] flex items-stretch border border-border/40 bg-card/45 dark:bg-card/25 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 rounded-[4px] overflow-hidden hover:scale-[1.005] transition-all duration-500 ease-out animate-card-scale">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(ellipse_at_center,#000_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="w-1/2 h-full p-6 flex items-center justify-center relative group">
            <div className="w-full h-full overflow-hidden border border-border/20 rounded-[4px]">
              <img src={bigImage} alt="Big Display" className="w-full h-full object-cover  hover:scale-[1.02] transition-all duration-700 ease-in-out" />
            </div>
          </div>

          <div className="w-1/2 h-full p-8 flex flex-col justify-between text-left relative z-10">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <MapPin className="w-3 h-3" /> PATNA, BIHAR
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  HOMETOWN
                </span>
              </div>
              <h3 className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mb-3">
                Bihar
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed max-w-[500px]">
                A state where history, culture, and nature blend beautifully,
                Bihar shines with ancient monuments like Nalanda and Bodh Gaya,
                lush green fields, and the holy Ganga. Its festivals, vibrant
                traditions, and warm hospitality make it unique. Rich heritage and
                natural beauty together create Bihar’s timeless charm.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                {stateimages.map((img, index) => (
                  <div
                    key={index}
                    className={`w-16 h-10 rounded-[4px] overflow-hidden border-2 cursor-pointer transition-all hover:opacity-80 ${
                      bigImage === img ? "border-primary" : "border-border/60"
                    }`}
                    onClick={() => setBigImage(img)}
                  >
                    <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="https://en.wikipedia.org/wiki/Bihar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-foreground/75 hover:text-foreground border-b border-border/60 hover:border-foreground pb-0.5 transition-all duration-200 group"
                >
                  <span>view more</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PATH 3 */}
        <div className="absolute inset-0 top-[500px] left-[40px] h-[450px] w-[340px] border-t-2 border-l-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-bottom bg-[length:100%_2px]"></div>

        {/* HEADER Capsule 2: Schooling */}
        <div className="absolute top-[900px] left-[150px] h-[100px] w-[600px] flex items-center justify-center border-2 border-dashed border-primary/60 bg-card/30 backdrop-blur-md rounded-[4px] animate-slideS [animation-timeline:view()] [animation-range:entry_0%_cover_60%]">
          <h3 className="text-xl font-mono font-black tracking-wider uppercase text-foreground">
            I have completed my schooling from
          </h3>
        </div>

        {/* PATH 4 */}
        <div className="absolute inset-0 top-[950px] left-[750px] h-[100px] w-[100px] border-r-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>
        
        {/* CARD 2: Primary School */}
        <div className="absolute top-[1050px] left-[550px] h-[400px] w-[800px] flex items-stretch border border-border/40 bg-card/45 dark:bg-card/25 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 rounded-[4px] overflow-hidden hover:scale-[1.005] transition-all duration-500 ease-out animate-box">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(ellipse_at_center,#000_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="w-1/2 h-full p-8 flex flex-col justify-between text-left relative z-10">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <Calendar className="w-3 h-3" /> ESTD 1998
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <MapPin className="w-3 h-3" /> PATNA, BIHAR
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <GraduationCap className="w-3 h-3" /> PRIMARY
                </span>
              </div>
              <h3 className="text-[20px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mb-2">
                SUTARA MEHI MISSION SCHOOL
              </h3>
              <p className="text-xs text-foreground/75 leading-relaxed mb-4">
                My primary school is one of the most memorable places of my
                childhood. It is located in a quiet area surrounded by trees, with
                a large playground where we used to play every day. The building
                was simple but colorful, with neatly arranged classrooms, a small
                library, and a garden full of flowers.
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-[10px] text-foreground/70 mb-2 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                  <span>Creative Arts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                  <span>Green Playgrounds</span>
                </div>
              </div>
            </div>
            
            <div>
              <a
                href="https://en.wikipedia.org/wiki/Bihar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-foreground/75 hover:text-foreground border-b border-border/60 hover:border-foreground pb-0.5 transition-all duration-200 group"
              >
                <span>view more</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="w-1/2 h-full p-6 flex items-center justify-center relative group">
            <div className="w-full h-full overflow-hidden border border-border/20 rounded-[4px]">
              <img src={sutara} alt="sutara school" className="w-full h-full object-cover  hover:scale-102 transition-all duration-700 ease-in-out" />
            </div>
          </div>
        </div>

        {/* PATH 5 */}
        <div className="absolute inset-0 top-[1250px] left-[340px] h-[300px] w-[200px] border-l-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>
        
        {/* CARD 3: Secondary School */}
        <div className="absolute top-[1560px] left-[50px] h-[400px] w-[800px] flex items-stretch border border-border/40 bg-card/45 dark:bg-card/25 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 rounded-[4px] overflow-hidden hover:scale-[1.005] transition-all duration-500 ease-out animate-box">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(ellipse_at_center,#000_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="w-1/2 h-full p-8 flex flex-col justify-between text-left relative z-10">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <Calendar className="w-3 h-3" /> ESTD 2005
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <MapPin className="w-3 h-3" /> PATNA, BIHAR
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <GraduationCap className="w-3 h-3" /> HIGH SCHOOL
                </span>
              </div>
              <h3 className="text-[20px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mb-2">
                JAI MALA SIKSHA NIKETAN
              </h3>
              <p className="text-xs text-foreground/75 leading-relaxed mb-4">
                My secondary school holds countless memories. It is located in a
                peaceful area surrounded by trees, with a large playground where
                we played every day. The building was simple but colorful, with
                neatly arranged classrooms, a small library, and a garden full of
                flowers.
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-[10px] text-foreground/70 mb-2 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                  <span>Academic Base</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                  <span>Science Labs</span>
                </div>
              </div>
            </div>
            
            <div>
              <a
                href="https://en.wikipedia.org/wiki/Bihar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-foreground/75 hover:text-foreground border-b border-border/60 hover:border-foreground pb-0.5 transition-all duration-200 group"
              >
                <span>view more</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="w-1/2 h-full p-6 flex items-center justify-center relative group">
            <div className="w-full h-full overflow-hidden border border-border/20 rounded-[4px]">
              <img src={jai} alt="Jai Mala Siksha Niketan" className="w-full h-full object-cover  hover:scale-102 transition-all duration-700 ease-in-out" />
            </div>
          </div>
        </div>

        {/* PATH 6 */}
        <div className="absolute inset-0 top-[1750px] left-[860px] h-[300px] w-[200px] border-r-2 border-primary bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px]"></div>

        {/* HEADER Capsule 3: B.Tech */}
        <div className="absolute top-[2060px] left-[550px] h-[100px] w-[750px] flex items-center justify-center border-2 border-dashed border-primary/60 bg-card/30 backdrop-blur-md rounded-[4px] animate-box">
          <h3 className="text-xl font-mono font-black tracking-wider uppercase text-foreground">
            Currently I am doing B.Tech in Computer Science from
          </h3>
        </div>

        {/* PATH 7 */}
        <div className="absolute inset-0 top-[2110px] left-[340px] h-[150px] w-[200px] bg-gradient-to-r from-primary via-accent to-primary bg-no-repeat bg-top bg-[length:100%_2px] border-l-2 border-primary animate-box"></div>
        
        {/* CARD 4: University ADTU */}
        <div className="absolute top-[2270px] left-[50px] h-[450px] w-[1200px] flex items-stretch border border-border/40 bg-card/45 dark:bg-card/25 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 rounded-[4px] overflow-hidden hover:scale-[1.005] transition-all duration-500 ease-out animate-box">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(ellipse_at_center,#000_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="w-1/2 h-full p-8 flex flex-col justify-between text-left relative z-10">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <Calendar className="w-3 h-3" /> 2023 - 2027
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <MapPin className="w-3 h-3" /> GUWAHATI, ASSAM
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider uppercase border border-border bg-muted/30 px-2.5 py-1 rounded-[3px] text-foreground/80">
                  <GraduationCap className="w-3 h-3" /> B.TECH CSE
                </span>
              </div>
              <h3 className="text-[22px] font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mb-2">
                ASSAM DOWN TOWN UNIVERSITY
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                Assam Down Town University (ADTU) was established in 2010 by the
                Down Town Charity Trust to fill a need for quality private higher
                education in the Northeast of India. The campus is located at
                Panikhaiti (Chandrapur), about 12 km from Dispur, Guwahati,
                overlooking the Brahmaputra River.
              </p>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-foreground/70 mb-4 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                  <span>Overlooking Brahmaputra</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                  <span>State-of-the-art Labs</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                {clgimages.map((img, index) => (
                  <div
                    key={index}
                    className={`w-16 h-10 rounded-[4px] overflow-hidden border-2 cursor-pointer transition-all hover:opacity-80 ${
                      clGImage === img ? "border-primary" : "border-border/60"
                    }`}
                    onClick={() => setClgImage(img)}
                  >
                    <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <a 
                  href="https://adtu.in/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-foreground/75 hover:text-foreground border-b border-border/60 hover:border-foreground pb-0.5 transition-all duration-200 group"
                >
                  <span>view more</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full p-6 flex items-center justify-center relative group">
            <div className="w-full h-full overflow-hidden border border-border/20 rounded-[4px]">
              <img src={clGImage} alt="Assam Down Town University" className="w-full h-full object-cover  hover:scale-102 transition-all duration-700 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBackground;
