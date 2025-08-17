import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, MapPin, Phone, Linkedin, Award, GraduationCap } from 'lucide-react'
import { profile } from './data/profile'
import { Section, Card, Chip } from './components/primitives'

export default function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'awards', label: 'Awards' },
    { id: 'languages', label: 'Languages' },
    { id: 'references', label: 'References' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 text-slate-800 dark:text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-bold tracking-tight text-slate-900 dark:text-slate-100 display">
            {profile.name.toUpperCase()}
          </a>
          <nav className="hidden md:flex gap-2">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="px-3 py-2 rounded-xl text-sm hover:bg-slate-100 dark:hover:bg-slate-800/70 transition">
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90">
              <Download className="size-4" /> Download CV
            </a>
            <button onClick={() => setDark(v => !v)} className="px-3 py-2 rounded-xl text-sm border border-slate-300 dark:border-slate-700">
              {dark ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-slate-500">{profile.title}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2 display">{profile.name}</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">{profile.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-teal-600 text-white hover:bg-teal-700">
                <Download className="size-4" /> Download CV
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Mail className="size-4" /> Email Me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> {profile.location}</span>
              <span className="inline-flex items-center gap-2"><Phone className="size-4" /> {profile.phone}</span>
              <a href={profile.linkedin} className="inline-flex items-center gap-2 hover:underline"><Linkedin className="size-4" /> LinkedIn</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="justify-self-center">
            <div className="relative">
              <img src="/me.jpg" alt={`${profile.name} headshot`} className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-xl" />
              <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-tr from-teal-400/20 to-indigo-400/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About">
        <Card>
          <p className="mt-2 text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Microsoft Excel','Microsoft Word','SQL Accounting','Audit Express','Budgeting','Financial Reporting'].map(k => (
              <Chip key={k}>{k}</Chip>
            ))}
          </div>
        </Card>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-6 mt-6">
          {profile.experience.map((job, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{job.company} — {job.location}</p>
                </div>
                <span className="text-sm text-slate-500">{job.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                {job.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.skills.map((s, i) => <Chip key={i}>{s}</Chip>)}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {profile.education.map((e, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-5" />
                <div>
                  <h3 className="font-semibold">{e.program}</h3>
                  <p className="text-sm text-slate-500">{e.school}</p>
                  <p className="text-sm text-slate-500">{e.detail}</p>
                  <p className="text-sm text-slate-500">{e.period}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="awards" title="Awards">
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {profile.awards.map((a, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                <Award className="mt-1 size-5" />
                <div>
                  <h3 className="font-semibold">{a.title}</h3>
                  <p className="text-sm text-slate-500">{a.org} — {a.year}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="languages" title="Languages">
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.languages.map((l, i) => (
            <Chip key={i}>{l.name} — {l.level}</Chip>
          ))}
        </div>
      </Section>

      <Section id="references" title="References">
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {profile.references.map((r, i) => (
            <Card key={i}>
              <h3 className="font-semibold">{r.name}</h3>
              <p className="text-sm text-slate-500">{r.role}</p>
              <div className="mt-2 text-sm">
                <p>Phone: <a className="underline" href={`tel:${r.phone}`}>{r.phone}</a></p>
                <p>Email: <a className="underline" href={`mailto:${r.email}`}>{r.email}</a></p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-wrap items-center gap-4 justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex gap-3">
            <a href="/cv.pdf" className="underline">Download CV</a>
            <a href={`mailto:${profile.email}`} className="underline">Email Me</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
