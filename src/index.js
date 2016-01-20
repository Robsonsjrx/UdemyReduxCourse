import React from 'react';
import ReactDOM from 'react-dom';

//Components
import SearchBar from '../components/searchBar.js';


const API_KEY = 'AIzaSyCVxOhf7F_DLnlOQWxwvxpUbJoVQ5z7KFU';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
}

ReactDOM.render(<App />, document.querySelector('.container'))