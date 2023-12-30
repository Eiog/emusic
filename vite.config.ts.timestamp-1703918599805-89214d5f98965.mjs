// vite.config.ts
import { resolve as resolve2 } from "node:path";
import { defineConfig, loadEnv as loadEnv2 } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite@5.0.5_@types+node@20.10.3_less@4.2.0_sass@1.69.5/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/@vitejs+plugin-vue@4.5.1_vite@5.0.5_vue@3.3.10/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.5_vue@3.3.10/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Unocss from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unocss@0.58.0_postcss@8.4.32_rollup@2.79.1_vite@5.0.5/node_modules/unocss/dist/vite.mjs";
import Icons from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unplugin-icons@0.18.1/node_modules/unplugin-icons/dist/vite.js";
import { createSvgIconsPlugin } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.5/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import Layouts from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-vue-layouts@0.9.0_vite@5.0.5_vue-router@4.2.5_vue@3.3.10/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import WebfontDownload from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.1_vite@5.0.5/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import { webUpdateNotice } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/@plugin-web-update-notification+vite@1.7.0_vite@5.0.5/node_modules/@plugin-web-update-notification/vite/dist/index.js";
import { vitePluginVersionMark } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-version-mark@0.0.10/node_modules/vite-plugin-version-mark/dist/vite/index.js";
import VueDevTools from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-vue-devtools@1.0.0-rc.7_pug@3.0.2_rollup@2.79.1_vite@5.0.5/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { viteVueCSSVars } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unplugin-vue-cssvars@2.0.0_@ast-grep+napi@0.6.7_baiwusanyu-utils@1.0.16_chalk@4.1.2_estree-wa_vlecwlx4zwn7sqsak47kwkwnhq/node_modules/unplugin-vue-cssvars/index.js";
import Pages from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-pages@0.32.0_vite@5.0.5/node_modules/vite-plugin-pages/dist/index.js";
import postcssPresetEnv from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/postcss-preset-env@9.3.0_postcss@8.4.32/node_modules/postcss-preset-env/dist/index.mjs";

// plugin/vite-plugin-mock.ts
import express from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/express@4.18.2/node_modules/express/index.js";

// api/_routes.ts
import { Router } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/express@4.18.2/node_modules/express/index.js";

// api/info.ts
function handler(req, res) {
  const cityHeader = req.headers["x-vercel-ip-city"];
  const city = cityHeader ? decodeURIComponent(cityHeader) : "-";
  const ipHeader = req.headers["x-forwarded-for"];
  const ip = ipHeader ? ipHeader.split(",")[0] : "-";
  res.send({ city, ip });
}

// api/track.ts
function handler2(req, res) {
  const { body } = req;
  res.send(body);
}

// api/_routes.ts
var router = Router();
router.get("/info", handler);
router.post("/track", handler2);
var routes_default = router;

// plugin/vite-plugin-mock.ts
function VitePluginMock(options) {
  const app = express();
  app.use(express.json());
  app.use(routes_default);
  return {
    name: "vite-plugin-vercel-mock",
    apply: "serve",
    configureServer: async (server) => {
      server.middlewares.use(options?.prefix ?? "/api", app);
    }
  };
}

// config/vite-plugin-electron.ts
import { rmSync } from "node:fs";
import electron from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-electron@0.15.4_vite-plugin-electron-renderer@0.14.5/node_modules/vite-plugin-electron/dist/index.mjs";
import renderer from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-electron-renderer@0.14.5/node_modules/vite-plugin-electron-renderer/dist/index.mjs";
import { notBundle } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-electron@0.15.4_vite-plugin-electron-renderer@0.14.5/node_modules/vite-plugin-electron/dist/plugin.mjs";
import { writeJsonFile } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/write-json-file@5.0.0/node_modules/write-json-file/index.js";

// package.json
var package_default = {
  name: "vue3-starter",
  type: "module",
  version: "0.0.1",
  private: true,
  description: "vue3-starter template",
  author: "Eiog",
  license: "MIT",
  homepage: "https://github.com/Eiog/vue3-starter",
  main: "dist-electron/main/index.js",
  scripts: {
    dev: "vite",
    "dev:electron": "vite dev --mode electron",
    "dev:tauri": "tauri dev",
    "dev:vercel": "vercel dev --listen 5678",
    build: "vue-tsc --noEmit && vite build",
    "build:electron": "vue-tsc --noEmit && vite build --mode electron && pnpm build-icon && electron-builder",
    "build:tauri": "tauri build",
    "build-icon": "electron-icon-builder --input=./public/icon.png --output=dist-electron --flatten",
    lint: "eslint .",
    "lint:fix": "eslint . --fix",
    test: "vitest",
    "update:deps": "taze -w && pnpm i",
    "type:check": "vue-tsc --noEmit",
    start: "node ./app.js",
    preview: "vite preview",
    cz: "czg",
    commit: "git pull && git add -A && pnpm cz && git push",
    preinstall: "npx only-allow pnpm",
    postinstall: "npx simple-git-hooks"
  },
  dependencies: {
    "@better-scroll/core": "^2.5.1",
    "@formkit/auto-animate": "0.8.1",
    "@morev/vue-transitions": "^2.3.6",
    "@nutui/nutui": "^4.2.4",
    "@tauri-apps/api": "^1.5.1",
    "@unocss/reset": "^0.58.0",
    "@vueuse/core": "^10.7.0",
    "@vueuse/head": "^2.0.0",
    "@vueuse/motion": "^2.0.0",
    alova: "^2.15.1",
    axios: "^1.6.2",
    colord: "^2.9.3",
    echarts: "^5.4.3",
    "element-plus": "^2.4.3",
    jsmediatags: "^3.9.7",
    notivue: "^1.4.5",
    nprogress: "^0.2.0",
    pinia: "^2.1.7",
    "pinia-plugin-persistedstate": "^3.2.0",
    primevue: "^3.44.0",
    vant: "^4.8.0",
    vue: "^3.3.10",
    "vue-chemistry": "^0.2.2",
    "vue-hooks-plus": "^1.8.6",
    "vue-i18n": "^9.8.0",
    "vue-router": "^4.2.5",
    "vue-starport": "^0.4.0",
    vuetify: "^3.4.5"
  },
  devDependencies: {
    "@eiog/eslint-config": "^0.0.2",
    "@eiog/ts-config": "^0.0.3",
    "@electron-toolkit/preload": "^2.0.0",
    "@electron-toolkit/utils": "^2.0.1",
    "@iconify-json/ri": "^1.1.15",
    "@iconify-json/twemoji": "^1.1.14",
    "@intlify/unplugin-vue-i18n": "^1.5.0",
    "@nutui/auto-import-resolver": "^1.0.0",
    "@plugin-web-update-notification/vite": "^1.7.0",
    "@tauri-apps/cli": "^1.5.7",
    "@types/crypto-js": "^4.2.1",
    "@types/express": "^4.17.21",
    "@types/jsmediatags": "^3.9.6",
    "@types/node": "^20.10.3",
    "@types/nprogress": "^0.2.3",
    "@unscatty/unocss-preset-daisy": "^1.0.0",
    "@vitejs/plugin-vue": "^4.5.1",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    "@vitest/ui": "^1.0.1",
    "@vue/test-utils": "^2.4.3",
    commitlint: "^18.4.3",
    "crypto-js": "^4.2.0",
    "cz-git": "^1.8.0",
    czg: "^1.8.0",
    daisyui: "^3.9.4",
    electron: "^28.0.0",
    "electron-builder": "^24.9.1",
    "electron-icon-builder": "^2.0.1",
    "electron-store": "^8.1.0",
    "electron-updater": "^6.1.7",
    eslint: "^8.55.0",
    express: "^4.18.2",
    "fast-glob": "^3.3.2",
    "file-type": "^18.7.0",
    "http-proxy-middleware": "^2.0.6",
    jsdom: "^23.0.1",
    less: "^4.2.0",
    "lint-staged": "^15.2.0",
    "markdown-it-link-attributes": "^4.0.1",
    "markdown-it-shiki": "^0.9.0",
    "naive-ui": "^2.35.0",
    "postcss-preset-env": "^9.3.0",
    sass: "^1.69.5",
    "simple-git-hooks": "^2.9.0",
    taze: "^0.13.0",
    typescript: "^5.3.2",
    unocss: "^0.58.0",
    "unocss-preset-daisy": "^7.0.0",
    "unocss-preset-extra": "^0.5.3",
    "unocss-preset-scrollbar": "^0.3.0",
    "unplugin-auto-import": "^0.17.2",
    "unplugin-icons": "^0.18.1",
    "unplugin-vue-components": "^0.26.0",
    "unplugin-vue-cssvars": "2.0.0",
    "unplugin-vue-inspector": "^1.0.2",
    "unplugin-vue-markdown": "^0.25.2",
    "unplugin-vue-router": "^0.7.0",
    vercel: "^32.6.1",
    vfonts: "^0.0.3",
    vite: "^5.0.5",
    "vite-electron-plugin": "^0.8.3",
    "vite-plugin-electron": "0.15.4",
    "vite-plugin-electron-renderer": "^0.14.5",
    "vite-plugin-inspect": "^0.8.1",
    "vite-plugin-pages": "^0.32.0",
    "vite-plugin-pwa": "^0.17.3",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-plugin-tauri": "^3.3.0",
    "vite-plugin-version-mark": "^0.0.10",
    "vite-plugin-virtual": "^0.2.0",
    "vite-plugin-vue-component-preview": "^1.1.6",
    "vite-plugin-vue-devtools": "1.0.0-rc.7",
    "vite-plugin-vue-layouts": "^0.9.0",
    "vite-plugin-vuetify": "^1.0.2",
    "vite-plugin-webfont-dl": "^3.9.1",
    vitest: "^1.0.1",
    "vue-router-better-scroller": "^0.0.0",
    "vue-tsc": "^1.8.25",
    "write-json-file": "^5.0.0"
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged && pnpm type:check"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "pnpm lint:fix"
    ]
  }
};

