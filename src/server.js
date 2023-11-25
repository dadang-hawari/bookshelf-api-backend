// start 19:09 wita, ishoma 19:44 wita, lanjut 20:57, stop 23:17 besok lanjut. Lanjut jam 08:00 pagi, istirahat 8:47, lanjut sekitar jam 9:20am. Done 12:14 pm (februari 2023) seluruh saran belum terpenuhi
// pengecekan ulang dan menerapkan seluruh saran selesai 06:29 (november 2023)
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
