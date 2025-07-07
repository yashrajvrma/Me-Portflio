type ProjectProps = {
  title: string;
  description: string;
};
const ProjectItem = ({ title, description }: ProjectProps) => (
  <div className="mb-4">
    <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "Vecto3d",
      description: "Transform your 2D vectors to 3D models",
    },
    {
      title: "Next.js + Notion Waitlist Template",
      description: "A simple Next.js and Notion as CMS waitlist template",
    },
    {
      title: "KalaKunj",
      description: "Traditional Indian art showcase in AR",
    },
    {
      title: "voyageVR",
      description: "End traveller focused VR tourism",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
