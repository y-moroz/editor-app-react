import { SIMPLE_ACTION_PLUGIN_CONFIG } from './simple-action';
import { SYNONYMS_ACTION_PLUGIN_CONFIG } from './synonyms';

const PLUGINS = [
  ...SIMPLE_ACTION_PLUGIN_CONFIG,
  ...SYNONYMS_ACTION_PLUGIN_CONFIG
];

export default PLUGINS;
