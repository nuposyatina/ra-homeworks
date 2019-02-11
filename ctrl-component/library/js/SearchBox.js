const SearchBox = (props) => {
	const searchText = event => {
		props.filterBooks(event.currentTarget.value)
	}
	
	return (
		<input type="text" placeholder="Поиск по названию или автору" value={props.value} onChange={searchText}/>
	);
}