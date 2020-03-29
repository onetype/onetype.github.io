import { runSass } from 'sass-true';

const INDEX = 'styles/index.scss';
const FILE_NAME = `${ __dirname }/${ INDEX }`;

runSass({ file: FILE_NAME }, { describe, it });
