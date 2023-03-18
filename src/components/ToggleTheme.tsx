import { useColorMode, IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ToggleTheme: React.FC<IconButtonProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={isLight ? <FaSun /> : <FaMoon />}
      {...props}
    />
  );
};