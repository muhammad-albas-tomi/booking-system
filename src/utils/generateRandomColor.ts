export const generateRandomColor = (index: number) => {
  const colors = [
    'linear-gradient(135deg, #FF6B35, #F7931E)', // Pink to Blue
    'linear-gradient(135deg, #09203F 0%, #537895 100%)', // Dark Blue to Steel Blue
    'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)', // Teal to Green
    'linear-gradient(135deg, #8360C3 0%, #2EBFA5 100%)', // Purple to Teal
    'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)', // Orange-Red to Orange
  ];

  return colors[index % colors.length];
};
