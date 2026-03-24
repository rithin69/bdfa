import React, { useEffect, useState } from 'react'

const projects = [
  {
    id: 'project1',
    tag: 'STANMORE RESIDENCE',
    name: 'Bentley Way House',
    shortLocation: 'Stanmore, London',
    location: 'Stanmore, London',
    description:
      'A refined residential glazing project with expansive rear views, bespoke bifold openings, and a clean architectural finish designed for contemporary family living.',
    coverImage: '/images_bifold_projects/project1/DJI_0003.webp',
    images: [
      '/images_bifold_projects/project1/DJI_0003.webp',
      '/images_bifold_projects/project1/DSC04515-HDR.webp',
      '/images_bifold_projects/project1/DSC04533-HDR.webp',
      '/images_bifold_projects/project1/DSC04575-HDR.webp',
    ],
    span: 'md:row-span-2',
  },
  {
    id: 'project2',
    tag: 'KINGSTON PROJECT',
    name: 'Petworth Lodge',
    shortLocation: 'Kingston upon Thames',
    location: 'Kingston upon Thames',
    description:
      'A polished lodge setting where large-format glazing and bifold door elements strengthen the connection between the home and its landscaped surroundings.',
    coverImage: '/images_bifold_projects/project2/DJI_0122.webp',
    images: [
      '/images_bifold_projects/project2/DJI_0122.webp',
      '/images_bifold_projects/project2/DSC01151-HDR.webp',
    ],
    span: '',
  },
  {
    id: 'project3',
    tag: 'SURREY COTTAGE',
    name: 'Brae Cottage',
    shortLocation: 'Bookham, Surrey',
    location: 'Bookham, Surrey',
    description:
      'A character-led Surrey home upgraded with carefully integrated glazing, balancing rural charm with brighter interiors and stronger indoor-outdoor flow.',
    coverImage: '/images_bifold_projects/project3/DSC01356.webp',
    images: [
      '/images_bifold_projects/project3/DJI_0154.webp',
      '/images_bifold_projects/project3/DJI_0159.webp',
      '/images_bifold_projects/project3/DSC01356.webp',
    ],
    span: '',
  },
  {
    id: 'project4',
    tag: 'EXETER HOME',
    name: 'Bouchers Hill House',
    shortLocation: 'North Tawton, Exeter',
    location: 'North Tawton, Exeter',
    description:
      'A striking countryside residence featuring generous glazed elevations and bifold detailing that opens the living spaces to panoramic rural views.',
    coverImage: '/images_bifold_projects/project4/DJI_0276.webp',
    images: [
      '/images_bifold_projects/project4/DJI_0270 (1).webp',
      '/images_bifold_projects/project4/DJI_0276.webp',
      '/images_bifold_projects/project4/DJI_0287 (1).webp',
      '/images_bifold_projects/project4/DSC00003 (1).webp',
      '/images_bifold_projects/project4/DSC00014 (1).webp',
    ],
    span: '',
  },
  {
    id: 'project5',
    tag: 'EDGWARE RESIDENCE',
    name: 'Hartland Drive House',
    shortLocation: 'Edgware, Middlesex',
    location: 'Edgware, Middlesex',
    description:
      'A tailored home improvement project focused on crisp sightlines, daylight performance, and elegant bifold transitions into the garden.',
    coverImage: '/images_bifold_projects/project5/DSC07297.webp',
    images: [
      '/images_bifold_projects/project5/DSC07231.webp',
      '/images_bifold_projects/project5/DSC07266-HDR.webp',
      '/images_bifold_projects/project5/DSC07287-HDR.webp',
      '/images_bifold_projects/project5/DSC07297.webp',
    ],
    span: '',
  },
  {
    id: 'project6',
    tag: 'BEDFORD PROJECT',
    name: 'Bedford Residence',
    shortLocation: 'Bedford',
    location: 'Bedford',
    description:
      'A modern residential installation showcasing robust aluminium framing, generous glazing, and a calm architectural palette throughout the rear elevation.',
    coverImage: '/images_bifold_projects/project6/DSC09448.webp',
    images: [
      '/images_bifold_projects/project6/DSC09448.webp',
      '/images_bifold_projects/project6/DSC09451.webp',
      '/images_bifold_projects/project6/DSC09453.webp',
      '/images_bifold_projects/project6/DSC09458.webp',
    ],
    span: '',
  },
]

