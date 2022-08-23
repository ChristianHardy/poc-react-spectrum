import { Button } from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';
import { useThemeContext } from "../../Providers/Theme";
import styles from './styles.module.css';

export interface IDarkMode {
  someVar?: boolean;
  someFn?: (param: boolean) => void;
}

function DarkMode(props: IDarkMode) {
  /**
   * Hooks
   */
  const { switchMode, theme } = useThemeContext();

  /**
   * Renders
   */
  return (
    <div className={styles.darkmodeWrapper}>
      <Button variant="primary" onPress={switchMode} isQuiet>
        { theme === 'dark'
          ? <Light aria-label="Go to light mode"/>
          : <Moon aria-label="Go to dark mode"/>
        }
      </Button>
    </div>
  );
}

export { DarkMode };
