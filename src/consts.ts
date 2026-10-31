// ─────────────────────────────────────────────────────────────
//  Edit this file to make the site yours.
//  Everything on the home page (name, bio, skills, experience,
//  links) comes from here.
// ─────────────────────────────────────────────────────────────

export const SITE = {
	name: 'Hamdhulla Adam',
	title: 'Hamdhulla Adam — Personal Site & Blog',
	description:
		'Hamdhulla Adam: hospitality professional, technology enthusiast and creative storyteller from the Maldives.',
	locale: 'en',
};

export const PROFILE = {
	headline: 'Hello, I’m Hamdhulla.',
	role: 'Hospitality Professional · Technology Enthusiast · Creative Storyteller',
	location: 'Maldives',
	// Put a photo at public/avatar.jpg and set this to '/avatar.jpg'. Leave empty to show initials.
	avatar: '',
	intro:
		'A proud Maldivian with a passion for connecting people, exploring technology, and bringing stories to life.',
	about: [
		'As an Airport Service Coordinator at Angsana Velavaru, I help guests begin and end their island journeys with care. My work brings together coordination, problem-solving, and the personal attention that makes people feel welcome.',
		'My background in software design and development inspires me to explore practical digital solutions, from useful applications to tools that simplify everyday work. I enjoy learning, experimenting, and turning ideas into something people can use.',
		'Creativity is another important part of my life. Through AI-assisted visuals, animation, and storytelling, I explore new ways to share Maldivian culture, folklore, and everyday island experiences.',
		'At the heart of everything I do is a simple ambition: to keep growing, create meaningful work, and make a positive difference for the people around me.',
	],
	email: '', // add a public contact email to show a "Get in touch" button
	resumeUrl: '', // e.g. '/resume.pdf' (place the file in public/)
};

export const SOCIALS: { label: string; href: string }[] = [
	{ label: 'GitHub', href: 'https://github.com/Hamdh7976' },
];

export const SKILLS = [
	'Guest services',
	'Coordination',
	'Problem-solving',
	'Software design & development',
	'AI-assisted visuals',
	'Animation',
	'Storytelling',
];

export const EXPERIENCE: { period: string; title: string; org: string; summary: string }[] = [
	{
		period: 'Present',
		title: 'Airport Service Coordinator',
		org: 'Angsana Velavaru',
		summary: 'Helping guests begin and end their island journeys with care: coordination, problem-solving and personal attention.',
	},
];

export const PROJECTS: { name: string; description: string; href?: string }[] = [];
