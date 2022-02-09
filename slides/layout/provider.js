import React from 'react';
import { useDeck } from 'mdx-deck';

function Provider(props) {
  const deck = useDeck();
  return (
    <div
      style={{
        backgroundImage: `url("assets/img/bg-light.png")`,
        backgroundRepeat: 'no-repeat no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          height: 6,
          left: 0,
          right: 0,
          backgroundColor: '#3880FF',
          zIndex: 1,
        }}
      />
      {props.children}

      {deck.mode !== 'PRESENTER' ? (
        <div
          css={{
            padding: '14px 28px',
            background: 'rgba(255,255,255,0.3)',
            position: 'fixed',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontWeight: 'bolder',
            fontSize: '24px',
            backdropFilter: 'blur(10px)',
            borderTopLeftRadius: '30px',
            right: 0,
            bottom: 0,
            margin: 0,
            color: '',
          }}
        >
          @mhartington
        </div>
      ) : null}
    </div>
  );
}
export default Provider;
