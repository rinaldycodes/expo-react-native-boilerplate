import { useAtom } from 'jotai'
import { themeAtom } from '../atoms/themeAtom'
import { Colors } from '@/constants/Colors';

export default function useTheme() {
    const [theme, setTheme] = useAtom(themeAtom);
    const themeColors = Colors[theme];

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme == 'light' ? 'dark' : 'light')
    }

  return {
    theme,
    toggleTheme,
    themeColors,
  }
}