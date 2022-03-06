/**
* This is central hub were we can export components. 
* Now 'App.js' can utilize import in short way
* e.g. import { Navbar, DeviceCard } from './components';
*
* DRY method of coding
*/

export { default as Navbar } from './Navbar';
export { default as DeviceCard } from './DeviceCard';
export { default as DeviceLog } from './DeviceLog';
