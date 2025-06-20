function App() {
	return <Navbar />;
}
const Navbar = function () {
	return (
		<header className='header'>
			<nav className='nav'>
				<Logo />
				<SearchBar />
			</nav>
		</header>
	);
};
const Logo = function () {
	return <h1>hop_jobs</h1>;
};
const SearchBar = function () {
	return (
		<div className='search-container'>
			<h1>FInd your dream job</h1>
			<div className='search-bar'>
				<input
					type='search'
					name=''
					id='search'
					placeholder='keyword...'
					className='search'
				/>
				<Button>search</Button>
			</div>
		</div>
	);
};
const Button = function ({ children }) {
	return <button className='btn'>{children}</button>;
};
export default App;
