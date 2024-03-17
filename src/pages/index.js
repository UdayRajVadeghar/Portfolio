import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import code from "./code.png";
import consulting from "./consulting.png";
import design from "./design.png";
import devuday from "./dev-uday.png";
import web1 from "./web1.png";
import web2 from "./web2.png";
import web3 from "./web3.png";
import web4 from "./web4.png";
import web5 from "./web5.png";
import web6 from "./web6.png";


export default function Home() {

  const [darkMode , setDarkMode] = useState(false);
  return (
    
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Uday Raj portfolio</title>
        </Head> 

        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons">DevelopedbyUDAY</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick = {() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
                </li>
                <li><a className = "bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href = "#">Resume</a></li>
              </ul>
            </nav> 
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">Uday Raj</h2>
              <h3 className="text-2xl py-2 md:text-3xl">Developer and designer.</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae vel eligendi cupiditate a blanditiis esse assumenda perferendis consectetur fugiat amet nihil est, eos animi reprehenderit repudiandae odit voluptatibus rerum!</p> 
            </div> 
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillLinkedin  />
              <AiFillTwitterCircle />
              <AiFillYoutube />
            </div>

            <div className="relative mx-auto bg-gradient-to-b from-teal-500 overflow-hidden rounded-full w-80 h-80 mt-20">

              <Image src = {devuday} layout="fill" objectFit="cover"/>

            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-2 ">Services I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className="text-teal-500">highlighed </span>Corporis veritatis neque, qui iste atque aliquam quidem nam voluptas cumque veniam id, fuga soluta. Doloremque pariatur eaque eos, magni alias doloribus!
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className="text-teal-500">highlighed </span>Corporis veritatis neque, qui iste atque aliquam quidem nam voluptas cumque veniam id, fuga soluta. Doloremque pariatur eaque eos, magni alias doloribus!
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={design} className="mx-auto" />
                <h3 className="text-l font-medium pt-8 pb-2">Beautiful designs</h3>
                <p className="py-3">
                  Creating elegand desgins is my hobby wtih integrated stuff
                </p>
                <h3 className="py-4 text-teal-600">Design tools I use</h3>
                <p className="text-gray-800 py-1">X</p>
                <p className="text-gray-800 py-1">X</p>
                <p className="text-gray-800 py-1">X</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={code} className="mx-auto" />
                <h3 className="text-l font-medium pt-8 pb-2">Beautiful designs</h3>
                <p className="py-3">
                  Creating elegand desgins is my hobby wtih integrated stuff
                </p>
                <h3 className="py-4 text-teal-600">Design tools I use</h3>
                <p className="text-gray-800 py-1">X</p>
                <p className="text-gray-800 py-1">X</p>
                <p className="text-gray-800 py-1">X</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={consulting} className="mx-auto" />
                <h3 className="text-l font-medium pt-8 pb-2">Beautiful designs</h3>
                <p className="py-3">
                  Creating elegand desgins is my hobby wtih integrated stuff
                </p>
                <h3 className="py-4 text-teal-600">Design tools I use</h3>
                <p className="text-gray-800 py-1">X</p>
                <p className="text-gray-800 py-1">X</p>
                <p className="text-gray-800 py-1">X</p>
              </div>
            </div>            
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-2">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className="text-teal-500">highlighed </span>Corporis veritatis neque, qui iste atque aliquam quidem nam voluptas cumque veniam id, fuga soluta. Doloremque pariatur eaque eos, magni alias doloribus!
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className="text-teal-500">highlighed </span>Corporis veritatis neque, qui iste atque aliquam quidem nam voluptas cumque veniam id, fuga soluta. Doloremque pariatur eaque eos, magni alias doloribus!
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:wrap">
              <div>
                <Image src = {web1}/>
              </div>
              <div className="basis-1/2">
                <Image src = {web2}/>
              </div>
              <div>
                <Image src = {web3}/>
              </div>
              <div>
                <Image src = {web4}/>
              </div>
              <div>
                <Image src = {web5}/>
              </div>
              <div>
                <Image src = {web6}/>
              </div>
            </div>

          </section>
        </main>
      </div>

      
  );
}
