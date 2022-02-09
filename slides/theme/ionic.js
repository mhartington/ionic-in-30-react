/** @jsx jsx */ import { jsx } from 'theme-ui';

import { swiss } from 'mdx-deck/themes';
import Provider from '../layout/provider';

const splitText = (children) =>
  typeof children === 'string'
    ? children.split(/\s+/).map((t, i) => <span key={i}>{t}</span>)
    : children;

const h1 = ({ children }) => (
  <h1
    sx={{
      variant: 'text.heading',
      color: 'heading',
      textTransform: 'capitalize',
      mt: 0,
      mb: 4,
      '> *': {
        display: 'inline-block',
        backgroundImage: (theme) => {
          const color = theme.colors.framework;
          return `linear-gradient(transparent 55%, ${color} 55%, ${color} 95%, transparent 95%)`;
        },
        backgroundSize: '100% 1.2em',
        backgroundPosition: '0.5em 0',
        backgroundRepeat: 'no-repeat space',
        wordBreak: 'keep-all',
        pr: '1em',
        mr: '-0.5em',
      },
    }}
  >
    {splitText(children)}
  </h1>
);

const h2 = ({ children }) => (
  <h2
    sx={{
      variant: 'text.heading',
      maxWidth: '60%',
      color: 'heading',
      lineHeight: '1.2em',
      textTransform: 'capitalize',
      mt: 0,
      mb: 2,
      '> *': {
        display: 'inline-block',
        backgroundImage: (theme) => {
          const color = theme.colors.ionic;
          return `linear-gradient(transparent 55%, ${color} 55%, ${color} 95%, transparent 95%)`;
        },
        backgroundSize: '100% 1.2em',
        backgroundPosition: '0.5em 0',
        backgroundRepeat: 'no-repeat space',
        wordBreak: 'keep-all',
        pr: '1em',
        mr: '-0.5em',
      },
    }}
  >
    {splitText(children)}
  </h2>
);

const theme = {
  googleFont:
    'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap',
  fontWeights: {
    body: 200,
    heading: 600,
    bold: 500,
  },
  fonts: {
    body: "'Roboto Mono', system-ui, sans-serif",
    monospace: "'Roboto Mono'",
  },
  components: {
    h1,
    h2,
  },

  colors: {
    primary: '#6699cc',
    heading: '#060B0A',
    text: '#5A6984',
    framework: '#61DAFB',
    ionic: '#bfe4ff',
  },
  styles: {
    Zoom: {
      backgroundColor: 'white'
    },
    Slide: {
      fontFamily: 'body',
      backgroundColor: 'none',
    },
    Split: {
      textAlign: 'right',
    },
    h1: {
      margin: '0 0 10px',
      color: 'heading',
    },
    h2: {
      margin: '0 0 10px',
      color: 'heading',
    },
    h3: {
      margin: '0 0 10px',
      color: 'heading',
      textTransform: 'capitalize',
    },
    h4: {
      margin: '0 0 10px',
      color: 'heading',
    },
    h5: {
      margin: '0 0 10px',
      color: 'heading',
    },
    h6: {
      margin: '0 0 10px',
      color: 'heading',
    },
    p: {
      margin: '10px 0 ',
    },
    a: {
      textDecoration: 'none',
      transition: 'color 0.15s ease',
      ':hover': {
        color: '#96B3F9',
      },
    },
    blockquote: {
      fontStyle: 'italic',
    },
    ul: {
      listStyle: 'none',
      paddingInlineStart: 0,
      textAlign: 'left',
    },
    li: {
      lineHeight: 2.2,
      textAlign: 'left',
    },
    img: {
      maxWidth: '100%',
    },
    root: {
      '.profile-img': {
        width: '250px',
        borderRadius: '50%',
        border: 'solid 2px rgba(217,217,217,0.7)',
      },
    },
  },
};
export default {
  ...swiss,
  ...theme,
  Provider,
};
