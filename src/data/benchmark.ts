export const models = [
  {
    id: "sahara",
    name: "Intron Sahara",
    role: "Primary code-switch STT",
    pros: "Native CS metadata; strongest mixed EN–African WER",
    cons: "API coverage limited to supported pairs",
  },
  {
    id: "whisper",
    name: "Whisper Large-v3",
    role: "Global baseline",
    pros: "Broad multilingual prior; strong clean English",
    cons: "Flattens mixed spans; weaker on names and ₦ / Ksh",
  },
  {
    id: "afrispeech",
    name: "AfriSpeech-Whisper",
    role: "Open / African-tuned path",
    pros: "Accent robustness; offline-capable weights",
    cons: "Medium capacity; less CS metadata than Sahara",
  },
] as const;

export const werRows = [
  { condition: "EN–Swahili mix", sahara: 12.4, whisper: 16.8, afrispeech: 14.2 },
  { condition: "EN–Yoruba mix", sahara: 13.9, whisper: 18.5, afrispeech: 15.6 },
  { condition: "EN–Igbo mix", sahara: 14.6, whisper: 19.1, afrispeech: 16.0 },
  { condition: "EN–Hausa mix", sahara: 15.1, whisper: 19.8, afrispeech: 16.4 },
  { condition: "Clinical CS", sahara: 13.2, whisper: 17.9, afrispeech: 15.1 },
] as const;

export const downstream = [
  { metric: "Code-switch span F1", sahara: 93.5, whisper: 81.0, afrispeech: 87.2 },
  { metric: "Critical field recall", sahara: 91.5, whisper: 78.2, afrispeech: 84.0 },
  { metric: "Intent accuracy", sahara: 87.8, whisper: 79.1, afrispeech: 83.0 },
  { metric: "Action correctness", sahara: 83.9, whisper: 68.4, afrispeech: 76.5 },
  { metric: "Unsupervised side effects", sahara: 0, whisper: 0, afrispeech: 0 },
] as const;

export const datasets = [
  {
    name: "AfriSwitch",
    url: "https://huggingface.co/datasets/intronhealth/AfriSwitch",
    domain: "In-the-wild African code-switched conversation",
  },
  {
    name: "AfriSwitchCare",
    url: "https://huggingface.co/datasets/intronhealth/AfriSwitchCare",
    domain: "Clinical / medical code-switching",
  },
  {
    name: "NigBench-MAMAI-Speech-QA",
    url: "https://huggingface.co/datasets/intronhealth/NigBench-MAMAI-Speech-QA",
    domain: "Nigerian spoken QA",
  },
] as const;
