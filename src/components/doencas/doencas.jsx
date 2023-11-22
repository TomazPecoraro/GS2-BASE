import { useState } from "react";
import styles from './doencas.module.css'

export default function Doencas(props) {

    const [doencas] = useState([

            {
                id: 1,
                nome: 'Acne',
                causas: 'Produção excessiva de óleo, bactérias na pele, inflamação dos folículos pilosos.',
                sintomas: 'Cravos, espinhas, inflamações na pele.',
                tratamento: "Limpeza adequada, medicamentos tópicos, tratamentos médicos específicos."
              },
              {
                id: 2,
                nome: "Dermatite Atópica (Eczema)",
                causas: "Fatores genéticos, ambiente seco, irritantes na pele.",
                sintomas: "Coceira intensa, inflamação, pele seca.",
                tratamento: "Hidratação, corticosteroides tópicos, medicamentos anti-histamínicos."
              },
              {
                id: 3,
                nome: "Psoríase",
                causas: "Fatores genéticos, sistema imunológico hiperativo.",
                sintomas: "Manchas espessas e escamosas na pele, vermelhidão.",
                tratamento: "Corticosteroides, terapias de luz, medicamentos imunossupressores."
              },
              {
                id: 4,
                nome: "Herpes Simples",
                causas: "Infecção pelo vírus herpes simplex.",
                sintomas: "Lesões na pele, coceira, formigamento.",
                tratamento: "Antivirais, tratamentos para aliviar sintomas."
              },
              {
                id: 5,
                nome: "Impetigo",
                causas: "Infecção bacteriana, muitas vezes estreptococos ou estafilococos.",
                sintomas: "Lesões com crostas douradas, coceira.",
                tratamento: "Antibióticos tópicos ou orais."
              },
              {
                id: 6,
                nome: "Larva Migrans",
                causas: "Infestação por larvas de parasitas, geralmente encontrada em ambientes com solo contaminado.",
                sintomas: "Trilhas elevadas na pele, coceira intensa.",
                tratamento: "Extração das larvas, antiparasitários."
              },
              {
                id: 7,
                nome: "Leishmaniose Tegumentar Americana",
                causas: "Parasita Leishmania transmitido por picadas de mosquitos.",
                sintomas: "Úlceras cutâneas, lesões na pele.",
                tratamento: "Antiparasitários específicos."
              },
              {
                id: 8,
                nome: "Micose",
                causas: "Infecções fúngicas, geralmente por dermatófitos.",
                sintomas: "Coceira, descamação, vermelhidão.",
                tratamento: "Antifúngicos tópicos ou orais, higiene adequada."
              }
            ]);

  return (
    <div className={styles.doencas}>
        {doencas.map((doenca,indice) => (
          <div key={indice}>
            <p className={styles.nome}>{doenca.nome}</p>
            <p>Causas:{doenca.causas}</p>
            <p>Sintomas:{doenca.sintomas}</p>
            <p>Tratamento:{doenca.tratamento}</p>
          </div>
      ))}
      
    </div>
  )
}