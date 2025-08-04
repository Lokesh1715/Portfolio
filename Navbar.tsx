import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex gap-4 justify-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/certifications">Certifications</Link>
      <Link href="/activities">Activities</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
