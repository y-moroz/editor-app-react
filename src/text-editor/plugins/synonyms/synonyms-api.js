const SYNONYMS_API_ROOT = 'https://api.datamuse.com/words';

const loadSynonyms = async word => {
  const response = await fetch(`${SYNONYMS_API_ROOT}?rel_syn=${word}`);
  if (!response.ok || response.status !== 200) {
    throw new Error('Failed to load synonyms');
  }
  return response.json();
};

export {
  loadSynonyms
};
