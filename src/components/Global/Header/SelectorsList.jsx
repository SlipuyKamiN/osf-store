const { SelectList, Select, CaretDownIcon } = require('./SelectorsList.styled');

const SelectorsList = () => {
  return (
    <SelectList>
      <li>
        <Select name="language">
          <option value="EN">EN</option>
          <option value="UA">UA</option>
        </Select>
        <CaretDownIcon className="icon-caret-down"></CaretDownIcon>
      </li>
      <li>
        <Select name="currency">
          <option value="US">$US</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </Select>
        <CaretDownIcon className="icon-caret-down"></CaretDownIcon>
      </li>
    </SelectList>
  );
};

export default SelectorsList;
