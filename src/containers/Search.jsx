import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectors } from "../selectors/getTools";
import { actions } from "../actions/getTools";

import { useDebouncedCallback } from "use-debounce";

import { TextInput } from "../components/Input";

const Search = () => {
  const dispatch = useDispatch();
  const byTag = useSelector(selectors.getByTagFilter);

  const handleToggle = () => dispatch(actions.toggleByTag());
  const handleClick = () => dispatch(actions.getTools());

  const [debouncedSearch] = useDebouncedCallback(value => {
    byTag
      ? dispatch(actions.searchByTag(value))
      : dispatch(actions.searchTools(value));
  }, 1000);

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
      <button onClick={handleClick}>+ Add</button>
    </div>
  );
};

export default Search;
