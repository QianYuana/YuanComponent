import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'QianYuan X',
    prefersColor: { switch: true },
    socialLinks: {
      github: 'https://github.com/QianYuana/YuanComponent.git',
    },
  },
  logo:'/images/logo1.svg',
  styles: [`.dumi-default-logo {font-family: Alibaba-PuHuiTi, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;}
  `,`.dumi-default-header-right {
    justify-content: end !important;
  }`,`
  .dumi-default-header-right-aside {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }`,`.dumi-default-header-content {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 24px;
    max-width: 1620px !important;
    height: 76px;
    box-sizing: border-box;
}`,`.dumi-default-doc-layout > main {
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1620px !important;
  box-sizing: border-box;
}`,`.dumi-default-sidebar {
  position: sticky;
  top: 76px;
  width: auto !important;
  max-height: calc(100vh - 76px);
  padding-top: 20px;
  padding-bottom: 24px;
  padding-inline-start: 8px;
  padding-inline-end: 32px;
  box-sizing: border-box;
  overflow: auto;
}`,`/less/index.less`],
});
