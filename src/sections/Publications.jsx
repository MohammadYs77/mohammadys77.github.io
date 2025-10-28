import React from 'react'

export default function Publications(){
  return (
    <section aria-labelledby="pubs">
      <h2 id="pubs" className="text-2xl font-semibold text-sky-700">Selected Publications</h2>
      <ol className="mt-4 space-y-3 text-slate-700">
        <li>
          Yousefi, M. (2024). <em>Implementation of a multi-modal deep learning model for information extraction and prediction utilizing bridge benchmark sensor data</em>. Master's thesis, Bahçeşehir University.
        </li>
        <li>
          Berjin E., Yousefi M. (2024). Neural Network-Based Human Detection Using Raw UWB Radar Data. 
          <em>In Proceedings of the Microwave Theory and Technology in Wireless Communications (MTTW)</em>.
          DOI: <a 
            href="https://doi.org/10.1109/MTTW64344.2024.10742175" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline"
          >
            https://doi.org/10.1109/MTTW64344.2024.10742175
          </a>
        </li>
        <li>
          Yousefi M., Berjin E. (2025). Improving the Robustness of CNN
            Based Human Detection in Cluttered Settings Using Multiple Raw UWB Radar Datasets. 
          <em>In Proceedings of the International Humanitarian Technology Conference (IHTC)</em>.
          DOI: <a 
            href="https://doi.org/10.1109/IHTC61819.2024.10855134" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline"
          >
            https://doi.org/10.1109/IHTC61819.2024.10855134
          </a>
        </li>
      </ol>
    </section>
  )
}