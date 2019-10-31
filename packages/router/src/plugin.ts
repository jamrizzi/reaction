import { Plugin } from '@reactant/plugin';
import createConfig from './createConfig';
import defaultOptions from './defaultOptions';

const plugin: Plugin = {
  config: createConfig,
  defaultOptions,
  name: 'router',
  supportedPlatforms: ['expo', 'web']
};

export default plugin;
