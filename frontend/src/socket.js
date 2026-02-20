import { io } from 'socket.io-client';

// making a socket card kindaa things so that we could use our sockets information kindaa things anywhere if we need 
// we have this initSocket function defined here


export const initSocket =  () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  if (!backendUrl) {
    console.error('VITE_BACKEND_URL environment variable is not set');
    throw new Error('Backend URL is not configured. Please set VITE_BACKEND_URL in your environment variables.');
  }

  const options = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ["websocket"],
  };
  
  console.log("Socket URL:", backendUrl);

  return io(backendUrl, options);
};