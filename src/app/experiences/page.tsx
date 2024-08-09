import ExperienceComponent from "../components/Experience";

interface expObj {
    id: number,
    enterprise: string,
    role: string,
    desc: string,
    tags: Array<any>
}

const Experiences = async () => {
    
    const response = await fetch("https://fringe-obsidian-louse.glitch.me/my/experiences");
    const experiences: Array<any> = await response.json();

    return (
        <main className="min-h-screen flex flex-col items-center">
            <article className="container max-w-screen-md">
                <section className="col-md-8 offset-md-2 mt-3">
                    <h2 className="text-center text-3xl text-semibold my-8 mb-10">Experiências</h2>
                    {experiences.map((exp: expObj, index: number) =>
                        <ExperienceComponent key={exp.id} exp={exp}/>
                    )}
                </section>
            </article>
        </main>
    )
}

export default Experiences;