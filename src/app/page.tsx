'use client'
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useGlitch } from 'react-powerglitch'
import { TypeAnimation } from 'react-type-animation';

import ReactMarkdown from 'react-markdown'

export default function Home() {

  const [data, setProfile] = useState(null)
  const bootServices = [
    " Started Create Static Device Nodes in /dev.",
    " Starting udev Kernel Device Manager...",
    " Reached target Local Encrypted Volumes.",
    " Reached target Paths.",
    " Starting udev Coldplug all Devices...",
    " Reached target Slices.",
    " Reached target Swaps.",
    " Mounted /boot.",
    " Mounted /var.",
    " Starting Flush Journal to Persistent Storage...",
    " Started udev Kernel Device Manager.",
    " Started udev Coldplug all Devices.",
    " Reached target System Initialization.",
    " Listening on udev Kernel Socket.",
    " Listening on udev Control Socket.",
    " Reached target Basic System.",
    " Started Flush Journal to Persistent Storage.",
    " Starting Network Service...",
    " Reached target Network is Online.",
    " Started LSB: AppArmor initialization.",
    " Starting Load Kernel Modules...",
    " Started Apply Kernel Variables.",
    " Reached target Remote File Systems.",
    " Starting Update UTMP about System Boot/Shutdown...",
    " Started Update UTMP about System Boot/Shutdown.",
    " Starting Permit User Sessions...",
    " Started Permit User Sessions.",
    " Starting GNOME Display Manager...",
    " Started GNOME Display Manager.",
    " Started D-Bus System Message Bus.",
    " Reached target Graphical Interface.",
    " Starting Virtualization daemon...",
    " Started Virtualization daemon.",
    " Starting Load/Save Random Seed...",
    " Started Load/Save Random Seed.",
    " Started Login Service.",
    " Reached target Multi-User System."
  ]

  useEffect(() => {
    fetch("https://fringe-obsidian-louse.glitch.me/my/info")
    .then(
      response => response.json()
      .then(data => setProfile(data))
    )
  }, []);

  const glitch = useGlitch(
    {
      playMode: "always",
      "timing": {
        "duration": 5000,
        "easing": "ease-in"
      },
      "glitchTimeSpan": {
        "start": 0.14,
        "end": 0.25
      },
      "shake": {
        "velocity": 21,
        "amplitudeX": 0.47,
        "amplitudeY": 0.4
      },
      "slice": {
        "minHeight": 0.05
      }
    }
  );
  const hoverGlitch = useGlitch({"playMode": "hover"});

  if(!data) return (
    <main className="min-h-screen">      
      <section className="booting">
        {bootServices.map((service, i) => <motion.p key={i} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ bounce: 0, delay: i * 0.15, duration: 0.1 }}>
          [ <span className="text-green-400" >OK</span> ] {service}
        </motion.p>)}
      </section>
    </main>
  )
  
  interface profileInterface {
   picture: any,
   name: string,
   tagsTipadas: Array<any>
   formacao: any
  }
  let profile: profileInterface = data;

  return (
    <main className="flex flex-col items-center p-20">
        <section className="profile flex flex-col items-center ">
          <div className="picture relative" ref={hoverGlitch.ref}>
            <img
              src={`${profile.picture.LOW}`}
              alt="profile_picture"
              className="profile_pic rounded-full select-none"
              id="profile_pic"
              ref={glitch.ref}
            />
          </div>

          <h1
            className="text-2xl font-light mt-2 mb-1"
          >
            { profile.name }
          </h1>
        </section>

        <section className="mb-8 max-w-screen-sm">
          <nav className="profile_tags mb-3">
            <ul className="tags flex-row flex flex-wrap justify-center mb-2 mt-2 gap-3 select-none">
              {profile.tagsTipadas.map((tag: any, index: number) =>   
                <motion.li 
                  key={tag.id}
                  className={`${tag.type} badge buttom-secondary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:buttom-primary dark:buttom-primar`}
                  initial={{ opacity: 0, filter: "blur(2px)" }}
                  animate={{ opacity: 1, filter: "none"}}
                  transition={{ bounce: 0, type: "spring", delay: index * Math.random()*3/10, duration: 0.3 }}
                  ref={hoverGlitch.ref}
                > <span>{ tag.value }</span>
                </motion.li>
              )}
            </ul>
          </nav>
        </section>

        <article className="grid gap-4 max-w-screen-md text-justify">
          <motion.section className="container"
            initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "none"}}
            transition={{ bounce: 0, type: "spring", delay: .1, duration: 0.3 }}
          >
            <div>
            <motion.h1 className="text-center text-3xl font-semibold12"
              initial={{ opacity: 0, x: 100, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "none"}}
              transition={{ bounce: 0, type: "spring", delay: .2, duration: 0.3 }}
              ref={hoverGlitch.ref}
              >
                Sobre mim
              </motion.h1>
              
              <p>Eu sou um desenvolvedor iniciante com uma paixão por tecnologia e aprendizado constante. 
                Apesar de ainda não ter experiência profissional, possuo uma formação sólida em programação e habilidades de resolução de problemas. 
                Estou ansioso para aplicar o que aprendi em projetos futuros e continuar desenvolvendo minhas habilidades.
              </p>

              <p>Tenho experiência em trabalhar com linguagens de programação como <em>Java</em>, <em>Python</em> e <em>JS</em>, 
                além de ter conhecimento básico de ferramentas de desenvolvimento de software, como <em>Git</em> e <em>Linux</em>. 
                Além disso, sou capaz de trabalhar em equipe eficazmente para alcançar objetivos comuns. 
                Estou sempre procurando por novos desafios e oportunidades para crescer como desenvolvedor e adquirir experiência profissional.
              </p>
            </div>
          </motion.section>
          <motion.section className="container"
            initial={{ opacity: 0, x: 100, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "none"}}
            transition={{ bounce: 0, type: "spring", delay: .2, duration: 0.3 }}
          >
            <div>
              <motion.h1 className="text-center text-3xl font-semibold"
              initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "none"}}
              transition={{ bounce: 0, type: "spring", delay: .2, duration: 0.3 }}
              ref={hoverGlitch.ref}
              >
                {profile.formacao.title}
              </motion.h1>
              
              <ul className="grades">
                {profile.formacao.grades.map((grade: any, index: number) => { return (
                  <li key={index} className="grade-infos my-4">
                    <div>
                        <p>
                          <span className="text-lg font-bold">{grade.title} - {grade.institution}</span>
                          <span> ({grade.date})</span>
                        </p>
                      <ReactMarkdown>{grade.description}</ReactMarkdown>
                    </div>
                  </li>

                )})}
              </ul>
            </div>
          </motion.section>
        </article>
    </main>
  );
}
