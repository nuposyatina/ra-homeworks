'use strict';

const Stars = (props) => {
  const { count } = props;
  const renderStars = (count) => {
    const starsList = [];
    if (count >= 1 && count <= 5 && typeof count === 'number') {
      for (let i = 0; i < count; i++) {
        starsList.push(<Star />);
      }
      return starsList.map(el => <li>{el}</li>)
    }
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {renderStars(count)}
    </ul>
  )
}