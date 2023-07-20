import {
  ColorPickerButton,
  FilterForm,
  FilterSection,
  Select,
  SelectWrapper,
  ToggleFilterButton,
  ResultCounter,
} from './Filters.styled';
import PropTypes from 'prop-types';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useState } from 'react';

const Filter = ({ allProducts }) => {
  const { width } = useWindowDimensions();
  const [isFilterOpened, setIsFilterOpened] = useState(true);
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const isMobileScreen = width < 768;
  const showFilter = (isMobileScreen && isFilterOpened) || !isMobileScreen;
  const toggleFilter = () => {
    setIsFilterOpened(prevState => !prevState);
  };
  const handleColorChange = event => {
    setSelectedColor(event.target.value);
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
          <div>
            <SelectWrapper className="icon-caret-down">
              <label htmlFor="price">Price</label>
              <Select name="Price" id="price">
                <option value="0-100">$0 - $100</option>
                <option value="100-500">$100 - $500</option>
                <option value=">100">&gt; $500</option>
              </Select>
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="color">Color</label>
              <div>
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#FFFFFF'}
                  type="radio"
                  name="color"
                  value="#FFFFFF"
                />
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#43C0CF'}
                  type="radio"
                  name="color"
                  value="#43C0CF"
                />
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#3D402F'}
                  type="radio"
                  name="color"
                  value="#3D402F"
                />
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#4AAF00'}
                  type="radio"
                  name="color"
                  value="#4AAF00"
                />
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#315BBD'}
                  type="radio"
                  name="color"
                  value="#315BBD"
                />
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#EC6115'}
                  type="radio"
                  name="color"
                  value="#EC6115"
                />
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#DC041D'}
                  type="radio"
                  name="color"
                  value="#DC041D"
                />
                <ColorPickerButton
                  onChange={handleColorChange}
                  checked={selectedColor === '#EFEAD7'}
                  type="radio"
                  name="color"
                  value="#EFEAD7"
                />
              </div>
            </SelectWrapper>
          </div>
          <div>
            <SelectWrapper className="icon-caret-down">
              <label htmlFor="brands">Brands</label>
              <Select name="brands" id="brands">
                <option value="Ukraine sport">Ukraine sport</option>
                <option value="M-TAC">M-TAC</option>
                <option value="Riot division">Riot division</option>
              </Select>
            </SelectWrapper>
            <SelectWrapper className="icon-caret-down">
              <label htmlFor="sortBy">Sort by</label>
              <Select name="sortBy" id="sortBy">
                <option value="Price">Price</option>
                <option value="Size">Size</option>
                <option value="Brand">Brand</option>
              </Select>
            </SelectWrapper>
          </div>
          <div>
            <SelectWrapper className="icon-caret-down">
              <label htmlFor="size">Size</label>
              <Select name="size" id="size">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </Select>
            </SelectWrapper>
            <SelectWrapper className="icon-caret-down">
              <label htmlFor="show">Show</label>
              <Select name="show" id="show">
                <option value="16">16 per page</option>
                <option value="8">8 per page</option>
                <option value="4">4 per page</option>
              </Select>
            </SelectWrapper>
          </div>
        </FilterForm>
      )}
      <ResultCounter>{allProducts.length} results in apparel</ResultCounter>
    </FilterSection>
  );
};

export default Filter;

Filter.propTypes = {
  allProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
