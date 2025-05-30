import Hero from './Hero';
import StarsBackground from './StarsBackground';

const HomePage: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Stars background */}
      <StarsBackground />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZsMy0zIDMgM3ptLTYgMGg2bC0zIDMtMy0zeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Hero content */}
      <Hero />
    </section>
  );
};

export default HomePage;
