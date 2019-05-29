export const imports = {
  'doc_files/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-files-index" */ 'doc_files/index.mdx'
    ),
}
