import {
  FilterForm,
  FilterSection,
  Select,
  SelectWrapper,
  ToggleFilterButton,
} from './Filters.styled';

const { default: useWindowDimensions } = require('hooks/useWindowDimensions');
const { useState } = require('react');

const Filter = () => {
  const { width } = useWindowDimensions();
  const [isFilterOpened, setIsFilterOpened] = useState(true);
  const isMobileScreen = width < 768;
  const showFilter = (isMobileScreen && isFilterOpened) || !isMobileScreen;
  const toggleFilter = () => {
    setIsFilterOpened(prevState => !prevState);
  };

  return (
    <FilterSection>
      {isMobileScreen && (
        <ToggleFilterButton type="button" onClick={toggleFilter}>
          {isFilterOpened ? 'Hide filter' : 'Show filter'}
        </ToggleFilterButton>
      )}
      {showFilter && (
        <FilterForm autoComplete="off">
          <SelectWrapper>
            <label htmlFor="price">Price</label>
            <Select name="Price" id="price">
              <option value="0-100">$0-$100</option>
              <option value="100-500">$100-$500</option>
              <option value=">100">&gt; $500</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <label htmlFor="color">Color</label>
            <div>
              <input type="radio" name="color" value="#FFFFFF" />
              <input type="radio" name="color" value="#43C0CF" />
              <input type="radio" name="color" value="#3D402F" />
              <input type="radio" name="color" value="#4AAF00" />
              <input type="radio" name="color" value="#315BBD" />
              <input type="radio" name="color" value="#EC6115" />
              <input type="radio" name="color" value="#DC041D" />
              <input type="radio" name="color" value="#EFEAD7" />
            </div>
          </SelectWrapper>
          <SelectWrapper>
            <label htmlFor="brands">Brands</label>
            <Select name="brands" id="brands">
              <option value="Ukraine sport">Ukraine sport</option>
              <option value="M-TAC">M-TAC</option>
              <option value="Riot division">Riot division</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <label htmlFor="sortBy">Sort by</label>
            <Select name="sortBy" id="sortBy">
              <option value="Price">Price</option>
              <option value="Size">Size</option>
              <option value="Brand">Brand</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <label htmlFor="size">Size</label>
            <Select name="size" id="size">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <label htmlFor="show">Show</label>
            <Select name="show" id="show">
              <option value="16">16 per page</option>
              <option value="8">8 per page</option>
              <option value="4">4 per page</option>
            </Select>
          </SelectWrapper>
        </FilterForm>
      )}
    </FilterSection>
  );
};

export default Filter;
