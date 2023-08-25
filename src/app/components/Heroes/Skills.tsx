import SkillCard from "../Cards/SkillCard";

export default function Skills() {
    return (
        <div className="flex justify-center flex-col items-center mt-20 ">
            <p className="text-3xl font-bold ">Skills</p>
            <div className="flex gap-4 flex-wrap w-auto mt-8 justify-center">
                <SkillCard skill="React" />
                <SkillCard skill="Angular" />
                <SkillCard skill="Next" />
                <SkillCard skill="MongoDB" />
                <SkillCard skill="TypeScript" />
                <SkillCard skill="JavaScript" />
                <SkillCard skill="Java" />
                <SkillCard skill="SCSS" />
                <SkillCard skill="Git" />
                <SkillCard skill="SQL" />
            </div>
        </div>
    )
}