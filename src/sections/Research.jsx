import React from 'react'

export default function Research(){
  return (
    <section aria-labelledby="research">
      <h2 id="research" className="text-2xl font-semibold text-sky-700">Research Interests</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">Deep Learning & Representation</h3>
          <p className="text-sm text-slate-600 mt-2">CNNs, LSTMs, Transformers, attention mechanisms and explainability methods.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">Multimodal Fusion</h3>
          <p className="text-sm text-slate-600 mt-2">Fusing image and sensor modalities for improved prediction and interpretability.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">Edge & Sustainable AI</h3>
          <p className="text-sm text-slate-600 mt-2">Quantization, pruning, TinyML and energy-aware deployment.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">Medical Imaging</h3>
          <p className="text-sm text-slate-600 mt-2">Advanced segmentation, registration, and diagnostic tools using AI.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">Signal Processing in Healthcare</h3>
          <p className="text-sm text-slate-600 mt-2">Analyzing physiological signals such as ECG, EEG, and PPG for diagnostics and monitoring using advanced signal processing and AI techniques.</p>
        </div>
      </div>
    </section>
  )
}