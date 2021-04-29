const publicIp = require('public-ip');

export const obtenerIp = async () => {
	
    return await publicIp.v4();

};

