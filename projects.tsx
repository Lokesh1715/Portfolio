export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <img src="/project-images/sample.jpg" alt="Project" className="mb-2 rounded" />
          <h2 className="text-xl font-bold">Project Title</h2>
          <p className="text-sm">Brief description about the project.</p>
        </div>
      </div>
    </section>
  );
}
