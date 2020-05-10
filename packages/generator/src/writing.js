export default async function writing(yo) {
  if (yo.context.platforms.includes('web')) {
    yo.fs.copy(
      yo.templatePath('template/web/public'),
      yo.destinationPath('public')
    );
    yo.fs.copy(
      yo.templatePath('template/web/src/serviceWorker.ts'),
      yo.destinationPath('web/serviceWorker.ts')
    );
    yo.fs.copy(
      yo.templatePath('template/shared/web/index.tsx'),
      yo.destinationPath('web/index.tsx')
    );
    yo.fs.copy(
      yo.templatePath('template/shared/web/App.tsx'),
      yo.destinationPath('web/App.tsx')
    );
    yo.fs.copyTpl(
      yo.templatePath('template/shared/web/_package.json'),
      yo.destinationPath('web/package.json'),
      yo.context
    );
  }
  if (yo.context.platforms.includes('expo')) {
    yo.fs.copy(
      yo.templatePath('template/shared/expo/assets'),
      yo.destinationPath('expo/assets')
    );
    yo.fs.copy(
      yo.templatePath('template/shared/expo/index.js'),
      yo.destinationPath('expo/index.js')
    );
    yo.fs.copy(
      yo.templatePath('template/shared/expo/App.tsx'),
      yo.destinationPath('expo/App.tsx')
    );
    yo.fs.copyTpl(
      yo.templatePath('template/shared/expo/app.json'),
      yo.destinationPath('expo/app.json'),
      yo.context
    );
    yo.fs.copyTpl(
      yo.templatePath('template/shared/expo/_package.json'),
      yo.destinationPath('expo/package.json'),
      yo.context
    );
  }
  yo.fs.copyTpl(
    yo.templatePath('template/shared/src/**'),
    yo.destinationPath('src'),
    yo.context
  );
  if (!yo.context.lock) {
    yo.fs.copy(
      yo.templatePath('template/shared/_npmrc'),
      yo.destinationPath('.npmrc')
    );
  }
  yo.fs.copyTpl(
    yo.templatePath('template/shared/_reactantrc'),
    yo.destinationPath('.reactantrc'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_eslintrc'),
    yo.destinationPath('.eslintrc')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_dockerignore'),
    yo.destinationPath('.dockerignore')
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/Makefile'),
    yo.destinationPath('Makefile'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('template/shared/prepare.sh'),
    yo.destinationPath('prepare.sh')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_cspellrc'),
    yo.destinationPath('.cspellrc')
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/_gitignore'),
    yo.destinationPath('.gitignore'),
    yo.context
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/_package.json'),
    yo.destinationPath('package.json'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_prettierrc'),
    yo.destinationPath('.prettierrc')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/tsconfig.json'),
    yo.destinationPath('tsconfig.json')
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/tests/index.ts'),
    yo.destinationPath('tests/index.ts'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('template/shared/tests/_eslintrc'),
    yo.destinationPath('tests/.eslintrc')
  );
}