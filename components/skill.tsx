export default function Skills() {
  const skills = [
    "React js",
    "Next js",
    "Express js",
    "Node Js",
    "Bun",
    "Tailwind CSS",
    "Three Js",
    "Vercel",
    "Aws",
    "Javascript",
    "Typescript",
    "Vector DB",
    "MongoDB",
    "Prisma",
    "Drizzle",
    "Postgres",
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
