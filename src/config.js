const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '',
    defaultPath: '/login',
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12,
    theme: 'dark',
    backendUri: 'http://localhost:8080',
    faceRecognitionUri: 'http://localhost:8083',
    jwtSecret: '$pEF^G9M6*QF2zo'
};

export default config;
