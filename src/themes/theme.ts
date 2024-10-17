import { extendTheme } from "@chakra-ui/react";

const formFieldBaseStyle = {
  bg: 'primary.soft',
};

const formFieldVariants = {
  outline: {
    field: {
      bg: 'primary.soft',
      _focus: {
        bg: 'primary.soft',
        borderColor: 'primary.deep',
        boxShadow: '0 0 0 1px primary.deep',
      },
    },
  },
};

const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
  },
  colors: {
    primary: {
      soft: '#f4f9fc',
      sky: '#3182ce',
      deep: '#223a66',
    },
  },
  components: {
    Input: {
      baseStyle: formFieldBaseStyle,
      variants: formFieldVariants,
      defaultProps: {
        variant: 'outline',
      },
    },
    Select: {
      baseStyle: formFieldBaseStyle,
      variants: formFieldVariants,
      defaultProps: {
        variant: 'outline',
      },
    },
    Textarea: {
      baseStyle: formFieldBaseStyle,
      variants: formFieldVariants,
      defaultProps: {
        variant: 'outline',
      },
    },
  },
});

export default theme;
