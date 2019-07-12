const selectors = {
  getTools: state => state.getToolsReducer.fetchedTools,
  getLoadingState: state => state.getToolsReducer.loading,
  getByTagFilter: state => state.getToolsReducer.byTag
};

export { selectors };
