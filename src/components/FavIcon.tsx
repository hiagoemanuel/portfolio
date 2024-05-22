export const FavIcon = ({ theme }: { theme: 'dark' | 'light' }) => (
  <div
    style={{
      padding: '4px',
      background: '#FF4342',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg width="24px" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.7634 8.03516H23.1063V10.917H14.6136V15.4927H22.4545V18.2086H18.2727H14.6136V22.8961H23.5V25.5003L11.7634 25.5001V8.03516Z"
        fill={theme === 'dark' ? '#201F1D' : '#E4DED0'}
      />
      <path
        d="M14.6136 0.567871V18.033H11.7672V10.9164H3.63637V18.033H0.471817V0.567871H3.63637V8.04947H11.7672V0.567871H14.6136Z"
        fill={theme === 'dark' ? '#201F1D' : '#E4DED0'}
      />
    </svg>
  </div>
)
