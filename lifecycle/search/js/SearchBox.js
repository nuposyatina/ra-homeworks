class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  isFixed() {
    return document.querySelector('.search-box').getBoundingClientRect().top <= 0;
  }

  setPosition = () => {
    return this.setState({fixed: this.isFixed()});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }  

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }
}