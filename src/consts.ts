// ─────────────────────────────────────────────────────────────
//  Edit this file to make the site yours.
//  Everything on the home page (name, bio, skills, experience,
//  links) comes from here.
// ─────────────────────────────────────────────────────────────

export const SITE = {
	name: 'Hamdhulla',
	title: 'Hamdhulla — Personal Site & Blog',
	description: 'Personal website and blog: notes on work, projects and ideas.',
	locale: 'en',
};

export const PROFILE = {
	headline: 'Hi, I’m Hamdhulla.',
	role: 'Developer · Writer · Lifelong learner',
	location: 'Somewhere on Earth',
	// Put a photo at public/avatar.jpg and set this to '/avatar.jpg'. Leave empty to show initials.
	avatar: '',
	intro:
		'I build things for the web and write about what I learn along the way. This is my corner of the internet: a bit about me, and a blog where I share ideas, projects and lessons.',
	about: [
		'Write a few sentences about yourself here: what you do, what you care about, and what you are working on right now.',
		'Add a second paragraph about your background, interests outside of work, or what people can reach out to you about.',
	],
	email: 'you@example.com',
	resumeUrl: '', // e.g. '/resume.pdf' (place the file in public/)
};

export const SOCIALS: { label: string; href: string }[] = [
	{ label: 'GitHub', href: 'https://github.com/Hamdh7976' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
	{ label: 'X / Twitter', href: 'https://x.com/your-username' },
];

export const SKILLS = [
	'JavaScript',
	'TypeScript',
	'HTML & CSS',
	'Node.js',
	'Python',
	'SQL',
	'Git',
	'Technical writing',
];

export const EXPERIENCE: { period: string; title: string; org: string; summary: string }[] = [
	{
		period: '2024 — Present',
		title: 'Your current role',
		org: 'Company / Organization',
		summary: 'One or two lines on what you do and the impact you have had.',
	},
	{
		period: '2021 — 2024',
		title: 'Previous role',
		org: 'Company / Organization',
		summary: 'Highlights, projects you are proud of, or skills you developed.',
	},
	{
		period: '2017 — 2021',
		title: 'Degree / Program',
		org: 'University / School',
		summary: 'Area of study, notable coursework or achievements.',
	},
];

export const PROJECTS: { name: string; description: string; href?: string }[] = [
	{
		name: 'Project One',
		description: 'A short description of something you built and why it matters.',
		href: 'https://github.com/your-username/project-one',
	},
	{
		name: 'Project Two',
		description: 'Another project: the problem, your approach, and the result.',
	},
];
