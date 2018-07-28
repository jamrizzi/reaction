import boom from 'boom';
import easycp, { readcp } from 'easycp';
import open from 'open';
import ora from 'ora';
import { log } from 'reaction-base';
import clean from '../clean';
import createConfig, { saveConfig } from '../../createConfig';

export default async function startIos(options, config) {
  if (!config) {
    config = await createConfig({
      action: 'start',
      defaultEnv: 'development',
      options
    });
    log.debug('options', options);
    log.debug('config', config);
  }
  if (options.clean) await clean(options, config);
  const spinner = ora('Starting ios\n').start();
  if (!(await readcp('which react-native')).length) {
    spinner.stop();
    throw boom.badRequest('react-native not installed');
  }
  await saveConfig('ios', config);
  spinner.stop();
  if (options.storybook) {
    setTimeout(async () => {
      easycp(`react-native run-ios --port ${config.ports.native}`);
      open(`http://localhost:${config.ports.storybookNative}`);
    }, 5000);
    await easycp(`storybook start -p ${config.ports.storybookNative}`);
  } else {
    easycp(`react-native run-ios --port ${config.ports.native}`);
  }
}
