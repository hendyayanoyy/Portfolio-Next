import React from "react";
import CardProject from "./card";
import "../../app/globals.css";


const projects = [
    {
        imageSrc: "/Image/gstc.png",
        title: "GSTC Company Profile",
        description:
            "The Global Sustainable Tourism Council (GSTC®) is managing the GSTC Criteria, global standards for sustainable travel and tourism as well as providing international accreditation for sustainable tourism Certification Bodies.",
        buttons: ["Next", "Tailwind"],
    },
    {
        imageSrc: "/Image/mbis.png",
        title: "Official Web MBIS",
        description:
            "Mitra Bintaro Islamic School (MBIS) is a junior high school that integrates academic excellence with Islamic values. At MBIS, we are committed to fostering a holistic educational experience that nurtures both intellectual growth and spiritual development.",
        buttons: ["Php", "Tailwind", "Javascript"],
    },
    // Tambahkan proyek lain di sini
];

export default function ProjectsPage() {
    return (
        <div id="projects" className="flex flex-wrap justify-center w-full gap-10 py-40">
            {projects.map((project, index) => (
                <div key={index} className="flex justify-center w-full sm:w-1/2 lg:w-1/3">
                    <CardProject
                        imageSrc={project.imageSrc}
                        title={project.title}
                        description={project.description}
                        buttons={project.buttons}
                    />
                </div>
            ))}
        </div>
    );
}
