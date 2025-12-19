/**
 * Gallery component translations
 * Image alt texts and gallery headings
 */

import { TranslatedString } from "@/types";

export const GALLERY_TEXT = {
  hero: {
    title: { bg: "Нашето", en: "Our", it: "Nostro" },
    titleHighlight: { bg: "пространство", en: "Space", it: "Spazio" },
    description: {
      bg: "Открийте мястото, където тялото и умът намират хармония",
      en: "Discover the place where body and mind find harmony",
      it: "Scopri il luogo dove corpo e mente trovano armonia"
    },
  },

  imageAlts: {
    interior: { bg: "SOMA Studio интериор", en: "SOMA Studio interior", it: "Interni SOMA Studio" },
    therapeutic: { bg: "Терапевтично пространство", en: "Therapeutic space", it: "Spazio terapeutico" },
    relaxation: { bg: "Студио за релаксация", en: "Relaxation studio", it: "Studio relax" },
    peaceful: { bg: "Тихо място за изцеление", en: "Peaceful healing space", it: "Spazio di guarigione" },
    holistic: { bg: "Холистична среда", en: "Holistic environment", it: "Ambiente olistico" },
    spacious: { bg: "Просторно студио", en: "Spacious studio", it: "Studio spazioso" },
    cozy: { bg: "Уютен кът", en: "Cozy corner", it: "Angolo accogliente" },
    transformation: { bg: "Място за трансформация", en: "Space for transformation", it: "Spazio di trasformazione" },
    gallery: { bg: "Галерия", en: "Gallery", it: "Galleria" },
  },
} as const;
