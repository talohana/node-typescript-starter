import app from './app';

const port = app.get('port');
const env = app.get('env');

app.listen(port, () => {
	console.log(`App is running at port ${port} in ${env} mode`);
});