// config/vite-plugin-electron.ts
function VitePluginElectron({ command }) {
  const isServe = command === "serve";
  const isBuild = command === "build";
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG;
  rmSync("dist-electron", { recursive: true, force: true });
  writeJsonFile("dist-electron/package.json", { type: "commonjs" });
  return [
    electron([
      {
        // Main process entry file of the Electron App.
        entry: "electron/main/index.ts",
        onstart({ startup }) {
          if (process.env.VSCODE_DEBUG)
            console.log(
              /* For `.vscode/.debug.script.mjs` */
              "[startup] Electron App"
            );
          else
            startup();
        },
        vite: {
          build: {
            sourcemap,
            minify: isBuild,
            outDir: "dist-electron/main",
            rollupOptions: {
              // Some third-party Node.js libraries may not be built correctly by Vite, especially `C/C++` addons,
              // we can use `external` to exclude them to ensure they work correctly.
              // Others need to put them in `dependencies` to ensure they are collected into `app.asar` after the app is built.
              // Of course, this is not absolute, just this way is relatively simple. :)
              external: Object.keys("dependencies" in package_default ? package_default.dependencies : {})
            }
          },
          plugins: [
            // This is just an option to improve build performance, it's non-deterministic!
            // e.g. `import log from 'electron-log'` -> `const log = require('electron-log')`
            isServe && notBundle()
          ]
        }
      },
      {
        entry: "electron/preload/index.ts",
        onstart({ reload }) {
          reload();
        },
        vite: {
          build: {
            sourcemap: sourcemap ? "inline" : void 0,
            // #332
            minify: isBuild,
            outDir: "dist-electron/preload",
            rollupOptions: {
              external: Object.keys("dependencies" in package_default ? package_default.dependencies : {})
            }
          },
          plugins: [
            isServe && notBundle()
          ]
        }
      }
    ]),
    // https://github.com/electron-vite/vite-plugin-electron
    // Use Node.js API in the Renderer process
    renderer()
    // https://github.com/electron-vite/vite-plugin-electron-renderer
  ];
}

// config/vite-plugin-auto-import.ts
import {
  ElementPlusResolver
} from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@2.79.1_vue@3.3.10/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unplugin-auto-import@0.17.2_@vueuse+core@10.7.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
function VitePluginAutoImport() {
  return [
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/
        // .vue
      ],
      imports: [
        "vue",
        "@vueuse/core",
        "@vueuse/head",
        "pinia",
        "vue-router",
        "vue-i18n",
        {
          "@tauri-apps/api/app": ["getName", "getVersion", "getTauriVersion"],
          "@tauri-apps/api/shell": ["Command"],
          "@tauri-apps/api/os": ["platform"],
          "@tauri-apps/api/notification": ["sendNotification", "requestPermission", "isPermissionGranted"]
        }
      ],
      dirs: ["src/hooks", "src/composables", "src/stores", "src/utils"],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()]
    })
    // https://github.com/antfu/unplugin-auto-import
  ];
}

// config/vite-plugin-components.ts
import Components from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@2.79.1_vue@3.3.10/node_modules/unplugin-vue-components/dist/vite.js";
import {
  ElementPlusResolver as ElementPlusResolver2,
  NaiveUiResolver,
  PrimeVueResolver,
  VantResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
  Vuetify3Resolver
} from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@2.79.1_vue@3.3.10/node_modules/unplugin-vue-components/dist/resolvers.js";
import NutUIResolver from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/@nutui+auto-import-resolver@1.0.0/node_modules/@nutui/auto-import-resolver/dist/index.mjs";
function VitePluginComponents() {
  return [
    Components({
      dirs: ["src/components", "src/layouts"],
      extensions: ["vue", "md"],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        NaiveUiResolver(),
        VantResolver(),
        Vuetify3Resolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        PrimeVueResolver({ prefix: "P" }),
        ElementPlusResolver2(),
        NutUIResolver()
      ]
    })
    // https://github.com/antfu/unplugin-vue-components
  ];
}

// config/vite-plugin-markdown.ts
import Markdown from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/unplugin-vue-markdown@0.25.2_rollup@2.79.1_vite@5.0.5/node_modules/unplugin-vue-markdown/dist/vite.js";
import LinkAttributes from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Shiki from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/markdown-it-shiki@0.9.0/node_modules/markdown-it-shiki/dist/index.mjs";
function VitePluginMarkdown() {
  return [
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
      }
    })
    // https://github.com/antfu/vite-plugin-vue-markdown
  ];
}

// config/vite-plugin-pwa.ts
import { loadEnv } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite@5.0.5_@types+node@20.10.3_less@4.2.0_sass@1.69.5/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/vite-plugin-pwa@0.17.3_vite@5.0.5_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
function VitePluginPWA({ mode }) {
  const { VITE_APP_NAME, VITE_APP_DESCRIPTION } = loadEnv(mode, process.cwd(), "");
  return [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: VITE_APP_NAME,
        short_name: VITE_APP_NAME,
        description: VITE_APP_DESCRIPTION,
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      devOptions: {
        enabled: process.env.SW_DEV === "true",
        /* when using generateSW the PWA plugin will switch to classic */
        type: "module",
        navigateFallback: "index.html"
      }
    })
    // https://github.com/antfu/vite-plugin-pwa
  ];
}

// config/vite-plugin-i18n.ts
import { resolve } from "node:path";
import VueI18nPlugin from "file:///C:/Users/PC/Desktop/Projects/emusic/node_modules/.pnpm/@intlify+unplugin-vue-i18n@1.5.0_rollup@2.79.1_vue-i18n@9.8.0/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
var __vite_injected_original_dirname = "C:\\Users\\PC\\Desktop\\Projects\\emusic\\config";
function VitePluginI18n() {
  return [
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: resolve(__vite_injected_original_dirname, "./src/locales/**")
    })
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
  ];
}

