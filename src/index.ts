import app from './app';
import logger from './utils/logger';

const port = app.get('port');
const env = app.get('env');

app.listen(port, () => {
	logger.info(`App is running at port ${port} in ${env} mode`);
	// console.log(`App is running at port ${port} in ${env} mode`);
});
