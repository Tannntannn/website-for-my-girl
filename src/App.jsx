import { forwardRef, useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import './App.css'

const memories = [
  {
    id: 1,
    title: 'The moment it was always you',
    date: 'Day 1',
    place: 'Us',
    text: 'Somewhere between our laughs, late-night talks, and all the little moments, my heart quietly decided it was you.',
  },
  {
    id: 2,
    title: 'A calm place in a loud world',
    date: 'Anytime',
    place: 'In your arms',
    text: 'The world can be loud and messy, but for me, peace has your name on it.',
  },
  {
    id: 3,
    title: 'Everyday magic',
    date: 'Always',
    place: 'Wherever you are',
    text: 'You make even the small, ordinary days feel like they belong in a storybook.',
  },
]

const gallery = [
  { id: 1, src: '/photos/photo-1.jpg', alt: 'Photo 1 of us', caption: 'Photo 1 of us' },
  { id: 2, src: '/photos/photo-2.jpg', alt: 'Photo 2 of us', caption: 'Photo 2 of us' },
  { id: 3, src: '/photos/photo-3.jpg', alt: 'Photo 3 of us', caption: 'Photo 3 of us' },
  { id: 4, src: '/photos/photo-4.jpg', alt: 'Photo 4 of us', caption: 'Photo 4 of us' },
  { id: 5, src: '/photos/photo-5.jpg', alt: 'Photo 5 of us', caption: 'Photo 5 of us' },
  { id: 6, src: '/photos/photo-6.jpg', alt: 'Photo 6 of us', caption: 'Photo 6 of us' },
  { id: 7, src: '/photos/photo-7.jpg', alt: 'Photo 7 of us', caption: 'Photo 7 of us' },
  { id: 8, src: '/photos/photo-8.jpg', alt: 'Photo 8 of us', caption: 'Photo 8 of us' },
  { id: 9, src: '/photos/photo-9.jpg', alt: 'Photo 9 of us', caption: 'Photo 9 of us' },
  { id: 10, src: '/photos/photo-10.jpg', alt: 'Photo 10 of us', caption: 'Photo 10 of us' },
  { id: 11, src: '/photos/photo-11.jpg', alt: 'Photo 11 of us', caption: 'Photo 11 of us' },
  { id: 12, src: '/photos/photo-12.jpg', alt: 'Photo 12 of us', caption: 'Photo 12 of us' },
  { id: 13, src: '/photos/photo-13.jpg', alt: 'Photo 13 of us', caption: 'Photo 13 of us' },
  { id: 14, src: '/photos/photo-14.jpg', alt: 'Photo 14 of us', caption: 'Photo 14 of us' },
  { id: 15, src: '/photos/photo-15.jpg', alt: 'Photo 15 of us', caption: 'Photo 15 of us' },
  { id: 16, src: '/photos/photo-16.jpg', alt: 'Photo 16 of us', caption: 'Photo 16 of us' },
  { id: 17, src: '/photos/photo-17.jpg', alt: 'Photo 17 of us', caption: 'Photo 17 of us' },
  { id: 18, src: '/photos/photo-18.jpg', alt: 'Photo 18 of us', caption: 'Photo 18 of us' },
  { id: 19, src: '/photos/photo-19.jpg', alt: 'Photo 19 of us', caption: 'Photo 19 of us' },
  { id: 20, src: '/photos/photo-20.jpg', alt: 'Photo 20 of us', caption: 'Photo 20 of us' },
  { id: 21, src: '/photos/photo-21.jpg', alt: 'Photo 21 of us', caption: 'Photo 21 of us' },
  { id: 22, src: '/photos/photo-22.jpg', alt: 'Photo 22 of us', caption: 'Photo 22 of us' },
  { id: 23, src: '/photos/photo-23.jpg', alt: 'Photo 24 of us', caption: 'Photo 23 of us' },
  { id: 24, src: '/photos/photo-24.jpg', alt: 'Photo 24 of us', caption: 'Photo 24 of us' },
  { id: 25, src: '/photos/photo-25.jpg', alt: 'Photo 25 of us', caption: 'Photo 25 of us' },
  { id: 26, src: '/photos/photo-26.jpg', alt: 'Photo 26 of us', caption: 'Photo 26 of us' },
  { id: 27, src: '/photos/photo-27.jpg', alt: 'Photo 27 of us', caption: 'Photo 27 of us' },
  { id: 28, src: '/photos/photo-28.jpg', alt: 'Photo 28 of us', caption: 'Photo 28 of us' },
  { id: 29, src: '/photos/photo-29.jpg', alt: 'Photo 29 of us', caption: 'Photo 29 of us' },
  { id: 30, src: '/photos/photo-30.jpg', alt: 'Photo 30 of us', caption: 'Photo 30 of us' },
  { id: 31, src: '/photos/photo-31.jpg', alt: 'Photo 31 of us', caption: 'Photo 31 of us' },
  { id: 32, src: '/photos/photo-32.jpg', alt: 'Photo 32 of us', caption: 'Photo 32 of us' },
  { id: 33, src: '/photos/photo-33.jpg', alt: 'Photo 33 of us', caption: 'Photo 33 of us' },
  { id: 34, src: '/photos/photo-34.jpg', alt: 'Photo 34 of us', caption: 'Photo 34 of us' },
  { id: 35, src: '/photos/photo-35.jpg', alt: 'Photo 35 of us', caption: 'Photo 35 of us' },
  { id: 36, src: '/photos/photo-36.jpg', alt: 'Photo 36 of us', caption: 'Photo 36 of us' },
  { id: 37, src: '/photos/photo-37.jpg', alt: 'Photo 37 of us', caption: 'Photo 37 of us' },
  { id: 38, src: '/photos/photo-38.jpg', alt: 'Photo 38 of us', caption: 'Photo 38 of us' },
  { id: 39, src: '/photos/photo-39.jpg', alt: 'Photo 39 of us', caption: 'Photo 39 of us' },
  { id: 40, src: '/photos/photo-40.jpg', alt: 'Photo 40 of us', caption: 'Photo 40 of us' },
  { id: 41, src: '/photos/photo-41.jpg', alt: 'Photo 41 of us', caption: 'Photo 41 of us' },
  { id: 42, src: '/photos/photo-42.jpg', alt: 'Photo 42 of us', caption: 'Photo 42 of us' },
  { id: 43, src: '/photos/photo-43.jpg', alt: 'Photo 43 of us', caption: 'Photo 43 of us' },
  { id: 44, src: '/photos/photo-44.jpg', alt: 'Photo 44 of us', caption: 'Photo 44 of us' },
  { id: 45, src: '/photos/photo-45.jpg', alt: 'Photo 45 of us', caption: 'Photo 45 of us' },
  { id: 46, src: '/photos/photo-46.jpg', alt: 'Photo 46 of us', caption: 'Photo 46 of us' },
  { id: 47, src: '/photos/photo-47.jpg', alt: 'Photo 47 of us', caption: 'Photo 47 of us' },
  { id: 48, src: '/photos/photo-48.jpg', alt: 'Photo 48 of us', caption: 'Photo 48 of us' },
  { id: 49, src: '/photos/photo-49.jpg', alt: 'Photo 49 of us', caption: 'Photo 49 of us' },
  { id: 50, src: '/photos/photo-50.jpg', alt: 'Photo 50 of us', caption: 'Photo 50 of us' },
  { id: 51, src: '/photos/photo-51.jpg', alt: 'Photo 51 of us', caption: 'Photo 51 of us' },
  { id: 52, src: '/photos/photo-52.jpg', alt: 'Photo 52 of us', caption: 'Photo 52 of us' },
  { id: 53, src: '/photos/photo-53.jpg', alt: 'Photo 53 of us', caption: 'Photo 53 of us' },
  { id: 54, src: '/photos/photo-54.jpg', alt: 'Photo 54 of us', caption: 'Photo 54 of us' },
  { id: 55, src: '/photos/photo-55.jpg', alt: 'Photo 55 of us', caption: 'Photo 55 of us' },
  { id: 56, src: '/photos/photo-56.jpg', alt: 'Photo 56 of us', caption: 'Photo 56 of us' },
  { id: 57, src: '/photos/photo-57.jpg', alt: 'Photo 57 of us', caption: 'Photo 57 of us' },
  { id: 58, src: '/photos/photo-58.jpg', alt: 'Photo 58 of us', caption: 'Photo 58 of us' },
  { id: 59, src: '/photos/photo-59.jpg', alt: 'Photo 59 of us', caption: 'Photo 59 of us' },
  { id: 60, src: '/photos/photo-60.jpg', alt: 'Photo 60 of us', caption: 'Photo 60 of us' },
  { id: 61, src: '/photos/photo-61.jpg', alt: 'Photo 61 of us', caption: 'Photo 61 of us' },
  { id: 62, src: '/photos/photo-62.jpg', alt: 'Photo 62 of us', caption: 'Photo 62 of us' },
  { id: 63, src: '/photos/photo-63.JPG', alt: 'Photo 63 of us', caption: 'Photo 63 of us' },
  { id: 64, src: '/photos/photo-64.JPG', alt: 'Photo 64 of us', caption: 'Photo 64 of us' },
  { id: 65, src: '/photos/photo-65.JPG', alt: 'Photo 65 of us', caption: 'Photo 65 of us' },
  { id: 66, src: '/photos/photo-66.JPG', alt: 'Photo 66 of us', caption: 'Photo 66 of us' },
  { id: 67, src: '/photos/photo-67.jpg', alt: 'Photo 67 of us', caption: 'Photo 67 of us' },
  { id: 68, src: '/photos/photo-68.jpg', alt: 'Photo 68 of us', caption: 'Photo 68 of us' },
  { id: 69, src: '/photos/photo-69.jpg', alt: 'Photo 69 of us', caption: 'Photo 69 of us' },
  { id: 70, src: '/photos/photo-70.jpg', alt: 'Photo 70 of us', caption: 'Photo 70 of us' },
  { id: 71, src: '/photos/photo-71.jpeg', alt: 'Photo 71 of us', caption: 'Photo 71 of us' },
  { id: 72, src: '/photos/photo-72.jpg', alt: 'Photo 72 of us', caption: 'Photo 72 of us' },
  { id: 73, src: '/photos/photo-73.jpeg', alt: 'Photo 73 of us', caption: 'Photo 73 of us' },
  { id: 74, src: '/photos/photo74.jpeg', alt: 'Photo 74 of us', caption: 'Photo 74 of us' },
  { id: 75, src: '/photos/photo-75.jpeg', alt: 'Photo 75 of us', caption: 'Photo 75 of us' },
  { id: 76, src: '/photos/photo-76.jpeg', alt: 'Photo 76 of us', caption: 'Photo 76 of us' },
  { id: 77, src: '/photos/photo-77.jpeg', alt: 'Photo 77 of us', caption: 'Photo 77 of us' },
  { id: 78, src: '/photos/photo-78.jpeg', alt: 'Photo 78 of us', caption: 'Photo 78 of us' },
  { id: 79, src: '/photos/photo-79.jpeg', alt: 'Photo 79 of us', caption: 'Photo 79 of us' },
  { id: 80, src: '/photos/photo-80.jpeg', alt: 'Photo 80 of us', caption: 'Photo 80 of us' },
  { id: 81, src: '/photos/photo-81.jpeg', alt: 'Photo 81 of us', caption: 'Photo 81 of us' },
  { id: 82, src: '/photos/photo-82.jpeg', alt: 'Photo 82 of us', caption: 'Photo 82 of us' },
  { id: 83, src: '/photos/photo-83.jpeg', alt: 'Photo 83 of us', caption: 'Photo 83 of us' },
]

const letters = [
  {
    id: 1,
    title: 'If I could tell you one thing',
    text: `I hope you never, ever forget how deeply loved you are.\n\nNot just on the good days when everything is easy, but on the heavy days when you feel tired, quiet, or unsure.\n\nOn those days especially, I want you to remember this: you are my gentle place in this world, my softest yes, my favorite person to come home to.`,
  },
  {
    id: 2,
    title: 'To my Coleen, I am proud of you',
    text: `I am proud of you — not only for what you do, but for who you are when no one is watching.\n\nI am proud of the way you keep going when it is hard, of the way you care even when you are tired, of the way you try again after feeling like you messed up.\n\nThis is your little reminder for the days you doubt yourself: you are not behind, you are not a disappointment, you are not a burden.\n\nYou are wanted. You are growing. You are so deeply, stubbornly loved by me, today and always.`,
  },
]

const funFacts = [
  {
    id: 1,
    title: 'Your laugh is my favorite sound',
    text: 'I could pick it out in a crowded room, and it would still be the only thing I’d turn toward.',
  },
  {
    id: 2,
    title: 'You make time feel softer',
    text: 'Minutes with you do not feel like they are being spent — they feel like they are being given back to me.',
  },
  {
    id: 3,
    title: 'I overthink, but never about you',
    text: 'About you, I only think: how lucky did I get?',
  },
  {
    id: 4,
    title: 'Home is a person now',
    text: 'No matter where we are, when you are near, the world feels less sharp and more like home.',
  },
]

const loveNotes = [
  'You are my favorite “what are you doing right now?” person.',
  'If my heart could choose a wallpaper, it would just be your smile on loop.',
  'You are the calm in my chaos and the softness in my days.',
  'Every version of the future I like has you in it.',
  'If I had to pick a safe place in this world, it would be your arms.',
]

const heroCaptions = [
  'Your smile feels like home.',
  'With you, ordinary days feel soft and magical.',
  'You are my favorite part of every memory.',
  'I like who I am when I am with you.',
  'You are the calm side of my stormy mind.',
  'You make my heart feel less heavy and more hopeful.',
  'Every hug from you feels like “you are safe here”.',
  'You are my favorite “I made it through today” person.',
]

const PhotoPage = forwardRef(function PhotoPage({ item }, ref) {
  return (
    <div className="photo-page" ref={ref}>
      <div className="photo-page-inner">
        <div className="photo-page-polaroid">
          <div className="photo-page-img-wrap">
            <img
              src={item.src}
              alt={item.alt}
              className="photo-page-img"
              loading="lazy"
            />
          </div>
          <p className="photo-page-caption">{item.caption}</p>
        </div>
      </div>
    </div>
  )
})

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const bookRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [highlightMemory, setHighlightMemory] = useState(null)
  const [activeLoveNote, setActiveLoveNote] = useState(null)
  const [activeReminder, setActiveReminder] = useState(null)
  const [pageBurst, setPageBurst] = useState(null)
  const [heroIndex, setHeroIndex] = useState(0)

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          // ignore play errors (e.g. browser autoplay restrictions)
        })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.15,
      },
    )

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const openRandomLoveNote = () => {
    const note =
      loveNotes[Math.floor(Math.random() * loveNotes.length)] ?? loveNotes[0]
    setActiveLoveNote(note)
  }

  const openProudReminder = () => {
    setActiveReminder(
      'If today feels heavy or you feel like you are not doing enough, pause and breathe.\n\nYou are allowed to move slowly. You are allowed to rest. You are allowed to still be proud of yourself even when everything is not perfect.\n\nI am proud of you exactly as you are, and I am not going anywhere.',
    )
  }

  useEffect(() => {
    if (!pageBurst) return
    const timer = setTimeout(() => setPageBurst(null), 900)
    return () => clearTimeout(timer)
  }, [pageBurst])

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % gallery.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="app-root">
      <div className="scrapbook-shell">
        <main className="scrapbook-page">
          <div className="scrapbook-inner">
            <audio ref={audioRef} src="/music/song.mp3" loop />
            <header className="nav">
              <div className="nav-bar">
                <div className="nav-title">
                  <span>For My Girl</span>
                  <span className="nav-heart">♥</span>
                </div>
                <nav className="nav-links" aria-label="Scrapbook sections">
                  <button
                    className="nav-link"
                    type="button"
                    onClick={() => scrollToId('hero')}
                  >
                    Home
                  </button>
                  <button
                    className="nav-link"
                    type="button"
                    onClick={() => scrollToId('memories')}
                  >
                    Memories
                  </button>
                  <button
                    className="nav-link"
                    type="button"
                    onClick={() => scrollToId('photos')}
                  >
                    Photos
                  </button>
                  <button
                    className="nav-link"
                    type="button"
                    onClick={() => scrollToId('letters')}
                  >
                    Letters
                  </button>
                  <button
                    className="nav-link"
                    type="button"
                    onClick={() => scrollToId('fun-facts')}
                  >
                    Reasons
                  </button>
                </nav>
                <div className="music-control">
                  <button
                    type="button"
                    className={`music-btn ${
                      isPlaying ? 'music-btn--active' : ''
                    }`}
                    onClick={toggleMusic}
                  >
                    {isPlaying ? 'Pause Music' : 'Play Music'}
                  </button>
                </div>
              </div>
            </header>

            <section
              id="hero"
              className="hero reveal-on-scroll"
              aria-labelledby="hero-title"
            >
              <div>
                <h1 id="hero-title" className="hero-heading">
                  A little love book
                </h1>
                <p className="hero-subtitle">
                  This is a tiny corner of the internet that belongs to{' '}
                  <span className="hero-highlight">you and me</span> — a soft
                  place made of photos, memories, and words I mean with my whole
                  heart.
                </p>
                <p className="hero-subtitle">
                  Take your time, scroll slowly, and know that every line and
                  every picture is here because of how much I love you.
                </p>
                <div className="hero-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => scrollToId('memories')}
                  >
                    Start our story
                    <span aria-hidden="true">↳</span>
                  </button>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => scrollToId('photos')}
                  >
                    Jump to our photos
                  </button>
                  <button
                    type="button"
                    className="btn-ghost hero-emoji-btn"
                    onClick={openRandomLoveNote}
                    aria-label="Open a tiny love note"
                  >
                    💌
                  </button>
                </div>
              </div>

              <div className="hero-photo-stack" aria-hidden="true">
                <div className="photo-row">
                  <div className="photo-polaroid">
                    <img
                      src={gallery[heroIndex % gallery.length].src}
                      alt={gallery[heroIndex % gallery.length].alt}
                      className="photo-img"
                    />
                    <p className="photo-caption">
                      {heroCaptions[heroIndex % heroCaptions.length]}
                    </p>
                  </div>
                  <div className="photo-polaroid">
                    <img
                      src={gallery[(heroIndex + 1) % gallery.length].src}
                      alt={gallery[(heroIndex + 1) % gallery.length].alt}
                      className="photo-img"
                    />
                    <p className="photo-caption">
                      {heroCaptions[(heroIndex + 1) % heroCaptions.length]}
                    </p>
                  </div>
                </div>
                <div className="photo-row">
                  <div className="photo-polaroid">
                    <img
                      src={gallery[(heroIndex + 2) % gallery.length].src}
                      alt={gallery[(heroIndex + 2) % gallery.length].alt}
                      className="photo-img"
                    />
                    <p className="photo-caption">
                      {heroCaptions[(heroIndex + 2) % heroCaptions.length]}
                    </p>
                  </div>
                  <div className="photo-polaroid">
                    <img
                      src={gallery[(heroIndex + 3) % gallery.length].src}
                      alt={gallery[(heroIndex + 3) % gallery.length].alt}
                      className="photo-img"
                    />
                    <p className="photo-caption">
                      {heroCaptions[(heroIndex + 3) % heroCaptions.length]}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="sections">
              <section
                id="memories"
                className="section reveal-on-scroll"
                aria-labelledby="memories-title"
              >
                <div className="section-inner">
                  <div className="section-label">
                    <span className="section-pill" />
                    pages from our story
                  </div>
                  <div className="section-title-row">
                    <h2 id="memories-title" className="section-title">
                      Little memories of us
                    </h2>
                    <span className="section-note">
                      (these are only the beginning)
                    </span>
                  </div>
                  <p className="section-text">
                    I could write forever about you, but here are just a few
                    pieces of the story my heart keeps replaying.
                  </p>
                  <div className="memories-list">
                    {memories.map((memory) => (
                      <article
                        key={memory.id}
                        className="memory-card"
                        onClick={() => setHighlightMemory(memory)}
                      >
                        <div className="memory-meta">
                          <span>{memory.date}</span> · <span>{memory.place}</span>
                        </div>
                        <h3 className="memory-title">{memory.title}</h3>
                        <p className="memory-text">{memory.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="photos"
                className="section reveal-on-scroll"
                aria-labelledby="photos-title"
              >
                <div className="section-inner">
                  <div className="section-label">
                    <span className="section-pill" />
                    little frames of us
                  </div>
                  <div className="section-title-row">
                    <h2 id="photos-title" className="section-title">
                      Our photo gallery
                    </h2>
                    <span className="section-note">(swap in our real pics)</span>
                  </div>
                  <p className="section-text">
                    Here&apos;s a place for our favorite photos — the soft
                    smiles, the silly faces, the random days that somehow became
                    some of my favorite memories.
                  </p>
                  <div className="flipbook-wrapper">
                    <HTMLFlipBook
                      width={320}
                      height={420}
                      size="stretch"
                      minWidth={260}
                      maxWidth={580}
                      minHeight={360}
                      maxHeight={640}
                      maxShadowOpacity={0.4}
                      showCover={false}
                      mobileScrollSupport
                      useMouseEvents={false}
                      onFlip={() => {
                        const emojis = ['💖', '✨', '💕', '🌸', '💫', '🩷']
                        const emoji =
                          emojis[
                            Math.floor(Math.random() * emojis.length)
                          ] ?? '💖'
                        setPageBurst({ emoji, id: Date.now() })
                      }}
                      className="photo-book"
                      ref={bookRef}
                    >
                      {gallery.map((item) => (
                        <PhotoPage key={item.id} item={item} />
                      ))}
                    </HTMLFlipBook>
                    <div
                      className="carousel-controls"
                      aria-label="Photo book controls"
                    >
                      <button
                        type="button"
                        className="carousel-btn"
                        onClick={() =>
                          bookRef.current?.pageFlip()?.flipPrev()
                        }
                      >
                        ‹ Prev page
                      </button>
                      <button
                        type="button"
                        className="carousel-btn"
                        onClick={() =>
                          bookRef.current?.pageFlip()?.flipNext()
                        }
                      >
                        Next page ›
                      </button>
                    </div>
                    {pageBurst && (
                      <div
                        key={pageBurst.id}
                        className="flip-emoji-burst"
                        aria-hidden="true"
                      >
                        {pageBurst.emoji}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              <section
                id="letters"
                className="section reveal-on-scroll"
                aria-labelledby="letters-title"
              >
                <div className="section-inner">
                  <div className="section-label">
                    <span className="section-pill" />
                    little letters for you
                  </div>
                  <div className="section-title-row">
                    <h2 id="letters-title" className="section-title">
                      Notes from my heart
                    </h2>
                    <span className="section-note">
                      (read these on tough days)
                    </span>
                  </div>
                  <p className="section-text">
                    These aren&apos;t all the words I have for you — just a few
                    pieces I never want you to forget.
                  </p>
                  <button
                    type="button"
                    className="btn-ghost letters-reminder-btn"
                    onClick={openProudReminder}
                  >
                    ⭐ Always remember this
                  </button>
                  <div className="letters-grid">
                    {letters.map((letter) => (
                      <article key={letter.id} className="letter-card">
                        <div className="letter-tag">for you</div>
                        <h3 className="letter-title">{letter.title}</h3>
                        <p className="letter-text">{letter.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="fun-facts"
                className="section reveal-on-scroll"
                aria-labelledby="funfacts-title"
              >
                <div className="section-inner">
                  <div className="section-label">
                    <span className="section-pill" />
                    reasons my heart chose you
                  </div>
                  <div className="section-title-row">
                    <h2 id="funfacts-title" className="section-title">
                      A few reasons I love you
                    </h2>
                    <span className="section-note">
                      (there are way more than this)
                    </span>
                  </div>
                  <div className="funfacts-list">
                    {funFacts.map((fact, index) => (
                      <div key={fact.id} className="funfact-item">
                        <div className="funfact-number">{index + 1}</div>
                        <div className="funfact-title">{fact.title}</div>
                        <p className="funfact-text">{fact.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <footer className="footer">
              Made with
              <span className="footer-heart" aria-hidden="true">
                ♥
              </span>
              by your Kulit — for you.
            </footer>
          </div>
        </main>
      </div>
      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Back to top
        </button>
      )}
      {!activeLoveNote && (
        <button
          type="button"
          className="love-note-fab"
          onClick={openRandomLoveNote}
          aria-label="Open a random love note"
        >
          💖
        </button>
      )}
      {highlightMemory && (
        <div
          className="memory-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Memory details"
          onClick={() => setHighlightMemory(null)}
        >
          <div
            className="memory-overlay-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="memory-overlay-close"
              onClick={() => setHighlightMemory(null)}
            >
              ✕
            </button>
            <p className="memory-overlay-meta">
              {highlightMemory.date} · {highlightMemory.place}
            </p>
            <h3 className="memory-overlay-title">{highlightMemory.title}</h3>
            <p className="memory-overlay-text">{highlightMemory.text}</p>
          </div>
        </div>
      )}
      {activeLoveNote && (
        <div
          className="love-note-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Little love note"
          onClick={() => setActiveLoveNote(null)}
        >
          <div
            className="love-note-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="love-note-close"
              onClick={() => setActiveLoveNote(null)}
            >
              ✕
            </button>
            <div className="love-note-emoji">💖</div>
            <p className="love-note-text">{activeLoveNote}</p>
          </div>
        </div>
      )}
      {activeReminder && (
        <div
          className="love-note-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Proud reminder"
          onClick={() => setActiveReminder(null)}
        >
          <div
            className="love-note-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="love-note-close"
              onClick={() => setActiveReminder(null)}
            >
              ✕
            </button>
            <div className="love-note-emoji">⭐</div>
            <p className="love-note-text">{activeReminder}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
