function Header({ sortItemsByName }: { sortItemsByName: () => void }) {
    return (
      <div className="header">
        <h1>Items List</h1>
        <button onClick={sortItemsByName}>Sort by Name</button>
      </div>
    );
  }

  export default Header;