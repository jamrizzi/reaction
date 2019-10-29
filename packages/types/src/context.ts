import { Config } from './config';
import { LoadedPlatform } from './platform';
import { Plugins } from './plugin';

export interface Options {}

export interface Context {
  action: string;
  config?: Config;
  options: Options;
  paths: Paths;
  platform?: LoadedPlatform;
  platformName: string;
  plugins: Plugins;
  state: { [key: string]: any };
  userConfig: Partial<Config>;
}

export type SyncContextCallback = (
  context: Context
) => Context | Promise<Context>;

export type Path = string;

export interface Paths {
  build: Path;
  dist: Path;
  root: Path;
  tmp: Path;
  [key: string]: Path;
}