// vite.config.ts
var __vite_injected_original_dirname2 = "C:\\Users\\PC\\Desktop\\Projects\\emusic";
var vite_config_default = defineConfig(({ command, mode }) => {
  const { VITE_DEV_PORT, VITE_API_BASE_PREFIX, VITE_API_BASE_URL } = loadEnv2(mode, process.cwd(), "");
  const isElectron = mode === "electron";
  const debug = !!process.env.VSCODE_DEBUG || !!process.env.TAURI_DEBUG;
  return {
    plugins: [
      VueDevTools(),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      // virtual({
      //   'virtual:module': 'export default { mode: \'web\' }',
      // }), // https://github.com/patak-dev/vite-plugin-virtual Vite5 type=module 报错
      VitePluginMock({ prefix: VITE_API_BASE_PREFIX }),
      Pages({
        extensions: ["vue", "md"]
      }),
      // https://github.com/posva/unplugin-vue-router
      Layouts(),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      createSvgIconsPlugin({
        iconDirs: [resolve2(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      // https://github.com/vbenjs/vite-plugin-svg-icons
      webUpdateNotice({
        logVersion: true
      }),
      // https://github.com/GreatAuk/plugin-web-update-notification
      vitePluginVersionMark({
        // name: 'test-app',
        // version: '0.0.1',
        // command: 'git describe --tags',
        ifGitSHA: true,
        ifShortSHA: true,
        ifMeta: true,
        ifLog: true,
        ifGlobal: true
      }),
      // https://github.com/ZhongxuYang/vite-plugin-version-mark
      vue({
        script: {
          defineModel: true,
          propsDestructure: true
        },
        include: [/\.vue$/, /\.md$/]
      }),
      // https://github.com/vitejs/vite-plugin-vue
      vueJsx(),
      // https://github.com/vitejs/vite-plugin-vue
      viteVueCSSVars({
        include: [/.vue/],
        includeCompile: ["**/**.scss"],
        server: false
      }),
      // https://github.com/baiwusanyu-c/unplugin-vue-cssvars
      WebfontDownload(),
      // https://github.com/feat-agency/vite-plugin-webfont-dl
      Icons({ compiler: "vue3" }),
      // https://github.com/antfu/unplugin-icons
      Unocss(),
      // https://github.com/antfu/unocss
      ...VitePluginAutoImport(),
      ...VitePluginComponents(),
      ...VitePluginI18n(),
      ...VitePluginMarkdown(),
      ...VitePluginPWA({ command, mode }),
      ...isElectron ? VitePluginElectron({ command, mode }) : []
    ],
    clearScreen: true,
    server: {
      port: Number(VITE_DEV_PORT),
      host: true,
      // host设置为true才可以使用network的形式，以ip访问项目
      open: false,
      // 自动打开浏览器
      cors: true,
      // 跨域设置允许
      strictPort: true,
      // 如果端口已占用直接退出
      proxy: {
        [VITE_API_BASE_PREFIX]: {
          target: VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\`${VITE_API_BASE_PREFIX}`/, "")
        }
      }
    },
    envPrefix: ["VITE_", "TAURI_"],
    build: {
      minify: debug ? false : "esbuild",
      sourcemap: debug,
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2e3,
      // 在生产环境移除console.log
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true,
      //   },
      // },
      assetsDir: "static/assets",
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
          // manualChunks: configManualChunk,
        }
      }
    },
    resolve: {
      alias: {
        "~": resolve2(__vite_injected_original_dirname2, "./src"),
        // 路径别名
        "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js"
      }
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        scopeBehaviour: "local"
      },
      postcss: {
        plugins: [
          postcssPresetEnv()
        ]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2luL3ZpdGUtcGx1Z2luLW1vY2sudHMiLCAiYXBpL19yb3V0ZXMudHMiLCAiYXBpL2luZm8udHMiLCAiYXBpL3RyYWNrLnRzIiwgImNvbmZpZy92aXRlLXBsdWdpbi1lbGVjdHJvbi50cyIsICJwYWNrYWdlLmpzb24iLCAiY29uZmlnL3ZpdGUtcGx1Z2luLWF1dG8taW1wb3J0LnRzIiwgImNvbmZpZy92aXRlLXBsdWdpbi1jb21wb25lbnRzLnRzIiwgImNvbmZpZy92aXRlLXBsdWdpbi1tYXJrZG93bi50cyIsICJjb25maWcvdml0ZS1wbHVnaW4tcHdhLnRzIiwgImNvbmZpZy92aXRlLXBsdWdpbi1pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QQy9EZXNrdG9wL1Byb2plY3RzL2VtdXNpYy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgV2ViZm9udERvd25sb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGwnXG5pbXBvcnQgeyB3ZWJVcGRhdGVOb3RpY2UgfSBmcm9tICdAcGx1Z2luLXdlYi11cGRhdGUtbm90aWZpY2F0aW9uL3ZpdGUnXG5pbXBvcnQgeyB2aXRlUGx1Z2luVmVyc2lvbk1hcmsgfSBmcm9tICd2aXRlLXBsdWdpbi12ZXJzaW9uLW1hcmsnXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHsgdml0ZVZ1ZUNTU1ZhcnMgfSBmcm9tICd1bnBsdWdpbi12dWUtY3NzdmFycydcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBwb3N0Y3NzUHJlc2V0RW52IGZyb20gJ3Bvc3Rjc3MtcHJlc2V0LWVudidcblxuaW1wb3J0IHsgVml0ZVBsdWdpbk1vY2sgfSBmcm9tICcuL3BsdWdpbidcblxuaW1wb3J0IHsgVml0ZVBsdWdpbkF1dG9JbXBvcnQsIFZpdGVQbHVnaW5Db21wb25lbnRzLCBWaXRlUGx1Z2luRWxlY3Ryb24sIFZpdGVQbHVnaW5JMThuLCBWaXRlUGx1Z2luTWFya2Rvd24sIFZpdGVQbHVnaW5QV0EgfSBmcm9tICcuL2NvbmZpZydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICBjb25zdCB7IFZJVEVfREVWX1BPUlQsIFZJVEVfQVBJX0JBU0VfUFJFRklYLCBWSVRFX0FQSV9CQVNFX1VSTCB9ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJylcbiAgY29uc3QgaXNFbGVjdHJvbiA9IG1vZGUgPT09ICdlbGVjdHJvbidcbiAgY29uc3QgZGVidWcgPSAhIXByb2Nlc3MuZW52LlZTQ09ERV9ERUJVRyB8fCAhIXByb2Nlc3MuZW52LlRBVVJJX0RFQlVHXG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBWdWVEZXZUb29scygpLCAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuXG4gICAgICAvLyB2aXJ0dWFsKHtcbiAgICAgIC8vICAgJ3ZpcnR1YWw6bW9kdWxlJzogJ2V4cG9ydCBkZWZhdWx0IHsgbW9kZTogXFwnd2ViXFwnIH0nLFxuICAgICAgLy8gfSksIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXRhay1kZXYvdml0ZS1wbHVnaW4tdmlydHVhbCBWaXRlNSB0eXBlPW1vZHVsZSBcdTYyQTVcdTk1MTlcblxuICAgICAgVml0ZVBsdWdpbk1vY2soeyBwcmVmaXg6IFZJVEVfQVBJX0JBU0VfUFJFRklYIH0pLFxuXG4gICAgICBQYWdlcyh7XG4gICAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICB9KSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcblxuICAgICAgTGF5b3V0cygpLCAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcbiAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXG4gICAgICB9KSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZiZW5qcy92aXRlLXBsdWdpbi1zdmctaWNvbnNcblxuICAgICAgd2ViVXBkYXRlTm90aWNlKHtcbiAgICAgICAgbG9nVmVyc2lvbjogdHJ1ZSxcbiAgICAgIH0pLCAvLyBodHRwczovL2dpdGh1Yi5jb20vR3JlYXRBdWsvcGx1Z2luLXdlYi11cGRhdGUtbm90aWZpY2F0aW9uXG5cbiAgICAgIHZpdGVQbHVnaW5WZXJzaW9uTWFyayh7XG4gICAgICAgIC8vIG5hbWU6ICd0ZXN0LWFwcCcsXG4gICAgICAgIC8vIHZlcnNpb246ICcwLjAuMScsXG4gICAgICAgIC8vIGNvbW1hbmQ6ICdnaXQgZGVzY3JpYmUgLS10YWdzJyxcbiAgICAgICAgaWZHaXRTSEE6IHRydWUsXG4gICAgICAgIGlmU2hvcnRTSEE6IHRydWUsXG4gICAgICAgIGlmTWV0YTogdHJ1ZSxcbiAgICAgICAgaWZMb2c6IHRydWUsXG4gICAgICAgIGlmR2xvYmFsOiB0cnVlLFxuICAgICAgfSksIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9aaG9uZ3h1WWFuZy92aXRlLXBsdWdpbi12ZXJzaW9uLW1hcmtcblxuICAgICAgdnVlKHtcbiAgICAgICAgc2NyaXB0OiB7XG4gICAgICAgICAgZGVmaW5lTW9kZWw6IHRydWUsXG4gICAgICAgICAgcHJvcHNEZXN0cnVjdHVyZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgICAgfSksIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS1wbHVnaW4tdnVlXG5cbiAgICAgIHZ1ZUpzeCgpLCAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUtcGx1Z2luLXZ1ZVxuXG4gICAgICB2aXRlVnVlQ1NTVmFycyh7XG4gICAgICAgIGluY2x1ZGU6IFsvLnZ1ZS9dLFxuICAgICAgICBpbmNsdWRlQ29tcGlsZTogWycqKi8qKi5zY3NzJ10sXG4gICAgICAgIHNlcnZlcjogZmFsc2UsXG4gICAgICB9KSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhaXd1c2FueXUtYy91bnBsdWdpbi12dWUtY3NzdmFyc1xuXG4gICAgICBXZWJmb250RG93bmxvYWQoKSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZlYXQtYWdlbmN5L3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcblxuICAgICAgSWNvbnMoeyBjb21waWxlcjogJ3Z1ZTMnIH0pLCAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4taWNvbnNcbiAgICAgIFVub2NzcygpLCAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXG4gICAgICAuLi5WaXRlUGx1Z2luQXV0b0ltcG9ydCgpLFxuICAgICAgLi4uVml0ZVBsdWdpbkNvbXBvbmVudHMoKSxcbiAgICAgIC4uLlZpdGVQbHVnaW5JMThuKCksXG4gICAgICAuLi5WaXRlUGx1Z2luTWFya2Rvd24oKSxcbiAgICAgIC4uLlZpdGVQbHVnaW5QV0EoeyBjb21tYW5kLCBtb2RlIH0pLFxuICAgICAgLi4uaXNFbGVjdHJvbiA/IFZpdGVQbHVnaW5FbGVjdHJvbih7IGNvbW1hbmQsIG1vZGUgfSkgOiBbXSxcbiAgICBdLFxuICAgIGNsZWFyU2NyZWVuOiB0cnVlLFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogTnVtYmVyKFZJVEVfREVWX1BPUlQpLFxuICAgICAgaG9zdDogdHJ1ZSwgLy8gaG9zdFx1OEJCRVx1N0Y2RVx1NEUzQXRydWVcdTYyNERcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjhuZXR3b3JrXHU3Njg0XHU1RjYyXHU1RjBGXHVGRjBDXHU0RUU1aXBcdThCQkZcdTk1RUVcdTk4NzlcdTc2RUVcbiAgICAgIG9wZW46IGZhbHNlLCAvLyBcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjhcbiAgICAgIGNvcnM6IHRydWUsIC8vIFx1OERFOFx1NTdERlx1OEJCRVx1N0Y2RVx1NTE0MVx1OEJCOFxuICAgICAgc3RyaWN0UG9ydDogdHJ1ZSwgLy8gXHU1OTgyXHU2NzlDXHU3QUVGXHU1M0UzXHU1REYyXHU1MzYwXHU3NTI4XHU3NkY0XHU2M0E1XHU5MDAwXHU1MUZBXG4gICAgICBwcm94eToge1xuICAgICAgICBbVklURV9BUElfQkFTRV9QUkVGSVhdOiB7XG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX0FQSV9CQVNFX1VSTCxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXGAke1ZJVEVfQVBJX0JBU0VfUFJFRklYfWAvLCAnJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZW52UHJlZml4OiBbJ1ZJVEVfJywgJ1RBVVJJXyddLFxuICAgIGJ1aWxkOiB7XG4gICAgICBtaW5pZnk6IGRlYnVnID8gZmFsc2UgOiAnZXNidWlsZCcsXG4gICAgICBzb3VyY2VtYXA6IGRlYnVnLFxuICAgICAgYnJvdGxpU2l6ZTogZmFsc2UsXG4gICAgICAvLyBcdTZEODhcdTk2NjRcdTYyNTNcdTUzMDVcdTU5MjdcdTVDMEZcdThEODVcdThGQzc1MDBrYlx1OEI2Nlx1NTQ0QVxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLFxuICAgICAgLy8gXHU1NzI4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU3OUZCXHU5NjY0Y29uc29sZS5sb2dcbiAgICAgIC8vIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIC8vICAgY29tcHJlc3M6IHtcbiAgICAgIC8vICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAvLyAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0sXG4gICAgICBhc3NldHNEaXI6ICdzdGF0aWMvYXNzZXRzJyxcbiAgICAgIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NjI1M1x1NTMwNVx1NTIzMGRpc3RcdTRFMEJcdTc2ODRcdTRFMERcdTU0MENcdTc2RUVcdTVGNTVcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdzdGF0aWMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICAgICAgLy8gbWFudWFsQ2h1bmtzOiBjb25maWdNYW51YWxDaHVuayxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnfic6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSwgLy8gXHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXG4gICAgICAgICd2dWUtaTE4bic6ICd2dWUtaTE4bi9kaXN0L3Z1ZS1pMThuLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgbW9kdWxlczoge1xuICAgICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlJyxcbiAgICAgICAgc2NvcGVCZWhhdmlvdXI6ICdsb2NhbCcsXG4gICAgICB9LFxuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgcG9zdGNzc1ByZXNldEVudigpLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXGVtdXNpY1xcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXHBsdWdpblxcXFx2aXRlLXBsdWdpbi1tb2NrLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QQy9EZXNrdG9wL1Byb2plY3RzL2VtdXNpYy9wbHVnaW4vdml0ZS1wbHVnaW4tbW9jay50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9hcGkvX3JvdXRlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWaXRlUGx1Z2luTW9jayhvcHRpb25zPzogeyBwcmVmaXg/OiBzdHJpbmcgfSk6IFBsdWdpbiB7XHJcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpXHJcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSlcclxuICBhcHAudXNlKHJvdXRlcylcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLXZlcmNlbC1tb2NrJyxcclxuICAgIGFwcGx5OiAnc2VydmUnLFxyXG4gICAgY29uZmlndXJlU2VydmVyOiBhc3luYyAoc2VydmVyKSA9PiB7XHJcbiAgICAvLyBtb3VudCBtb2NrIHNlcnZlciwgYC9hcGlgIGlzIHRoZSBiYXNlIHVybFxyXG4gICAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKG9wdGlvbnM/LnByZWZpeCA/PyAnL2FwaScsIGFwcClcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaXRlUGx1Z2luTW9ja1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXGFwaVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcXFxcYXBpXFxcXF9yb3V0ZXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1BDL0Rlc2t0b3AvUHJvamVjdHMvZW11c2ljL2FwaS9fcm91dGVzLnRzXCI7aW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGluZm8gZnJvbSAnLi9pbmZvJ1xyXG5pbXBvcnQgdHJhY2sgZnJvbSAnLi90cmFjaydcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcbnJvdXRlci5nZXQoJy9pbmZvJywgaW5mbylcclxucm91dGVyLnBvc3QoJy90cmFjaycsIHRyYWNrKVxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXGVtdXNpY1xcXFxhcGlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXGFwaVxcXFxpbmZvLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QQy9EZXNrdG9wL1Byb2plY3RzL2VtdXNpYy9hcGkvaW5mby50c1wiO2ltcG9ydCB0eXBlIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IFJlcXVlc3QsXHJcbiAgcmVzOiBSZXNwb25zZSxcclxuKSB7XHJcbiAgY29uc3QgY2l0eUhlYWRlciA9IHJlcS5oZWFkZXJzWyd4LXZlcmNlbC1pcC1jaXR5J10gYXMgc3RyaW5nXHJcbiAgY29uc3QgY2l0eSA9IGNpdHlIZWFkZXIgPyBkZWNvZGVVUklDb21wb25lbnQoY2l0eUhlYWRlcikgOiAnLSdcclxuICBjb25zdCBpcEhlYWRlciA9IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSBhcyBzdHJpbmdcclxuICBjb25zdCBpcCA9IGlwSGVhZGVyID8gaXBIZWFkZXIuc3BsaXQoJywnKVswXSA6ICctJ1xyXG4gIHJlcy5zZW5kKHsgY2l0eSwgaXAgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXGFwaVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcXFxcYXBpXFxcXHRyYWNrLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QQy9EZXNrdG9wL1Byb2plY3RzL2VtdXNpYy9hcGkvdHJhY2sudHNcIjtpbXBvcnQgdHlwZSB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBSZXF1ZXN0LFxyXG4gIHJlczogUmVzcG9uc2UsXHJcbikge1xyXG4gIGNvbnN0IHsgYm9keSB9ID0gcmVxXHJcbiAgcmVzLnNlbmQoYm9keSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcXFxcY29uZmlnXFxcXHZpdGUtcGx1Z2luLWVsZWN0cm9uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QQy9EZXNrdG9wL1Byb2plY3RzL2VtdXNpYy9jb25maWcvdml0ZS1wbHVnaW4tZWxlY3Ryb24udHNcIjtpbXBvcnQgeyBybVN5bmMgfSBmcm9tICdub2RlOmZzJ1xuaW1wb3J0IHR5cGUgeyBDb25maWdFbnYsIFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZGVmYXVsdFxuaW1wb3J0IGVsZWN0cm9uIGZyb20gJ3ZpdGUtcGx1Z2luLWVsZWN0cm9uJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3ZpdGUtcGx1Z2luLWVsZWN0cm9uLXJlbmRlcmVyJ1xuaW1wb3J0IHsgbm90QnVuZGxlIH0gZnJvbSAndml0ZS1wbHVnaW4tZWxlY3Ryb24vcGx1Z2luJ1xuaW1wb3J0IHsgd3JpdGVKc29uRmlsZSB9IGZyb20gJ3dyaXRlLWpzb24tZmlsZSdcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZnVuY3Rpb24gVml0ZVBsdWdpbkVsZWN0cm9uKHsgY29tbWFuZCB9OiBDb25maWdFbnYpOiBQbHVnaW5PcHRpb25bXSB7XG4gIGNvbnN0IGlzU2VydmUgPSBjb21tYW5kID09PSAnc2VydmUnXG4gIGNvbnN0IGlzQnVpbGQgPSBjb21tYW5kID09PSAnYnVpbGQnXG4gIGNvbnN0IHNvdXJjZW1hcCA9IGlzU2VydmUgfHwgISFwcm9jZXNzLmVudi5WU0NPREVfREVCVUdcbiAgcm1TeW5jKCdkaXN0LWVsZWN0cm9uJywgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pXG4gIHdyaXRlSnNvbkZpbGUoJ2Rpc3QtZWxlY3Ryb24vcGFja2FnZS5qc29uJywgeyB0eXBlOiAnY29tbW9uanMnIH0pXG4gIHJldHVybiBbXG4gICAgZWxlY3Ryb24oW1xuICAgICAge1xuICAgICAgICAvLyBNYWluIHByb2Nlc3MgZW50cnkgZmlsZSBvZiB0aGUgRWxlY3Ryb24gQXBwLlxuICAgICAgICBlbnRyeTogJ2VsZWN0cm9uL21haW4vaW5kZXgudHMnLFxuICAgICAgICBvbnN0YXJ0KHsgc3RhcnR1cCB9KSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52LlZTQ09ERV9ERUJVRylcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygvKiBGb3IgYC52c2NvZGUvLmRlYnVnLnNjcmlwdC5tanNgICovJ1tzdGFydHVwXSBFbGVjdHJvbiBBcHAnKVxuXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RhcnR1cCgpXG4gICAgICAgIH0sXG4gICAgICAgIHZpdGU6IHtcbiAgICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgc291cmNlbWFwLFxuICAgICAgICAgICAgbWluaWZ5OiBpc0J1aWxkLFxuICAgICAgICAgICAgb3V0RGlyOiAnZGlzdC1lbGVjdHJvbi9tYWluJyxcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgLy8gU29tZSB0aGlyZC1wYXJ0eSBOb2RlLmpzIGxpYnJhcmllcyBtYXkgbm90IGJlIGJ1aWx0IGNvcnJlY3RseSBieSBWaXRlLCBlc3BlY2lhbGx5IGBDL0MrK2AgYWRkb25zLFxuICAgICAgICAgICAgICAvLyB3ZSBjYW4gdXNlIGBleHRlcm5hbGAgdG8gZXhjbHVkZSB0aGVtIHRvIGVuc3VyZSB0aGV5IHdvcmsgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAvLyBPdGhlcnMgbmVlZCB0byBwdXQgdGhlbSBpbiBgZGVwZW5kZW5jaWVzYCB0byBlbnN1cmUgdGhleSBhcmUgY29sbGVjdGVkIGludG8gYGFwcC5hc2FyYCBhZnRlciB0aGUgYXBwIGlzIGJ1aWx0LlxuICAgICAgICAgICAgICAvLyBPZiBjb3Vyc2UsIHRoaXMgaXMgbm90IGFic29sdXRlLCBqdXN0IHRoaXMgd2F5IGlzIHJlbGF0aXZlbHkgc2ltcGxlLiA6KVxuICAgICAgICAgICAgICBleHRlcm5hbDogT2JqZWN0LmtleXMoJ2RlcGVuZGVuY2llcycgaW4gcGtnID8gcGtnLmRlcGVuZGVuY2llcyA6IHt9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGp1c3QgYW4gb3B0aW9uIHRvIGltcHJvdmUgYnVpbGQgcGVyZm9ybWFuY2UsIGl0J3Mgbm9uLWRldGVybWluaXN0aWMhXG4gICAgICAgICAgICAvLyBlLmcuIGBpbXBvcnQgbG9nIGZyb20gJ2VsZWN0cm9uLWxvZydgIC0+IGBjb25zdCBsb2cgPSByZXF1aXJlKCdlbGVjdHJvbi1sb2cnKWBcbiAgICAgICAgICAgIGlzU2VydmUgJiYgbm90QnVuZGxlKCksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVudHJ5OiAnZWxlY3Ryb24vcHJlbG9hZC9pbmRleC50cycsXG4gICAgICAgIG9uc3RhcnQoeyByZWxvYWQgfSkge1xuICAgICAgICAgIC8vIE5vdGlmeSB0aGUgUmVuZGVyZXIgcHJvY2VzcyB0byByZWxvYWQgdGhlIHBhZ2Ugd2hlbiB0aGUgUHJlbG9hZCBzY3JpcHRzIGJ1aWxkIGlzIGNvbXBsZXRlLFxuICAgICAgICAgIC8vIGluc3RlYWQgb2YgcmVzdGFydGluZyB0aGUgZW50aXJlIEVsZWN0cm9uIEFwcC5cbiAgICAgICAgICByZWxvYWQoKVxuICAgICAgICB9LFxuICAgICAgICB2aXRlOiB7XG4gICAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgIHNvdXJjZW1hcDogc291cmNlbWFwID8gJ2lubGluZScgOiB1bmRlZmluZWQsIC8vICMzMzJcbiAgICAgICAgICAgIG1pbmlmeTogaXNCdWlsZCxcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QtZWxlY3Ryb24vcHJlbG9hZCcsXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAgIGV4dGVybmFsOiBPYmplY3Qua2V5cygnZGVwZW5kZW5jaWVzJyBpbiBwa2cgPyBwa2cuZGVwZW5kZW5jaWVzIDoge30pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIGlzU2VydmUgJiYgbm90QnVuZGxlKCksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGVjdHJvbi12aXRlL3ZpdGUtcGx1Z2luLWVsZWN0cm9uXG4gICAgLy8gVXNlIE5vZGUuanMgQVBJIGluIHRoZSBSZW5kZXJlciBwcm9jZXNzXG4gICAgcmVuZGVyZXIoKSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uLXZpdGUvdml0ZS1wbHVnaW4tZWxlY3Ryb24tcmVuZGVyZXJcbiAgXVxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwidnVlMy1zdGFydGVyXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcInZ1ZTMtc3RhcnRlciB0ZW1wbGF0ZVwiLFxuICBcImF1dGhvclwiOiBcIkVpb2dcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRWlvZy92dWUzLXN0YXJ0ZXJcIixcbiAgXCJtYWluXCI6IFwiZGlzdC1lbGVjdHJvbi9tYWluL2luZGV4LmpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJkZXY6ZWxlY3Ryb25cIjogXCJ2aXRlIGRldiAtLW1vZGUgZWxlY3Ryb25cIixcbiAgICBcImRldjp0YXVyaVwiOiBcInRhdXJpIGRldlwiLFxuICAgIFwiZGV2OnZlcmNlbFwiOiBcInZlcmNlbCBkZXYgLS1saXN0ZW4gNTY3OFwiLFxuICAgIFwiYnVpbGRcIjogXCJ2dWUtdHNjIC0tbm9FbWl0ICYmIHZpdGUgYnVpbGRcIixcbiAgICBcImJ1aWxkOmVsZWN0cm9uXCI6IFwidnVlLXRzYyAtLW5vRW1pdCAmJiB2aXRlIGJ1aWxkIC0tbW9kZSBlbGVjdHJvbiAmJiBwbnBtIGJ1aWxkLWljb24gJiYgZWxlY3Ryb24tYnVpbGRlclwiLFxuICAgIFwiYnVpbGQ6dGF1cmlcIjogXCJ0YXVyaSBidWlsZFwiLFxuICAgIFwiYnVpbGQtaWNvblwiOiBcImVsZWN0cm9uLWljb24tYnVpbGRlciAtLWlucHV0PS4vcHVibGljL2ljb24ucG5nIC0tb3V0cHV0PWRpc3QtZWxlY3Ryb24gLS1mbGF0dGVuXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC5cIixcbiAgICBcImxpbnQ6Zml4XCI6IFwiZXNsaW50IC4gLS1maXhcIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3RcIixcbiAgICBcInVwZGF0ZTpkZXBzXCI6IFwidGF6ZSAtdyAmJiBwbnBtIGlcIixcbiAgICBcInR5cGU6Y2hlY2tcIjogXCJ2dWUtdHNjIC0tbm9FbWl0XCIsXG4gICAgXCJzdGFydFwiOiBcIm5vZGUgLi9hcHAuanNcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcImN6XCI6IFwiY3pnXCIsXG4gICAgXCJjb21taXRcIjogXCJnaXQgcHVsbCAmJiBnaXQgYWRkIC1BICYmIHBucG0gY3ogJiYgZ2l0IHB1c2hcIixcbiAgICBcInByZWluc3RhbGxcIjogXCJucHggb25seS1hbGxvdyBwbnBtXCIsXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcIm5weCBzaW1wbGUtZ2l0LWhvb2tzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJldHRlci1zY3JvbGwvY29yZVwiOiBcIl4yLjUuMVwiLFxuICAgIFwiQGZvcm1raXQvYXV0by1hbmltYXRlXCI6IFwiMC44LjFcIixcbiAgICBcIkBtb3Jldi92dWUtdHJhbnNpdGlvbnNcIjogXCJeMi4zLjZcIixcbiAgICBcIkBudXR1aS9udXR1aVwiOiBcIl40LjIuNFwiLFxuICAgIFwiQHRhdXJpLWFwcHMvYXBpXCI6IFwiXjEuNS4xXCIsXG4gICAgXCJAdW5vY3NzL3Jlc2V0XCI6IFwiXjAuNTguMFwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjcuMFwiLFxuICAgIFwiQHZ1ZXVzZS9oZWFkXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJAdnVldXNlL21vdGlvblwiOiBcIl4yLjAuMFwiLFxuICAgIFwiYWxvdmFcIjogXCJeMi4xNS4xXCIsXG4gICAgXCJheGlvc1wiOiBcIl4xLjYuMlwiLFxuICAgIFwiY29sb3JkXCI6IFwiXjIuOS4zXCIsXG4gICAgXCJlY2hhcnRzXCI6IFwiXjUuNC4zXCIsXG4gICAgXCJlbGVtZW50LXBsdXNcIjogXCJeMi40LjNcIixcbiAgICBcImpzbWVkaWF0YWdzXCI6IFwiXjMuOS43XCIsXG4gICAgXCJub3RpdnVlXCI6IFwiXjEuNC41XCIsXG4gICAgXCJucHJvZ3Jlc3NcIjogXCJeMC4yLjBcIixcbiAgICBcInBpbmlhXCI6IFwiXjIuMS43XCIsXG4gICAgXCJwaW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGVcIjogXCJeMy4yLjBcIixcbiAgICBcInByaW1ldnVlXCI6IFwiXjMuNDQuMFwiLFxuICAgIFwidmFudFwiOiBcIl40LjguMFwiLFxuICAgIFwidnVlXCI6IFwiXjMuMy4xMFwiLFxuICAgIFwidnVlLWNoZW1pc3RyeVwiOiBcIl4wLjIuMlwiLFxuICAgIFwidnVlLWhvb2tzLXBsdXNcIjogXCJeMS44LjZcIixcbiAgICBcInZ1ZS1pMThuXCI6IFwiXjkuOC4wXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuMi41XCIsXG4gICAgXCJ2dWUtc3RhcnBvcnRcIjogXCJeMC40LjBcIixcbiAgICBcInZ1ZXRpZnlcIjogXCJeMy40LjVcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZWlvZy9lc2xpbnQtY29uZmlnXCI6IFwiXjAuMC4yXCIsXG4gICAgXCJAZWlvZy90cy1jb25maWdcIjogXCJeMC4wLjNcIixcbiAgICBcIkBlbGVjdHJvbi10b29sa2l0L3ByZWxvYWRcIjogXCJeMi4wLjBcIixcbiAgICBcIkBlbGVjdHJvbi10b29sa2l0L3V0aWxzXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL3JpXCI6IFwiXjEuMS4xNVwiLFxuICAgIFwiQGljb25pZnktanNvbi90d2Vtb2ppXCI6IFwiXjEuMS4xNFwiLFxuICAgIFwiQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG5cIjogXCJeMS41LjBcIixcbiAgICBcIkBudXR1aS9hdXRvLWltcG9ydC1yZXNvbHZlclwiOiBcIl4xLjAuMFwiLFxuICAgIFwiQHBsdWdpbi13ZWItdXBkYXRlLW5vdGlmaWNhdGlvbi92aXRlXCI6IFwiXjEuNy4wXCIsXG4gICAgXCJAdGF1cmktYXBwcy9jbGlcIjogXCJeMS41LjdcIixcbiAgICBcIkB0eXBlcy9jcnlwdG8tanNcIjogXCJeNC4yLjFcIixcbiAgICBcIkB0eXBlcy9leHByZXNzXCI6IFwiXjQuMTcuMjFcIixcbiAgICBcIkB0eXBlcy9qc21lZGlhdGFnc1wiOiBcIl4zLjkuNlwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTAuM1wiLFxuICAgIFwiQHR5cGVzL25wcm9ncmVzc1wiOiBcIl4wLjIuM1wiLFxuICAgIFwiQHVuc2NhdHR5L3Vub2Nzcy1wcmVzZXQtZGFpc3lcIjogXCJeMS4wLjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl40LjUuMVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl4zLjEuMFwiLFxuICAgIFwiQHZpdGVzdC91aVwiOiBcIl4xLjAuMVwiLFxuICAgIFwiQHZ1ZS90ZXN0LXV0aWxzXCI6IFwiXjIuNC4zXCIsXG4gICAgXCJjb21taXRsaW50XCI6IFwiXjE4LjQuM1wiLFxuICAgIFwiY3J5cHRvLWpzXCI6IFwiXjQuMi4wXCIsXG4gICAgXCJjei1naXRcIjogXCJeMS44LjBcIixcbiAgICBcImN6Z1wiOiBcIl4xLjguMFwiLFxuICAgIFwiZGFpc3l1aVwiOiBcIl4zLjkuNFwiLFxuICAgIFwiZWxlY3Ryb25cIjogXCJeMjguMC4wXCIsXG4gICAgXCJlbGVjdHJvbi1idWlsZGVyXCI6IFwiXjI0LjkuMVwiLFxuICAgIFwiZWxlY3Ryb24taWNvbi1idWlsZGVyXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJlbGVjdHJvbi1zdG9yZVwiOiBcIl44LjEuMFwiLFxuICAgIFwiZWxlY3Ryb24tdXBkYXRlclwiOiBcIl42LjEuN1wiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTUuMFwiLFxuICAgIFwiZXhwcmVzc1wiOiBcIl40LjE4LjJcIixcbiAgICBcImZhc3QtZ2xvYlwiOiBcIl4zLjMuMlwiLFxuICAgIFwiZmlsZS10eXBlXCI6IFwiXjE4LjcuMFwiLFxuICAgIFwiaHR0cC1wcm94eS1taWRkbGV3YXJlXCI6IFwiXjIuMC42XCIsXG4gICAgXCJqc2RvbVwiOiBcIl4yMy4wLjFcIixcbiAgICBcImxlc3NcIjogXCJeNC4yLjBcIixcbiAgICBcImxpbnQtc3RhZ2VkXCI6IFwiXjE1LjIuMFwiLFxuICAgIFwibWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJtYXJrZG93bi1pdC1zaGlraVwiOiBcIl4wLjkuMFwiLFxuICAgIFwibmFpdmUtdWlcIjogXCJeMi4zNS4wXCIsXG4gICAgXCJwb3N0Y3NzLXByZXNldC1lbnZcIjogXCJeOS4zLjBcIixcbiAgICBcInNhc3NcIjogXCJeMS42OS41XCIsXG4gICAgXCJzaW1wbGUtZ2l0LWhvb2tzXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJ0YXplXCI6IFwiXjAuMTMuMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjMuMlwiLFxuICAgIFwidW5vY3NzXCI6IFwiXjAuNTguMFwiLFxuICAgIFwidW5vY3NzLXByZXNldC1kYWlzeVwiOiBcIl43LjAuMFwiLFxuICAgIFwidW5vY3NzLXByZXNldC1leHRyYVwiOiBcIl4wLjUuM1wiLFxuICAgIFwidW5vY3NzLXByZXNldC1zY3JvbGxiYXJcIjogXCJeMC4zLjBcIixcbiAgICBcInVucGx1Z2luLWF1dG8taW1wb3J0XCI6IFwiXjAuMTcuMlwiLFxuICAgIFwidW5wbHVnaW4taWNvbnNcIjogXCJeMC4xOC4xXCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI2LjBcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1jc3N2YXJzXCI6IFwiMi4wLjBcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1pbnNwZWN0b3JcIjogXCJeMS4wLjJcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1tYXJrZG93blwiOiBcIl4wLjI1LjJcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1yb3V0ZXJcIjogXCJeMC43LjBcIixcbiAgICBcInZlcmNlbFwiOiBcIl4zMi42LjFcIixcbiAgICBcInZmb250c1wiOiBcIl4wLjAuM1wiLFxuICAgIFwidml0ZVwiOiBcIl41LjAuNVwiLFxuICAgIFwidml0ZS1lbGVjdHJvbi1wbHVnaW5cIjogXCJeMC44LjNcIixcbiAgICBcInZpdGUtcGx1Z2luLWVsZWN0cm9uXCI6IFwiMC4xNS40XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1lbGVjdHJvbi1yZW5kZXJlclwiOiBcIl4wLjE0LjVcIixcbiAgICBcInZpdGUtcGx1Z2luLWluc3BlY3RcIjogXCJeMC44LjFcIixcbiAgICBcInZpdGUtcGx1Z2luLXBhZ2VzXCI6IFwiXjAuMzIuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tcHdhXCI6IFwiXjAuMTcuM1wiLFxuICAgIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi10YXVyaVwiOiBcIl4zLjMuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tdmVyc2lvbi1tYXJrXCI6IFwiXjAuMC4xMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tdmlydHVhbFwiOiBcIl4wLjIuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tdnVlLWNvbXBvbmVudC1wcmV2aWV3XCI6IFwiXjEuMS42XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjogXCIxLjAuMC1yYy43XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtbGF5b3V0c1wiOiBcIl4wLjkuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tdnVldGlmeVwiOiBcIl4xLjAuMlwiLFxuICAgIFwidml0ZS1wbHVnaW4td2ViZm9udC1kbFwiOiBcIl4zLjkuMVwiLFxuICAgIFwidml0ZXN0XCI6IFwiXjEuMC4xXCIsXG4gICAgXCJ2dWUtcm91dGVyLWJldHRlci1zY3JvbGxlclwiOiBcIl4wLjAuMFwiLFxuICAgIFwidnVlLXRzY1wiOiBcIl4xLjguMjVcIixcbiAgICBcIndyaXRlLWpzb24tZmlsZVwiOiBcIl41LjAuMFwiXG4gIH0sXG4gIFwic2ltcGxlLWdpdC1ob29rc1wiOiB7XG4gICAgXCJwcmUtY29tbWl0XCI6IFwicG5wbSBsaW50LXN0YWdlZCAmJiBwbnBtIHR5cGU6Y2hlY2tcIlxuICB9LFxuICBcImxpbnQtc3RhZ2VkXCI6IHtcbiAgICBcIioue2pzLGpzeCx0cyx0c3h9XCI6IFtcbiAgICAgIFwicG5wbSBsaW50OmZpeFwiXG4gICAgXVxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcXFxcY29uZmlnXFxcXHZpdGUtcGx1Z2luLWF1dG8taW1wb3J0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QQy9EZXNrdG9wL1Byb2plY3RzL2VtdXNpYy9jb25maWcvdml0ZS1wbHVnaW4tYXV0by1pbXBvcnQudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQge1xuICBFbGVtZW50UGx1c1Jlc29sdmVyLFxufSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuXG5leHBvcnQgZnVuY3Rpb24gVml0ZVBsdWdpbkF1dG9JbXBvcnQoKTogUGx1Z2luT3B0aW9uW10ge1xuICByZXR1cm4gW1xuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgLyogb3B0aW9ucyAqL1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxuICAgICAgICAvXFwudnVlJC8sXG4gICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICBdLFxuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgICAncGluaWEnLFxuICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgIHtcbiAgICAgICAgICAnQHRhdXJpLWFwcHMvYXBpL2FwcCc6IFsnZ2V0TmFtZScsICdnZXRWZXJzaW9uJywgJ2dldFRhdXJpVmVyc2lvbiddLFxuICAgICAgICAgICdAdGF1cmktYXBwcy9hcGkvc2hlbGwnOiBbJ0NvbW1hbmQnXSxcbiAgICAgICAgICAnQHRhdXJpLWFwcHMvYXBpL29zJzogWydwbGF0Zm9ybSddLFxuICAgICAgICAgICdAdGF1cmktYXBwcy9hcGkvbm90aWZpY2F0aW9uJzogWydzZW5kTm90aWZpY2F0aW9uJywgJ3JlcXVlc3RQZXJtaXNzaW9uJywgJ2lzUGVybWlzc2lvbkdyYW50ZWQnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkaXJzOiBbJ3NyYy9ob29rcycsICdzcmMvY29tcG9zYWJsZXMnLCAnc3JjL3N0b3JlcycsICdzcmMvdXRpbHMnXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gIF1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXGVtdXNpY1xcXFxjb25maWdcXFxcdml0ZS1wbHVnaW4tY29tcG9uZW50cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMvRGVza3RvcC9Qcm9qZWN0cy9lbXVzaWMvY29uZmlnL3ZpdGUtcGx1Z2luLWNvbXBvbmVudHMudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHtcbiAgRWxlbWVudFBsdXNSZXNvbHZlcixcbiAgTmFpdmVVaVJlc29sdmVyLFxuICBQcmltZVZ1ZVJlc29sdmVyLFxuICBWYW50UmVzb2x2ZXIsXG4gIFZ1ZVVzZUNvbXBvbmVudHNSZXNvbHZlcixcbiAgVnVlVXNlRGlyZWN0aXZlUmVzb2x2ZXIsXG4gIFZ1ZXRpZnkzUmVzb2x2ZXIsXG59IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBOdXRVSVJlc29sdmVyIGZyb20gJ0BudXR1aS9hdXRvLWltcG9ydC1yZXNvbHZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIFZpdGVQbHVnaW5Db21wb25lbnRzKCk6IFBsdWdpbk9wdGlvbltdIHtcbiAgcmV0dXJuIFtcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnLCAnc3JjL2xheW91dHMnXSxcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICBOYWl2ZVVpUmVzb2x2ZXIoKSxcbiAgICAgICAgVmFudFJlc29sdmVyKCksXG4gICAgICAgIFZ1ZXRpZnkzUmVzb2x2ZXIoKSxcbiAgICAgICAgVnVlVXNlQ29tcG9uZW50c1Jlc29sdmVyKCksXG4gICAgICAgIFZ1ZVVzZURpcmVjdGl2ZVJlc29sdmVyKCksXG4gICAgICAgIFByaW1lVnVlUmVzb2x2ZXIoeyBwcmVmaXg6ICdQJyB9KSxcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgICBOdXRVSVJlc29sdmVyKCksXG4gICAgICBdLFxuICAgIH0pLCAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgXVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXGVtdXNpY1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXGNvbmZpZ1xcXFx2aXRlLXBsdWdpbi1tYXJrZG93bi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMvRGVza3RvcC9Qcm9qZWN0cy9lbXVzaWMvY29uZmlnL3ZpdGUtcGx1Z2luLW1hcmtkb3duLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndW5wbHVnaW4tdnVlLW1hcmtkb3duL3ZpdGUnXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFNoaWtpIGZyb20gJ21hcmtkb3duLWl0LXNoaWtpJ1xuXG5leHBvcnQgZnVuY3Rpb24gVml0ZVBsdWdpbk1hcmtkb3duKCk6IFBsdWdpbk9wdGlvbltdIHtcbiAgcmV0dXJuIFtcbiAgICBNYXJrZG93bih7XG4gICAgICB3cmFwcGVyQ2xhc3NlczogJ3Byb3NlIHByb3NlLXNtIG0tYXV0byB0ZXh0LWxlZnQnLFxuICAgICAgaGVhZEVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXJrZG93bkl0U2V0dXAobWQpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9wcmlzbWpzLmNvbS9cbiAgICAgICAgbWQudXNlKFNoaWtpLCB7XG4gICAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIGxpZ2h0OiAndml0ZXNzZS1saWdodCcsXG4gICAgICAgICAgICBkYXJrOiAndml0ZXNzZS1kYXJrJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBtZC51c2UoTGlua0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBtYXRjaGVyOiAobGluazogc3RyaW5nKSA9PiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QobGluayksXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgICByZWw6ICdub29wZW5lcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSksIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi12dWUtbWFya2Rvd25cblxuICBdXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcZW11c2ljXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcXFxcY29uZmlnXFxcXHZpdGUtcGx1Z2luLXB3YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMvRGVza3RvcC9Qcm9qZWN0cy9lbXVzaWMvY29uZmlnL3ZpdGUtcGx1Z2luLXB3YS50c1wiO2ltcG9ydCB0eXBlIHsgQ29uZmlnRW52LCBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5cbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5cbmV4cG9ydCBmdW5jdGlvbiBWaXRlUGx1Z2luUFdBKHsgbW9kZSB9OiBDb25maWdFbnYpOiBQbHVnaW5PcHRpb25bXSB7XG4gIGNvbnN0IHsgVklURV9BUFBfTkFNRSwgVklURV9BUFBfREVTQ1JJUFRJT04gfSA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpXG5cbiAgcmV0dXJuIFtcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdzYWZhcmktcGlubmVkLXRhYi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6IFZJVEVfQVBQX05BTUUsXG4gICAgICAgIHNob3J0X25hbWU6IFZJVEVfQVBQX05BTUUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBWSVRFX0FQUF9ERVNDUklQVElPTixcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlZDogcHJvY2Vzcy5lbnYuU1dfREVWID09PSAndHJ1ZScsXG4gICAgICAgIC8qIHdoZW4gdXNpbmcgZ2VuZXJhdGVTVyB0aGUgUFdBIHBsdWdpbiB3aWxsIHN3aXRjaCB0byBjbGFzc2ljICovXG4gICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnaW5kZXguaHRtbCcsXG4gICAgICB9LFxuICAgIH0pLCAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gIF1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUENcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxlbXVzaWNcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXGVtdXNpY1xcXFxjb25maWdcXFxcdml0ZS1wbHVnaW4taTE4bi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMvRGVza3RvcC9Qcm9qZWN0cy9lbXVzaWMvY29uZmlnL3ZpdGUtcGx1Z2luLWkxOG4udHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuXG5pbXBvcnQgVnVlSTE4blBsdWdpbiBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuXG5leHBvcnQgZnVuY3Rpb24gVml0ZVBsdWdpbkkxOG4oKTogUGx1Z2luT3B0aW9uW10ge1xuICByZXR1cm4gW1xuICAgIFZ1ZUkxOG5QbHVnaW4oe1xuICAgICAgcnVudGltZU9ubHk6IHRydWUsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgICBmdWxsSW5zdGFsbDogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbG9jYWxlcy8qKicpLFxuICAgIH0pLCAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG5cbiAgXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLFdBQUFBLGdCQUFlO0FBQy9ULFNBQVMsY0FBYyxXQUFBQyxnQkFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUVuQixPQUFPLFdBQVc7QUFDbEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxhQUFhO0FBQ3BCLE9BQU8scUJBQXFCO0FBQzVCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsNkJBQTZCO0FBQ3RDLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sV0FBVztBQUNsQixPQUFPLHNCQUFzQjs7O0FDZDdCLE9BQU8sYUFBYTs7O0FDRHlSLFNBQVMsY0FBYzs7O0FDRXJULFNBQVIsUUFDTCxLQUNBLEtBQ0E7QUFDQSxRQUFNLGFBQWEsSUFBSSxRQUFRLGtCQUFrQjtBQUNqRCxRQUFNLE9BQU8sYUFBYSxtQkFBbUIsVUFBVSxJQUFJO0FBQzNELFFBQU0sV0FBVyxJQUFJLFFBQVEsaUJBQWlCO0FBQzlDLFFBQU0sS0FBSyxXQUFXLFNBQVMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJO0FBQy9DLE1BQUksS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQ3ZCOzs7QUNUZSxTQUFSQyxTQUNMLEtBQ0EsS0FDQTtBQUNBLFFBQU0sRUFBRSxLQUFLLElBQUk7QUFDakIsTUFBSSxLQUFLLElBQUk7QUFDZjs7O0FGSkEsSUFBTSxTQUFTLE9BQU87QUFDdEIsT0FBTyxJQUFJLFNBQVMsT0FBSTtBQUN4QixPQUFPLEtBQUssVUFBVUMsUUFBSztBQUMzQixJQUFPLGlCQUFROzs7QURIUixTQUFTLGVBQWUsU0FBdUM7QUFDcEUsUUFBTSxNQUFNLFFBQVE7QUFDcEIsTUFBSSxJQUFJLFFBQVEsS0FBSyxDQUFDO0FBQ3RCLE1BQUksSUFBSSxjQUFNO0FBQ2QsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsaUJBQWlCLE9BQU8sV0FBVztBQUVqQyxhQUFPLFlBQVksSUFBSSxTQUFTLFVBQVUsUUFBUSxHQUFHO0FBQUEsSUFDdkQ7QUFBQSxFQUNGO0FBQ0Y7OztBSWhCZ1YsU0FBUyxjQUFjO0FBSXZXLE9BQU8sY0FBYztBQUNyQixPQUFPLGNBQWM7QUFDckIsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxxQkFBcUI7OztBQ1A5QjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsUUFBVTtBQUFBLEVBQ1YsU0FBVztBQUFBLEVBQ1gsVUFBWTtBQUFBLEVBQ1osTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsSUFDaEIsYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBLElBQ2QsT0FBUztBQUFBLElBQ1Qsa0JBQWtCO0FBQUEsSUFDbEIsZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLElBQ2QsT0FBUztBQUFBLElBQ1QsU0FBVztBQUFBLElBQ1gsSUFBTTtBQUFBLElBQ04sUUFBVTtBQUFBLElBQ1YsWUFBYztBQUFBLElBQ2QsYUFBZTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2QsdUJBQXVCO0FBQUEsSUFDdkIseUJBQXlCO0FBQUEsSUFDekIsMEJBQTBCO0FBQUEsSUFDMUIsZ0JBQWdCO0FBQUEsSUFDaEIsbUJBQW1CO0FBQUEsSUFDbkIsaUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsSUFDaEIsa0JBQWtCO0FBQUEsSUFDbEIsT0FBUztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsUUFBVTtBQUFBLElBQ1YsU0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsSUFDaEIsYUFBZTtBQUFBLElBQ2YsU0FBVztBQUFBLElBQ1gsV0FBYTtBQUFBLElBQ2IsT0FBUztBQUFBLElBQ1QsK0JBQStCO0FBQUEsSUFDL0IsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsS0FBTztBQUFBLElBQ1AsaUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsSUFDbEIsWUFBWTtBQUFBLElBQ1osY0FBYztBQUFBLElBQ2QsZ0JBQWdCO0FBQUEsSUFDaEIsU0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCLHVCQUF1QjtBQUFBLElBQ3ZCLG1CQUFtQjtBQUFBLElBQ25CLDZCQUE2QjtBQUFBLElBQzdCLDJCQUEyQjtBQUFBLElBQzNCLG9CQUFvQjtBQUFBLElBQ3BCLHlCQUF5QjtBQUFBLElBQ3pCLDhCQUE4QjtBQUFBLElBQzlCLCtCQUErQjtBQUFBLElBQy9CLHdDQUF3QztBQUFBLElBQ3hDLG1CQUFtQjtBQUFBLElBQ25CLG9CQUFvQjtBQUFBLElBQ3BCLGtCQUFrQjtBQUFBLElBQ2xCLHNCQUFzQjtBQUFBLElBQ3RCLGVBQWU7QUFBQSxJQUNmLG9CQUFvQjtBQUFBLElBQ3BCLGlDQUFpQztBQUFBLElBQ2pDLHNCQUFzQjtBQUFBLElBQ3RCLDBCQUEwQjtBQUFBLElBQzFCLGNBQWM7QUFBQSxJQUNkLG1CQUFtQjtBQUFBLElBQ25CLFlBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxJQUNWLEtBQU87QUFBQSxJQUNQLFNBQVc7QUFBQSxJQUNYLFVBQVk7QUFBQSxJQUNaLG9CQUFvQjtBQUFBLElBQ3BCLHlCQUF5QjtBQUFBLElBQ3pCLGtCQUFrQjtBQUFBLElBQ2xCLG9CQUFvQjtBQUFBLElBQ3BCLFFBQVU7QUFBQSxJQUNWLFNBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLHlCQUF5QjtBQUFBLElBQ3pCLE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxJQUNmLCtCQUErQjtBQUFBLElBQy9CLHFCQUFxQjtBQUFBLElBQ3JCLFlBQVk7QUFBQSxJQUNaLHNCQUFzQjtBQUFBLElBQ3RCLE1BQVE7QUFBQSxJQUNSLG9CQUFvQjtBQUFBLElBQ3BCLE1BQVE7QUFBQSxJQUNSLFlBQWM7QUFBQSxJQUNkLFFBQVU7QUFBQSxJQUNWLHVCQUF1QjtBQUFBLElBQ3ZCLHVCQUF1QjtBQUFBLElBQ3ZCLDJCQUEyQjtBQUFBLElBQzNCLHdCQUF3QjtBQUFBLElBQ3hCLGtCQUFrQjtBQUFBLElBQ2xCLDJCQUEyQjtBQUFBLElBQzNCLHdCQUF3QjtBQUFBLElBQ3hCLDBCQUEwQjtBQUFBLElBQzFCLHlCQUF5QjtBQUFBLElBQ3pCLHVCQUF1QjtBQUFBLElBQ3ZCLFFBQVU7QUFBQSxJQUNWLFFBQVU7QUFBQSxJQUNWLE1BQVE7QUFBQSxJQUNSLHdCQUF3QjtBQUFBLElBQ3hCLHdCQUF3QjtBQUFBLElBQ3hCLGlDQUFpQztBQUFBLElBQ2pDLHVCQUF1QjtBQUFBLElBQ3ZCLHFCQUFxQjtBQUFBLElBQ3JCLG1CQUFtQjtBQUFBLElBQ25CLHlCQUF5QjtBQUFBLElBQ3pCLHFCQUFxQjtBQUFBLElBQ3JCLDRCQUE0QjtBQUFBLElBQzVCLHVCQUF1QjtBQUFBLElBQ3ZCLHFDQUFxQztBQUFBLElBQ3JDLDRCQUE0QjtBQUFBLElBQzVCLDJCQUEyQjtBQUFBLElBQzNCLHVCQUF1QjtBQUFBLElBQ3ZCLDBCQUEwQjtBQUFBLElBQzFCLFFBQVU7QUFBQSxJQUNWLDhCQUE4QjtBQUFBLElBQzlCLFdBQVc7QUFBQSxJQUNYLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxvQkFBb0I7QUFBQSxJQUNsQixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLHFCQUFxQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FENUlPLFNBQVMsbUJBQW1CLEVBQUUsUUFBUSxHQUE4QjtBQUN6RSxRQUFNLFVBQVUsWUFBWTtBQUM1QixRQUFNLFVBQVUsWUFBWTtBQUM1QixRQUFNLFlBQVksV0FBVyxDQUFDLENBQUMsUUFBUSxJQUFJO0FBQzNDLFNBQU8saUJBQWlCLEVBQUUsV0FBVyxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ3hELGdCQUFjLDhCQUE4QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hFLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQO0FBQUE7QUFBQSxRQUVFLE9BQU87QUFBQSxRQUNQLFFBQVEsRUFBRSxRQUFRLEdBQUc7QUFDbkIsY0FBSSxRQUFRLElBQUk7QUFFZCxvQkFBUTtBQUFBO0FBQUEsY0FBeUM7QUFBQSxZQUF3QjtBQUFBO0FBR3pFLG9CQUFRO0FBQUEsUUFDWjtBQUFBLFFBQ0EsTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFlBQ0w7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxZQUNSLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBS2IsVUFBVSxPQUFPLEtBQUssa0JBQWtCLGtCQUFNLGdCQUFJLGVBQWUsQ0FBQyxDQUFDO0FBQUEsWUFDckU7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUE7QUFBQTtBQUFBLFlBR1AsV0FBVyxVQUFVO0FBQUEsVUFDdkI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLFFBQVEsRUFBRSxPQUFPLEdBQUc7QUFHbEIsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixPQUFPO0FBQUEsWUFDTCxXQUFXLFlBQVksV0FBVztBQUFBO0FBQUEsWUFDbEMsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFlBQ1IsZUFBZTtBQUFBLGNBQ2IsVUFBVSxPQUFPLEtBQUssa0JBQWtCLGtCQUFNLGdCQUFJLGVBQWUsQ0FBQyxDQUFDO0FBQUEsWUFDckU7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsWUFDUCxXQUFXLFVBQVU7QUFBQSxVQUN2QjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQTtBQUFBLElBRUQsU0FBUztBQUFBO0FBQUEsRUFDWDtBQUNGOzs7QUV6RUE7QUFBQSxFQUNFO0FBQUEsT0FDSztBQUNQLE9BQU8sZ0JBQWdCO0FBRWhCLFNBQVMsdUJBQXVDO0FBQ3JELFNBQU87QUFBQSxJQUNMLFdBQVc7QUFBQTtBQUFBLE1BRVQsU0FBUztBQUFBLFFBQ1A7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0UsdUJBQXVCLENBQUMsV0FBVyxjQUFjLGlCQUFpQjtBQUFBLFVBQ2xFLHlCQUF5QixDQUFDLFNBQVM7QUFBQSxVQUNuQyxzQkFBc0IsQ0FBQyxVQUFVO0FBQUEsVUFDakMsZ0NBQWdDLENBQUMsb0JBQW9CLHFCQUFxQixxQkFBcUI7QUFBQSxRQUNqRztBQUFBLE1BQ0Y7QUFBQSxNQUNBLE1BQU0sQ0FBQyxhQUFhLG1CQUFtQixjQUFjLFdBQVc7QUFBQSxNQUNoRSxhQUFhO0FBQUEsTUFDYixXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUE7QUFBQSxFQUNIO0FBQ0Y7OztBQ2pDQSxPQUFPLGdCQUFnQjtBQUN2QjtBQUFBLEVBQ0UsdUJBQUFDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsT0FDSztBQUNQLE9BQU8sbUJBQW1CO0FBRW5CLFNBQVMsdUJBQXVDO0FBQ3JELFNBQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxNQUNULE1BQU0sQ0FBQyxrQkFBa0IsYUFBYTtBQUFBLE1BQ3RDLFlBQVksQ0FBQyxPQUFPLElBQUk7QUFBQSxNQUN4QixNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUN6QyxXQUFXO0FBQUEsUUFDVCxnQkFBZ0I7QUFBQSxRQUNoQixhQUFhO0FBQUEsUUFDYixpQkFBaUI7QUFBQSxRQUNqQix5QkFBeUI7QUFBQSxRQUN6Qix3QkFBd0I7QUFBQSxRQUN4QixpQkFBaUIsRUFBRSxRQUFRLElBQUksQ0FBQztBQUFBLFFBQ2hDQyxxQkFBb0I7QUFBQSxRQUNwQixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLEVBQ0g7QUFDRjs7O0FDOUJBLE9BQU8sY0FBYztBQUNyQixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLFdBQVc7QUFFWCxTQUFTLHFCQUFxQztBQUNuRCxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixhQUFhO0FBQUEsTUFDYixnQkFBZ0IsSUFBSTtBQUVsQixXQUFHLElBQUksT0FBTztBQUFBLFVBQ1osT0FBTztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGLENBQUM7QUFDRCxXQUFHLElBQUksZ0JBQWdCO0FBQUEsVUFDckIsU0FBUyxDQUFDLFNBQWlCLGVBQWUsS0FBSyxJQUFJO0FBQUEsVUFDbkQsT0FBTztBQUFBLFlBQ0wsUUFBUTtBQUFBLFlBQ1IsS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxFQUVIO0FBQ0Y7OztBQzdCQSxTQUFTLGVBQWU7QUFFeEIsU0FBUyxlQUFlO0FBRWpCLFNBQVMsY0FBYyxFQUFFLEtBQUssR0FBOEI7QUFDakUsUUFBTSxFQUFFLGVBQWUscUJBQXFCLElBQUksUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFFL0UsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsdUJBQXVCO0FBQUEsTUFDdEQsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixTQUFTLFFBQVEsSUFBSSxXQUFXO0FBQUE7QUFBQSxRQUVoQyxNQUFNO0FBQUEsUUFDTixrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsRUFDSDtBQUNGOzs7QUM1Q3dVLFNBQVMsZUFBZTtBQUdoVyxPQUFPLG1CQUFtQjtBQUgxQixJQUFNLG1DQUFtQztBQUtsQyxTQUFTLGlCQUFpQztBQUMvQyxTQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixhQUFhO0FBQUEsTUFDYixTQUFTLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsSUFDaEQsQ0FBQztBQUFBO0FBQUEsRUFFSDtBQUNGOzs7QVhmQSxJQUFNQyxvQ0FBbUM7QUF1QnpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFDakQsUUFBTSxFQUFFLGVBQWUsc0JBQXNCLGtCQUFrQixJQUFJQyxTQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUNsRyxRQUFNLGFBQWEsU0FBUztBQUM1QixRQUFNLFFBQVEsQ0FBQyxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsSUFBSTtBQUUxRCxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1aLGVBQWUsRUFBRSxRQUFRLHFCQUFxQixDQUFDO0FBQUEsTUFFL0MsTUFBTTtBQUFBLFFBQ0osWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLE1BQzFCLENBQUM7QUFBQTtBQUFBLE1BRUQsUUFBUTtBQUFBO0FBQUEsTUFFUixxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUNDLFNBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxRQUNyRCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUE7QUFBQSxNQUVELGdCQUFnQjtBQUFBLFFBQ2QsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBO0FBQUEsTUFFRCxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUlwQixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUE7QUFBQSxNQUVELElBQUk7QUFBQSxRQUNGLFFBQVE7QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLGtCQUFrQjtBQUFBLFFBQ3BCO0FBQUEsUUFDQSxTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsTUFDN0IsQ0FBQztBQUFBO0FBQUEsTUFFRCxPQUFPO0FBQUE7QUFBQSxNQUVQLGVBQWU7QUFBQSxRQUNiLFNBQVMsQ0FBQyxNQUFNO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsWUFBWTtBQUFBLFFBQzdCLFFBQVE7QUFBQSxNQUNWLENBQUM7QUFBQTtBQUFBLE1BRUQsZ0JBQWdCO0FBQUE7QUFBQSxNQUVoQixNQUFNLEVBQUUsVUFBVSxPQUFPLENBQUM7QUFBQTtBQUFBLE1BQzFCLE9BQU87QUFBQTtBQUFBLE1BQ1AsR0FBRyxxQkFBcUI7QUFBQSxNQUN4QixHQUFHLHFCQUFxQjtBQUFBLE1BQ3hCLEdBQUcsZUFBZTtBQUFBLE1BQ2xCLEdBQUcsbUJBQW1CO0FBQUEsTUFDdEIsR0FBRyxjQUFjLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxNQUNsQyxHQUFHLGFBQWEsbUJBQW1CLEVBQUUsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQUEsSUFDM0Q7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxNQUNOLE1BQU0sT0FBTyxhQUFhO0FBQUEsTUFDMUIsTUFBTTtBQUFBO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBLE1BQ04sWUFBWTtBQUFBO0FBQUEsTUFDWixPQUFPO0FBQUEsUUFDTCxDQUFDLG9CQUFvQixHQUFHO0FBQUEsVUFDdEIsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsU0FBUyxVQUFRLEtBQUssUUFBUSwrQkFBK0IsRUFBRTtBQUFBLFFBQ2pFO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVcsQ0FBQyxTQUFTLFFBQVE7QUFBQSxJQUM3QixPQUFPO0FBQUEsTUFDTCxRQUFRLFFBQVEsUUFBUTtBQUFBLE1BQ3hCLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQTtBQUFBLE1BRVosdUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVF2QixXQUFXO0FBQUE7QUFBQSxNQUVYLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBO0FBQUEsUUFFbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBS0EsU0FBUUMsbUNBQVcsT0FBTztBQUFBO0FBQUEsUUFDL0IsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsUUFDUCxrQkFBa0I7QUFBQSxRQUNsQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1AsaUJBQWlCO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJyZXNvbHZlIiwgImxvYWRFbnYiLCAiaGFuZGxlciIsICJoYW5kbGVyIiwgIkVsZW1lbnRQbHVzUmVzb2x2ZXIiLCAiRWxlbWVudFBsdXNSZXNvbHZlciIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJsb2FkRW52IiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
