import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectors } from "../selectors/getTools";
import { actions } from "../actions/getTools";

import { useDebouncedCallback } from "use-debounce";

import { TextInput } from "../components/Input";

const Search = () => {
  const dispatch = useDispatch();
  const byTag = useSelector(selectors.getByTagFilter);
  const loading = useSelector(selectors.getLoadingState);

  const handleToggle = () => dispatch(actions.toggleByTag());

  const [debouncedSearch] = useDebouncedCallback(value => {
    byTag
      ? dispatch(actions.searchByTag(value))
      : dispatch(actions.searchTools(value));
  }, 500);

  return (
    <div>
      <TextInput
        type="text"
        placeholder="Search"
        onChange={e => debouncedSearch(e.target.value)}
      />
      <input
        type="checkbox"
        name="toggle-tag"
        id="toggle-tag"
        onChange={handleToggle}
      />
      <label htmlFor="toggle-tag">Tags only</label>
      <button>+ Add</button>
      {loading ? <p>Loading...</p> : null}
    </div>
  );
};

export default Search;
