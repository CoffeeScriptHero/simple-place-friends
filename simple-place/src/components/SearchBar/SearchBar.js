import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import SearchBarUsers from "../SearchBarUsers/SearchBarUsers";
import {
  Wrapper,
  SearchInput,
  PlaceholderWrapper,
  PlaceholderText,
} from "./SearchBar-styles";

const SearchBar = () => {
  const [inputSelected, setInputSelected] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [usersLoaded, setUsersLoaded] = useState(false);
  const searchInput = useRef(null);

  const clearSearchInput = () => {
    setInputValue("");
    setInputSelected(false);
    searchInput.current.value = "";
  };

  const searchBarHandler = (e) => {
    if (e.target.nodeName === "svg" || e.target.nodeName === "path") {
      clearSearchInput();
    } else if (searchInput.current && e.target !== searchInput.current) {
      searchInputBlur();
    }
  };

  useEffect(() => {
    document.addEventListener("click", searchBarHandler);
    return () => {
      document.removeEventListener("click", searchBarHandler);
    };
  });

  const searchInputBlur = () => {
    setInputValue(searchInput.current.value);
    searchInput.current.value = "";
    setInputSelected(false);
  };

  const selectInputHandler = () => {
    if (!inputSelected) searchInput.current.value = inputValue;
    setInputSelected(true);
  };

  const changeInputHandler = () => {
    setInputValue(searchInput.current.value);
    setUsersLoaded(false);
  };

  return (
    <Wrapper>
      <SearchInput
        ref={searchInput}
        placeholder={inputSelected ? "Search" : ""}
        type="text"
        onSelect={selectInputHandler}
        onChange={changeInputHandler}
      ></SearchInput>
      {inputSelected && (
        <Icon
          pointer
          type="circlecross"
          width="18px"
          hegiht="18px"
          position="absolute"
          top="5.5px"
          right="7px"
          fill={"#c7c7c7"}
          onClick={clearSearchInput}
        />
      )}
      {!inputSelected && (
        <PlaceholderWrapper>
          <Icon
            display="inline-block"
            type="magnifier"
            zIndex="0"
            width="16px"
            height="16px"
          />
          <PlaceholderText>
            {inputValue && inputValue.length > 12
              ? inputValue.slice(0, 12) + "..."
              : inputValue}
            {!inputValue && "Search"}
          </PlaceholderText>
        </PlaceholderWrapper>
      )}
      {inputSelected && (
        <SearchBarUsers
          usernameChunk={inputValue}
          usersLoaded={usersLoaded}
          setUsersLoaded={setUsersLoaded}
        />
      )}
    </Wrapper>
  );
};

export default SearchBar;
