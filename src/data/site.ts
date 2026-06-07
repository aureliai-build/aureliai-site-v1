export const site = {
  name: 'Aurelia AI',
  tagline: 'AI Automation & Knowledge Systems',
  description:
    'We help businesses automate workflows, build AI assistants, and unlock value from their data.',
  email: 'aureliai.common@gmail.com',
  linkedin: 'https://www.linkedin.com/company/aureliai-ai',
  github: 'https://github.com/aureliai-build',
} as const;

export const stats = [
  { value: '4+', label: 'Service areas' },
  { value: '3', label: 'Active prototypes' },
  { value: 'Cloud', label: 'Native delivery' },
] as const;

export const services = [
  {
    title: 'AI Knowledge Assistants',
    description: 'Internal GPT-style assistants trained on company knowledge.',
    gradient: 'from-violet-500 to-purple-600',
    icon: 'brain',
  },
  {
    title: 'Document Intelligence',
    description: 'Extract and analyze information from PDFs, invoices, and reports.',
    gradient: 'from-cyan-500 to-teal-500',
    icon: 'document',
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive business processes using AI.',
    gradient: 'from-amber-500 to-orange-500',
    icon: 'workflow',
  },
  {
    title: 'RAG Systems',
    description: 'Search and chat over company documents with grounded answers.',
    gradient: 'from-emerald-500 to-green-600',
    icon: 'search',
  },
  {
    title: 'Secure Deployment',
    description: 'Cloud-native architectures with privacy and access controls built in.',
    gradient: 'from-blue-500 to-indigo-600',
    icon: 'shield',
  },
  {
    title: 'Rapid Prototyping',
    description: 'Go from idea to working pilot in weeks, not months.',
    gradient: 'from-pink-500 to-rose-500',
    icon: 'spark',
  },
] as const;

export const projects = [
  {
    title: 'Chat with PDF Assistant',
    description: 'Upload documents and ask questions with grounded, cited answers.',
    url: 'https://github.com/aureliai-build',
  },
  {
    title: 'Invoice OCR Extraction',
    description: 'Extract structured fields from invoices and export to spreadsheets or ERP systems.',
    url: 'https://github.com/aureliai-build',
  },
  {
    title: 'Knowledge Base Search System',
    description: 'Semantic search and chat over internal documentation and SOPs.',
    url: 'https://github.com/aureliai-build',
  },
] as const;

export const pillars = [
  {
    title: 'Practical over hype',
    description:
      'We focus on workflows that save time and decisions that improve with better information—not AI for its own sake.',
  },
  {
    title: 'Built for your data',
    description:
      'Systems are designed around your documents, tools, and security requirements from day one.',
  },
  {
    title: 'Shippable pilots',
    description:
      'Small, measurable pilots help you validate ROI before scaling to production.',
  },
] as const;

export const engagementModels = [
  {
    name: 'Discovery',
    summary: 'Clarify the use case, data, and success metrics.',
    highlights: ['Stakeholder workshop', 'Technical assessment', 'Roadmap & scope'],
    cta: 'Book a call',
    featured: false,
  },
  {
    name: 'Pilot',
    summary: 'Build a focused prototype on your real workflows.',
    highlights: ['Working demo in weeks', 'Iterative feedback loops', 'Clear go/no-go criteria'],
    cta: 'Start a pilot',
    featured: true,
  },
  {
    name: 'Production',
    summary: 'Harden, integrate, and operate at scale.',
    highlights: ['Cloud deployment', 'Monitoring & handoff', 'Ongoing improvements'],
    cta: 'Talk to us',
    featured: false,
  },
] as const;

export const faqs = [
  {
    question: 'What kinds of problems do you typically solve?',
    answer:
      'Knowledge search, document extraction, internal assistants, and workflow automation—especially where teams spend time on repetitive reading, routing, or data entry.',
  },
  {
    question: 'Do you work with our existing documents and tools?',
    answer:
      'Yes. We integrate with common file stores, APIs, and cloud platforms, and design around your access and compliance needs.',
  },
  {
    question: 'How long does a pilot usually take?',
    answer:
      'Most focused pilots run a few weeks, depending on data readiness, integrations, and evaluation criteria.',
  },
  {
    question: 'Is our data used to train public models?',
    answer:
      'No. Engagements are scoped to your environment and policies. We prioritize private deployments and controlled data handling.',
  },
  {
    question: 'What do you need to get started?',
    answer:
      'A short description of the workflow, sample documents or systems involved, and what success looks like for your team.',
  },
] as const;

export const experience = [
  'Software Engineering',
  'AI / ML',
  'Cloud Infrastructure',
] as const;
