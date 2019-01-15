const Menu = function(props) {
  const { items, opened } = props;
  return (
    <div className={ opened ? "menu menu-opened" : "menu" }>
      <div className="menu-toggle"><span></span></div>
      {
        opened ? (<nav>
                   <ul>
                     { items.map((item, index) => <li key={ index }><a href={item.href}>{item.title}</a></li>) }
                   </ul>
                 </nav>) : null
      }
    </div>
  )
}