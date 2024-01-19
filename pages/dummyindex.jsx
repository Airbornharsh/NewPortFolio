import NavBar from "../components/NavBar";
import Wrapper1 from "../components/Wrapper1";
import Image from "next/image";
import Link from "next/link";
import ResumeSvg from "../utils/Images/Home/Resume.svg";
import Logo from "../utils/Images/Logo2.svg";
// import OwlHello from "../utils/Images/Home/OwlHello.mp4";
import animationData from "../utils/Json/128872-wavey-birdie.json";
// import Lottie from "react-lottie";

export default function Home() {
  return (
    <Wrapper1>
      <div className="relative w-screen flex justify-center">
        <Image
          src={Logo}
          className="absolute top-12 left-12 z-10"
          height={"32"}
          width={"32"}
        />
        <div className="flex items-center justify-between w-[80vw] max-w-[70rem] z-10 max500:w-[90vw] max800:justify-center h-screen">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col">
              <p className="font-Kalam">My Name is</p>
              <h2 className="font-JejuHallasan text-[2.1rem]">HARSH KESHRI</h2>
              <p className="font-JosefinSans">I am a Full Stack Developer</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-LexendPeta text-[1.2rem]">Resume</p>
              <Link href="https://drive.google.com/file/d/187AQu-q63gaCEBgIOY7INIsBu55PF3jr/view?usp=sharing">
                <Image src={ResumeSvg} />
              </Link>
            </div>
          </div>
          <div className="w-[23rem] h-[13rem] bg-[#4DFF89] rounded-lg shadow-xl flex items-center font-JosefinSans font-bold text-[1.2rem] justify-around text-[#232432] max800:hidden">
            <p>Hello There</p>
            <div className="h-[9rem] w-[9rem]">
              {/* <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper1>
  );
}
