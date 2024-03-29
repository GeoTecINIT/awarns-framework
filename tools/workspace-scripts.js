const npsUtils = require('nps-utils');

module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    lint: {
      script: 'nx run-many --all --target=lint',
      description: 'Lint source code of the entire workspace',
    },
    'android-test-ci': {
      script: 'nx run demo:test:android --watch false --justlaunch',
      description: 'Run all tests on Android device and finish test runner execution (ideal for CI)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        'build-android': {
          script: 'nx run demo:build --platform=android --production=false --uglify=false --release=false',
          description: '⚆  Run Android  🤖',
        },
        ios: {
          script: 'nx run demo:ios --parallel=false',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android --parallel=false',
          description: '⚆  Run Android  🤖',
        },
      },
      'demo-test': {
        ios: {
          script: 'nx run demo:test:ios',
          description: '⚆  Run tests on iOS  ',
        },
        android: {
          script: 'nx run demo:test:android',
          description: '⚆  Run tests on Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios --parallel=false',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android --parallel=false',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@awarns/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @awarns/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@awarns': {
      // @awarns/core
      core: {
        build: {
          script: 'nx run core:build.all --parallel=false',
          description: '@awarns/core: Build',
        },
      },
      // @awarns/persistence
      persistence: {
        build: {
          script: 'nx run persistence:build.all --parallel=false',
          description: '@awarns/persistence: Build',
        },
      },
      // @awarns/tracing
      tracing: {
        build: {
          script: 'nx run tracing:build.all --parallel=false',
          description: '@awarns/tracing: Build',
        },
      },
      // @awarns/battery
      battery: {
        build: {
          script: 'nx run battery:build.all --parallel=false',
          description: '@awarns/battery: Build',
        },
      },
      // @awarns/geolocation
      geolocation: {
        build: {
          script: 'nx run geolocation:build.all --parallel=false',
          description: '@awarns/geolocation: Build',
        },
      },
      // @awarns/wifi
      wifi: {
        build: {
          script: 'nx run wifi:build.all --parallel=false',
          description: '@awarns/wifi: Build',
        },
      },
      // @awarns/ble
      ble: {
        build: {
          script: 'nx run ble:build.all  --parallel=false',
          description: '@awarns/ble: Build',
        },
      },
      // @awarns/geofencing
      geofencing: {
        build: {
          script: 'nx run geofencing:build.all --parallel=false',
          description: '@awarns/geofencing: Build',
        },
      },
      // @awarns/human-activity
      'human-activity': {
        build: {
          script: 'nx run human-activity:build.all --parallel=false',
          description: '@awarns/human-activity: Build',
        },
      },
      // @awarns/notifications
      notifications: {
        build: {
          script: 'nx run notifications:build.all --parallel=false',
          description: '@awarns/notifications: Build',
        },
      },
      // @awarns/phone-sensors
      'phone-sensors': {
        build: {
          script: 'nx run phone-sensors:build.all --parallel=false',
          description: '@awarns/phone-sensors: Build',
        },
      },
      // @awarns/wear-os
      'wear-os': {
        build: {
          script: 'nx run wear-os:build.all --parallel=false',
          description: '@awarns/wear-os: Build',
        },
      },
      // @awarns/ml-kit
      'ml-kit': {
        build: {
          script: 'nx run ml-kit:build.all --parallel=false',
          description: '@awarns/ml-kit: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all --parallel=1',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      core: {
        script: 'nx run core:focus',
        description: 'Focus on @awarns/core',
      },
      geofencing: {
        script: 'nx run geofencing:focus',
        description: 'Focus on @awarns/geofencing',
      },
      geolocation: {
        script: 'nx run geolocation:focus',
        description: 'Focus on @awarns/geolocation',
      },
      'human-activity': {
        script: 'nx run human-activity:focus',
        description: 'Focus on @awarns/human-activity',
      },
      notifications: {
        script: 'nx run notifications:focus',
        description: 'Focus on @awarns/notifications',
      },
      tracing: {
        script: 'nx run tracing:focus',
        description: 'Focus on @awarns/tracing',
      },
      persistence: {
        script: 'nx run persistence:focus',
        description: 'Focus on @awarns/persistence',
      },
      battery: {
        script: 'nx run battery:focus',
        description: 'Focus on @awarns/battery',
      },
      wifi: {
        script: 'nx run wifi:focus',
        description: 'Focus on @awarns/wifi',
      },
      ble: {
        script: 'nx run ble:focus',
        description: 'Focus on @awarns/ble',
      },
      'phone-sensors': {
        script: 'nx run phone-sensors:focus',
        description: 'Focus on @awarns/phone-sensors',
      },
      'wear-os': {
        script: 'nx run wear-os:focus',
        description: 'Focus on @awarns/wear-os',
      },
      'ml-kit': {
        script: 'nx run ml-kit:focus',
        description: 'Focus on @awarns/ml-kit',
      },
      reset: {
        script: 'nx g @awarns/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