function ProjectModal({ project, activeImageIndex, setActiveImageIndex, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % project.images.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) =>
          (current - 1 + project.images.length) % project.images.length
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, project, setActiveImageIndex])

  if (!project) return null

  const activeImage = project.images[activeImageIndex]

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center bg-black/75 px-4 py-4 backdrop-blur-sm lg:items-center lg:py-6">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 grid max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-[28px] bg-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] lg:max-h-[92vh] lg:overflow-hidden lg:grid-cols-[1.35fr_0.85fr]">
        <div className="relative min-h-[320px] bg-black">
          <img
            src={activeImage}
            alt={`${project.name} view ${activeImageIndex + 1}`}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/35 to-transparent px-6 pb-5 pt-16 text-[11px] tracking-[0.28em] text-white">
            <span>{project.tag}</span>
            <span>
              {String(activeImageIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
            </span>
          </div>
          {project.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex(
                    (current) => (current - 1 + project.images.length) % project.images.length
                  )
                }
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-2xl text-[#102327] transition hover:bg-gold"
                aria-label="Previous project image"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((current) => (current + 1) % project.images.length)
                }
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-2xl text-[#102327] transition hover:bg-gold"
                aria-label="Next project image"
              >
                &gt;
              </button>
            </>
          )}
        </div>

        <div className="border-t border-[#102327]/8 bg-[#F7F4F0] px-4 py-4 lg:hidden">
          <div className="mb-3 text-[10px] tracking-[0.35em] text-[#0ABAB5]">PROJECT GALLERY</div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {project.images.map((image, index) => (
              <button
                key={`${image}-mobile`}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl border transition ${
                  index === activeImageIndex
                    ? 'border-gold shadow-[0_0_0_1px_rgba(10,186,181,0.45)]'
                    : 'border-[#102327]/10'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.name} mobile thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex max-h-[92vh] flex-col overflow-y-auto bg-[#F7F4F0] p-6 text-[#102327] md:p-8">
          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#102327]/15 text-2xl text-[#102327] transition hover:border-gold hover:text-gold"
            aria-label="Close project details"
          >
            x
          </button>

          <div className="mt-4">
            <div className="mb-3 text-[10px] tracking-[0.38em] text-[#0ABAB5]">{project.tag}</div>
            <h3 className="font-cormorant text-4xl font-light leading-none text-[#102327] md:text-5xl">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#102327]/80">{project.location}</p>
            <p className="mt-6 text-[15px] leading-8 text-[#102327]">{project.description}</p>
          </div>

          <div className="mt-8 hidden lg:block">
            <div className="mb-4 text-[10px] tracking-[0.35em] text-[#0ABAB5]">PROJECT GALLERY</div>
            <div className="grid grid-cols-2 gap-3">
              {project.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative overflow-hidden rounded-2xl border transition ${
                    index === activeImageIndex
                      ? 'border-gold shadow-[0_0_0_1px_rgba(10,186,181,0.45)]'
                      : 'border-[#102327]/10 hover:border-[#102327]/30'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.name} thumbnail ${index + 1}`}
                    className="h-28 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null

  const openProject = (project) => {
    setSelectedProjectId(project.id)
    setActiveImageIndex(0)
  }

  return (
    <>
      <section id="portfolio" className="relative overflow-hidden pb-32 pt-6">
        <div className="relative mx-auto mb-14 flex max-w-7xl flex-col items-center px-8 text-center">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[9px] tracking-[0.5em] text-gold">MOST VISITED WORK</span>
          </div>
          <h2
            className="font-cormorant font-light leading-tight text-bdf-white"
            style={{ fontSize: 'clamp(38px,4.3vw,62px)' }}
          >
            Signature <span className="text-gold">Projects</span>
          </h2>
          <p
            className="mt-4 max-w-3xl text-center text-sm leading-7 text-[#1C2B2B]/75 md:text-base"
            style={{ textAlign: 'justify' }}
          >
            Discover a snapshot of completed BDF Architectural installations, with detailed
            galleries from standout homes across London, the Home Counties, and beyond.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[300px]">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => openProject(project)}
                className={`portfolio-item group relative min-h-[320px] overflow-hidden rounded-[28px] text-left md:min-h-0 ${project.span}`}
              >
                <div className="absolute inset-0 bg-black">
                  <img
                    src={project.coverImage}
                    alt={`${project.name} at ${project.location}`}
                    className="portfolio-card-img h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/82 via-black/28 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-black/38 px-4 py-2 text-[8px] tracking-[0.35em] text-white/90 backdrop-blur-sm">
                  {project.tag}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="mb-2 flex items-center text-[9px] tracking-[0.26em] text-white/85">
                    <span>{project.shortLocation}</span>
                  </div>
                  <h3 className="max-w-sm font-cormorant text-[28px] font-light leading-none text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:text-[34px]">
                    {project.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.35em] text-gold">
                      VIEW PROJECT
                    </span>
                    <span className="text-2xl text-white transition duration-300 group-hover:translate-x-1 group-hover:text-gold">
                      +
                    </span>
                  </div>
                </div>

                <div className="portfolio-overlay absolute inset-0 rounded-[28px] border border-gold/30 pointer-events-none" />
              </button>
            ))}
          </div>

          <div className="absolute left-[calc(33.333%+2.5rem)] right-8 top-[calc(100%-12.5rem)] hidden -translate-y-1/2 md:flex justify-center">
            <div className="flex items-center gap-5 text-[#0ABAB5]">
              <div className="h-px w-14 bg-[#0ABAB5]/45" />
              <div className="font-cormorant text-[34px] font-light tracking-[0.24em] text-[#0ABAB5] drop-shadow-[0_8px_24px_rgba(10,186,181,0.16)]">
                AND MANY MORE
              </div>
              <div className="h-px w-14 bg-[#0ABAB5]/45" />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 text-[#0ABAB5] md:hidden">
            <div className="h-px w-10 bg-[#0ABAB5]/45" />
            <div className="font-cormorant text-[24px] font-light tracking-[0.18em] text-[#0ABAB5]">
              AND MANY MORE
            </div>
            <div className="h-px w-10 bg-[#0ABAB5]/45" />
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  )
}
