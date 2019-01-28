'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
  }

  render() {
    return (
      <div>
        <Toolbar
        filters={this.props.filters}
        selected={this.state.selectedFilter}
        onSelectFilter={(filter) => this.setState({selectedFilter: filter})} />
        <Portfolio 
        projects={(this.state.selectedFilter === 'All') ? this.props.projects : this.props.projects.filter(item => item.category === this.state.selectedFilter)} />
      </div>
    )
  }
}