const selectors = {
  getTools: state => state.getToolsReducer.tools,
  getLoadingState: state => state.getToolsReducer.loading,
  getByTagFilter: state => state.getToolsReducer.byTag
};

export { selectors };
