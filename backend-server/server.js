const Hapi = require('@hapi/hapi');
const postgres = require('postgres')

const sql = postgres('postgres://cse-admin:cse123@localhost:5432/cse-db')
function init(){
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    server.route({
        method: 'POST',
        path: '/register/',
        handler: async (request, h) => {
            console.log("here")
            const registrationDetails = JSON.parse(request.payload);
            await sql`insert into registration (name, department,email, college) values (${registrationDetails.name}, ${registrationDetails.department} , ${registrationDetails.email}, ${registrationDetails.college})`
            console.log('Registration Done')
            return 'Success'
            
        }
    });

    server.route({
        method: 'GET',
        path: '/list/',
        handler: async (request, h) => {
            const result = await sql`select  * from registration`
            return result;
            
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello sdsd World!';
        }
    });
    console.log("Starting Server");
    server.start();
};



init();