export const imports = {
  'files/CodeStyle.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "files-code-style" */ 'files/CodeStyle.md'
    ),
  'files/isValid.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "files-is-valid" */ 'files/isValid.md'
    ),
  'files/examples/CreateDocs.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "files-examples-create-docs" */ 'files/examples/CreateDocs.md'
    ),
  'files/examples/PartialCurry.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "files-examples-partial-curry" */ 'files/examples/PartialCurry.md'
    ),
  'files/examples/PromiseAllChunks.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "files-examples-promise-all-chunks" */ 'files/examples/PromiseAllChunks.md'
    ),
  'files/examples/RandomImageName.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "files-examples-random-image-name" */ 'files/examples/RandomImageName.md'
    ),
}
