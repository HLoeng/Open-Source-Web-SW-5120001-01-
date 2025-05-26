import React from 'react';
//import './App.css'; // Nếu bạn có file App.css
import Header from './components/Layout/Header/Header'; // Đường dẫn tới Header của bạn
import Footer from './components/Layout/Footer/Footer'; // Đường dẫn tới Footer (nếu có)
// Import các pages khác nếu cần
// import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Nội dung chính của trang, ví dụ: <HomePage /> hoặc Routes */}
        <p>Welcome to the UFC site!</p>
      </main>
       <Footer />
    </div>
  );
}

export default App;