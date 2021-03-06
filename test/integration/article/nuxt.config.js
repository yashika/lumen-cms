const {resolve} = require('path')
// const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  rootDir: resolve(__dirname, '../../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  env: {
    GRAPHQL_PROJECT_ID: 'cj8yj66xc01740164lh5bv4fz',
    GRAPHQL_SUBSCRIPTION: null, // 'wss://subscriptions.us-west-2.graph.cool/v1/lumen-cms-demo',
    COPYRIGHT: 'Lumen CMS',
    IMAGE_PROXY: 'https://imgx.studentsgoabroad.com/v1/'
  },
  plugins: ['~/plugins/additionalComponents.js'],
  modules: [['@@', {
    apollo: {
      clientConfigs: {
        default: {
          httpEndpoint: 'https://api.graph.cool/simple/v1/lumen-cms-demo',
          wsEndpoint: null// 'wss://subscriptions.us-west-2.graph.cool/v1/lumen-cms-demo'
        }
      }
    },
    cms: {
      pageToolbarExtension: false,
      componentMapping: {
        'CmsTest': {
          name: 'lc-divider-edit',
          icon: 'clear',
          text: 'Cms Test',
          view: 'lc-cms-test'
        }
      },
      systemBar: {
        enable: true,
        dark: false,
        color: 'white'
      },
      templateVisibility: {
        SIDEBAR_LEFT: 'test'
        // HEAD_TOP (context) {
        //   console.log(context)
        //   return true
        // }
      },
      company: {
        name: 'Lumen Media Ptd. Ltd.',
        address: {
          postalCode: '049908',
          streetAddress: 'Bank of China Building 25',
          addressLocality: 'Singapore'
        },
        email: 'some@info.com',
        phoneNumbers: [{value: '+63123456', text: 'Singapore: +6263123456'}]
      }
    }
  }]],
  head: {
    title: 'Studentsgoabroad',
    meta: [
      {charset: 'utf-8'},
      {hid: 'robots', name: 'robots', content: 'noindex, nofollow'},
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
      },
      {hid: 'description', name: 'description', content: 'Studentsgoabroad project'}
    ]
  },
  build: {
    // babel: {
    //   plugins: [
    //     ['transform-imports', {
    //       'vuetify': {
    //         'transform': 'vuetify/es5/components/${member}',
    //         'preventFullImport': true
    //       }
    //     }]
    //   ]
    // },
    extend (config, ctx) {
      // config.resolve.alias['~articleUpdate'] = resolve(__dirname, './gql/UpdateArticle.gql')
      // if (ctx.isServer) {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [/^vuetify/]
      //     })
      //   ]
      // }
    }
  }
}
