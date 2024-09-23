'use client'
import { motion } from "framer-motion";
import { useGlitch } from 'react-powerglitch'

interface tag {
    id: number,
    type: string,
    value: string
}

interface experience {
    id: number,
    enterprise: string,
    role: string,
    tags: Array<tag>,
    desc: string
}

const ExperienceComponent = ({exp}: { exp: experience }) => {
    const hoverGlitch = useGlitch({"playMode": "hover"});
    const glitch = useGlitch(
        {
          playMode: "always",
          "timing": {
            "duration": Math.random() * 8000,
            "easing": "ease-in"
          },
          "glitchTimeSpan": {
            "start": 0.14,
            "end": 0.25
          }
        }
    );
    
    return (
        <motion.div className="experiences flex flex-col p-2 my-4" 
            initial={{ opacity: 0, x: exp.id % 2 == 0 ? -100 : 100, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "none"}}
            transition={{ bounce: 0, type: "spring", duration: 0.3, delay: exp.id / 5}}
        >
            <h4 className="text-2xl">{ exp.enterprise }</h4>
            <p className="font-light text-slate-500 text-sm" ref={glitch.ref}>
                { exp.role }
            </p>
            <ul className="tags flex flex-wrap mb-2 mt-2 gap-3 p-0">
                {exp.tags.map((tag: tag, index: number) => 
                    <motion.li key={tag.id} className={`${tag.type} badge badge-primary btn buttom-secondary font-light pl-2 pr-2 pt-1 pb-1`}
                        initial={{ opacity: 0, filter: "blur(2px)" }}
                        animate={{ opacity: 1, filter: "none"}}
                        transition={{ bounce: 0, type: "spring", delay: index * Math.random()*3/10, duration: 0.3 }}
                        ref={hoverGlitch.ref}
                    >
                        { tag.value }
                    </motion.li>
                )}
            </ul>
            <p>{ exp.desc }</p>
        </motion.div>
    )
}
export default ExperienceComponent;
