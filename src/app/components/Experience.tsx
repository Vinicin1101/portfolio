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
    return (
        <div className="experiences flex flex-col p-2 my-4">
            <h4 className="text-2xl">{ exp.enterprise }</h4>
            <p className="font-light text-slate-500 text-sm">
                { exp.role }
            </p>
            <ul className="tags flex flex-wrap mb-2 mt-2 gap-3 p-0">
                {exp.tags.map((tag: tag) => 
                    <li key={tag.id} className={`${tag.type} badge badge-primary btn buttom-secondary font-light pl-2 pr-2 pt-1 pb-1`}>
                        { tag.value }
                    </li>
                )}
            </ul>
            <p>{ exp.desc }</p>
        </div>
    )
}
export default ExperienceComponent;
