import ExperienceCard from "../Cards/ExperienceCard";

export default function Experience() {

    const experiences = [
        {
            'company': 'Studio Gek',
            'role': 'Developer & Technical consultant',
            'date': 'March 2023 - Present',
            'icon': 'https://yt3.googleusercontent.com/Ak5-KfSpjDFpZpLy-QutumUjxE7dFny56-H9hYi4gIsAHGmOowvLAXLnF_Ft8MR2HOpw7OL4=s900-c-k-c0x00ffffff-no-rj',
            'description': `Oversight on technical operations for content creator group with over 125,000 subscribers, and 3,000 plus patrons. Developed and 
            deployed various front and backend applications to boost channel engagement.`
        },
        {
            'company': 'Fidelity Investments',
            'role': 'Software Engineer Intern',
            'date': 'June 2023 - August 2023',
            'icon': 'https://pbs.twimg.com/profile_images/1278360830367674368/SfqcgSVD_400x400.jpg',
            'description': `Worked as a Frontend engineer on internal AI chat based application for call associates. Integrated various features through Angular to
            help decrease associates time spent on phones.`
        },

        {

            'company': 'Fidelity Investments',
            'role': 'Software Engineer Intern',
            'date': 'June 2022 - August 2022',
            'icon': 'https://pbs.twimg.com/profile_images/1278360830367674368/SfqcgSVD_400x400.jpg',
            'description': `Worked as a Backend engineer utilizing Java Spring & SQL to build out several features. These features allowed clients to view their anticpated shares of stock based on various dates.`

        }
    ]

    return (
        <div className="flex justify-center flex-col items-center mt-20">
            <p className="text-3xl font-bold">Professional Experience</p>
            <div className="grid grid-cols-3 mt-8 gap-5">
                {experiences.map((experience) => {
                    return (
                        <ExperienceCard props={experience} />
                    )
                })}
            </div>
        </div>
    )
}