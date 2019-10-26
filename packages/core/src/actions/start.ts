import { Context, Options } from '@reactant/context';
import bootstrap from './bootstrap';

export default async function start(
  platform: string,
  options: Options = {}
): Promise<Context> {
  const context = await bootstrap(platform, options);
  console.log('context', context);
  // TODO
  return context;
}