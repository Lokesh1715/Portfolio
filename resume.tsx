export default function Resume() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-4">Resume</h1>
      <iframe
        src="/resume.pdf"
        className="w-full h-[600px] mb-4"
        title="Resume Preview"
      />
      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </a>
    </section>
  );
}
