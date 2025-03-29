import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-light-secondary text-gray-700 dark:text-dark-text dark:bg-dark-secondary min-h-screen'>
        {children}
      </div>
    </div>
  );
}