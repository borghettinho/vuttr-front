const selectors = {
  getTools: state => state.getToolsReducer.tools,
  getLoadingState: state => state.getToolsReducer.loading
};

export { selectors };
