export const successAnimation = {
  visible: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      type: 'spring',
      stiffness: 840,
      damping: 18,
      mass: 2,
      opacity: {
        duration: 0.3,
      },
    },
  },
  hidden: {
    opacity: [1, 1, 1, 0],
    scale: [1, 2, 0],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const emptyTrashAnimation = {
  visible: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      type: 'spring',
      stiffness: 240,
      damping: 12,
      mass: 0.8,
      opacity: {
        duration: 0.3,
      },
    },
  },
  hidden: {
    display: 'absolute',
    opacity: [1, 1, 1, 0],
    scale: [1, 1.4, 0],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const layoutTransition = {
  type: 'spring',
  stiffness: 340,
  damping: 12,
  mass: 0.8,
};
