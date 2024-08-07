import ReactMarkdown from 'react-markdown'

export default async function Home() {

  const response = await fetch("https://fringe-obsidian-louse.glitch.me/my/info");
  const profile = await response.json();

  return (
    <main className="flex flex-col items-center p-20">
        <section className="profile flex flex-col items-center ">
          <div className="picture relative">
            <img
              src={`${profile.picture.LOW}`}
              alt="profile_picture"
              className="profile_pic rounded-full select-none"
              id="profile_pic"
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
              {profile.tagsTipadas.map((tag: any) =>   
                <li key={tag.id} className={`${tag.type} badge buttom-secondary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:buttom-primary dark:buttom-primary`}>
                  { tag.value }
                  </li>
                )
              }
            </ul>
          </nav>
        </section>

        <article className="grid gap-4 max-w-screen-md text-justify">
          <section className="container">
            <div>
              <h1 className="text-center text-3xl font-semibold">{profile.sobre.title}</h1>
              
              <ReactMarkdown>{profile.sobre.resume}</ReactMarkdown>
              <ReactMarkdown>{profile.sobre.experience}</ReactMarkdown>
            </div>
          </section>
          <section className="container">
            <div>
              <h1 className="text-center text-3xl font-semibold">{profile.formacao.title}</h1>
              
              <ReactMarkdown>{profile.formacao.ifsp}</ReactMarkdown>
              <ReactMarkdown>{profile.formacao.cursos}</ReactMarkdown>
            </div>
          </section>
        </article>
    </main>
  );
}
