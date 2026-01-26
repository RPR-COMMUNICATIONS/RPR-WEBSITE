import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-[108px] pb-[70px] min-h-screen">
        {/* Main content area */}
      </main>
      <Footer />
    </div>
  );
}

export default App;