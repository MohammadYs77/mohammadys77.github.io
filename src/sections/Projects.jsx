import React from 'react'

const items = [
  {
    title: 'Transformer-based Machine Translation',
    desc: 'Developed a Transformer model for English–German translation using 10% of WMT14, achieving a BLEU score of 46.04.',
    link: 'https://github.com/MohammadYs77/Transformer-based-Machine-Translation'
  },
  {
    title: 'Brain Tumor Classification',
    desc: 'Designed a custom CNN for 4-class tumor classification, reaching over 94% accuracy.',
    link: 'https://github.com/MohammadYs77/Brain-Tumor-Classification-with-PyTorch'
  },
  {
    title: 'Pathology Visual Question Answering VQA',
    desc: 'Implemented a deep learning model to analyze pathology images and answer related questions, achieving a 5% performance improvement over baseline models.',
    link: 'https://github.com/MohammadYs77/Pathology-Visual-Question-Answering-VQA'
  },
  {
    title: 'Fine-Tuning LLMs for Text Classification',
    desc: 'Fine-tuned DistilBERT with LoRA (rank=4, alpha=32) on IMDB dataset; achieved 89.2% accuracy.',
    link: 'https://github.com/MohammadYs77/Fine-tuning-LLMs-for-Sentiment-Analysis'
  },
  {
    title: 'Real-time Emotion Detection',
    desc: 'Developed CNN and VGGNet models on FER2013, achieving 81% accuracy with 54% fewer parameters than state-of-the-art.',
    link: 'https://github.com/MohammadYs77/Real-time-Emotion-Recognition-with-Pytorch'
  }
]

export default function Projects(){
  return (
    <section aria-labelledby="projects">
      <h2 id="projects" className="text-2xl font-semibold text-sky-700">Featured Projects</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {items.map((p, i) => (
          <article key={i} className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-slate-800">{p.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
            <a className="inline-block mt-4 text-sky-700 hover:underline" href={p.link} target="_blank" rel="noreferrer">View on GitHub →</a>
          </article>
        ))}
      </div>
    </section>
  )
}