const Select = window.antd.Select;
const Form = window.antd.Form;


const Autocomplete = () => (
  <div>
    Тип квартиры:<br/>
    <Select style={{ width: 200 }} defaultValue='finished' select='small'>
      <Option value='new'>Квартира в новостройке</Option>
      <Option value='finished'>Готовая квартира</Option>
      <Option value='house'>Загородный дом</Option>
    </Select>
  </div>
);
