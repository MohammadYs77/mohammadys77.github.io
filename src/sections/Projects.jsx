import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: 'Transformer-based Machine Translation',
    desc: 'Developed a Transformer model for English–German translation using 10% of WMT14, achieving a BLEU score of 46.04.',
    link: 'https://github.com/MohammadYs77/Transformer-based-Machine-Translation',
    image: '/assets/translation.jpg'
  },
  {
    title: 'Brain Tumor Classification',
    desc: 'Designed a custom CNN for 4-class tumor classification, reaching over 94% accuracy.',
    link: 'https://github.com/MohammadYs77/Brain-Tumor-Classification-with-PyTorch',
    image: '/assets/brain-tumor.jpg'
  },
  {
    title: 'Pathology Visual Question Answering VQA',
    desc: 'Implemented a deep learning model to analyze pathology images and answer related questions, achieving a 5% performance improvement over baseline models.',
    link: 'https://github.com/MohammadYs77/Pathology-Visual-Question-Answering-VQA',
    image: '/assets/vqa.png'
  },
  {
    title: 'Fine-Tuning LLMs for Text Classification',
    desc: 'Fine-tuned DistilBERT with LoRA (rank=4, alpha=32) on IMDB dataset; achieved 89.2% accuracy.',
    link: 'https://github.com/MohammadYs77/Fine-tuning-LLMs-for-Sentiment-Analysis',
    image: '/assets/sentiment-analysis.png'
  },
  {
    title: 'Real-time Emotion Detection',
    desc: 'Developed CNN and VGGNet models on FER2013, achieving 81% accuracy with 54% fewer parameters than state-of-the-art.',
    link: 'https://github.com/MohammadYs77/Real-time-Emotion-Recognition-with-Pytorch',
    image: '/assets/emotion-detection.jpg'
  }
]


const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-gray-800 text-gray-100 mb-10">
        Research & Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;