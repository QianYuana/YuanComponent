import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    // 设置横向导航栏  
    atomDirs: [
      { type: 'components', dir: 'src/Components' }, // 组件导航
      { type: 'Hooks', dir: 'src/Hooks' }, // hooks导航
      { type: 'algorithm', dir: 'src/Algorithm' }, // 算法导航
    ],
  },
  themeConfig: {
    name: 'QianYuanx',
    prefersColor: { switch: true },
    socialLinks: {
      github: 'https://github.com/QianYuana/YuanComponent.git',
    },
    // editLink:true,
    editLink: 'https://github.com/QianYuana/YuanComponent/tree/master/QianYuanX/{filename}'
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  logo: '/images/logo1.svg',
  styles: [`.dumi-default-logo {font-family: Alibaba-PuHuiTi, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;}
  `, `.dumi-default-header-right {
    justify-content: end !important;
  }`, `
  .dumi-default-header-right-aside {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }`, `.dumi-default-header-content {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 24px;
    max-width: 1620px !important;
    height: 76px;
    box-sizing: border-box;
}`, `.dumi-default-doc-layout > main {
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1620px !important;
  box-sizing: border-box;
}`, `.dumi-default-sidebar {
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
}`,
    `.dumi-default-features[data-cols='2'] > .dumi-default-features-item {
  width: 25% !important;
  text-align: center;
}`,
    `.dumi-default-features[data-cols='2'] > .dumi-default-features-item:nth-child(odd) {
  margin-inline-end: 0 !important; 
}`, `/less/index.less`],
});
