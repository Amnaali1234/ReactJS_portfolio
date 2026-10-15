import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const lines = [
  { text: 'AMNA ALI', size: 22 },
  { text: 'Frontend Developer  |  Karachi, Pakistan', size: 11 },
  { text: 'GitHub: github.com/Amnaali1234', size: 10 },
  { text: 'LinkedIn: linkedin.com/in/amna-ali-5257472ba', size: 10 },
  { text: 'Portfolio: amna-ali-dev-portfolio.lovable.app', size: 10 },
  { text: '', size: 10 },
  { text: 'PROFILE', size: 13 },
  {
    text: 'Frontend developer focused on React, JavaScript, and responsive interfaces.',
    size: 10,
  },
  {
    text: 'Currently training in Modern Web & App Development at SMIT and publishing',
    size: 10,
  },
  { text: 'public UI projects that demonstrate layout, interaction, and component work.', size: 10 },
  { text: '', size: 10 },
  { text: 'TECHNICAL SKILLS', size: 13 },
  { text: 'Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS', size: 10 },
  { text: 'Tools: Git, GitHub, Firebase, Vite, VS Code', size: 10 },
  { text: '', size: 10 },
  { text: 'EDUCATION', size: 13 },
  { text: 'Modern Web & App Development  -  Saylani Mass IT Training (SMIT)', size: 10 },
  { text: 'Karachi, Pakistan  |  In progress', size: 10 },
  {
    text: 'Hands-on frontend training covering HTML, CSS, Bootstrap, JavaScript, and modern web workflows.',
    size: 10,
  },
  { text: '', size: 10 },
  { text: 'Self-directed frontend practice  -  Personal projects and GitHub', size: 10 },
  { text: 'Ongoing', size: 10 },
  {
    text: 'Building UI projects, landing pages, and React apps to strengthen layout and component thinking.',
    size: 10,
  },
  { text: '', size: 10 },
  { text: 'EXPERIENCE', size: 13 },
  {
    text: 'Independent project work and coursework currently make up practical experience.',
    size: 10,
  },
  { text: 'Formal employment can be added here when available.', size: 10 },
  { text: '', size: 10 },
  { text: 'SELECTED PROJECTS', size: 13 },
  { text: 'Resume Builder  -  milestone-5byamna.vercel.app', size: 10 },
  { text: 'React Counter App  -  GitHub: Amnaali1234/counter-app-react', size: 10 },
  { text: 'Nexcent Landing Page  -  GitHub: Amnaali1234/Hackathon-Nexcent-website', size: 10 },
  { text: 'Noor Collections  -  GitHub: Amnaali1234/Noor_collections_website', size: 10 },
  { text: 'Value Again  -  GitHub: Amnaali1234/Value_Again_Website', size: 10 },
]

function escapePdf(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

let y = 780
let stream = 'BT\n'
for (const line of lines) {
  if (line.text) {
    stream += `/F1 ${line.size} Tf\n1 0 0 1 50 ${y} Tm (${escapePdf(line.text)}) Tj\n`
  }
  y -= line.size === 22 ? 28 : line.size === 13 ? 22 : 16
}
stream += 'ET\n'

const streamBuffer = Buffer.from(stream, 'utf8')
const objects = [
  '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n',
  '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n',
  '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj\n',
  `4 0 obj << /Length ${streamBuffer.length} >> stream\n${stream}endstream\nendobj\n`,
  '5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n',
]

let pdf = '%PDF-1.4\n'
const offsets = [0]
for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf, 'utf8'))
  pdf += object
}

const xrefStart = Buffer.byteLength(pdf, 'utf8')
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += '0000000000 65535 f \n'
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

const output = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'Amna-Ali-Resume.pdf')
writeFileSync(output, pdf)
console.log(`Wrote ${output}`)
